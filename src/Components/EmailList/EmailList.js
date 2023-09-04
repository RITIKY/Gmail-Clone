import React, { useEffect, useState } from "react";
import "./emaillist.css";
import EmailListSet from "./EmailListSet";
import EmailType from "../EmailType/EmailType";
import EmailBody from "../EmailBody/EmailBody";
import Compose from "../Compose/Compose";
import { database } from "../../firebase";
import { collection, onSnapshot, query, orderBy} from 'firebase/firestore'


function EmailList() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    const emailsCollectionRef = collection(database, 'emails');
    const q = query(emailsCollectionRef, orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="emaillist">
      <EmailListSet />
      <EmailType />
      {
        emails.map(({id, data})=>{
          return <EmailBody key={id} name = {data.Recipients} email={data.from} subject={data.Subject} message={data.Message} time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()}/>
        })
      }
    </div>
  );
}

export default EmailList;
