import React, { useState } from "react";
import "./compose.css";
import RemoveIcon from "@mui/icons-material/Remove";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmnoticonIcon from "@mui/icons-material/InsertEmoticon";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import PhotoIcon from "@mui/icons-material/Photo";
import LockClockIcon from "@mui/icons-material/LockClock";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from '@mui/icons-material/Delete';
import { CLOSE_COMPOSE } from "../../Store/Constants";
import { useDispatch, useSelector } from "react-redux";
import { Receipt } from "@mui/icons-material";
import { collection, addDoc } from 'firebase/firestore'
import { database, getServerTimestamp } from "../../firebase";
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';



function Compose() {
  const [Recipients,setRecipients] = useState("")
  const [Subject,setSubject] = useState("")
  const [Message,setMessage] = useState("")

  const dispath = useDispatch()
  const user = useSelector((state) => state.value)


  const formSubmit = (e)=>{
    e.preventDefault();
    if(Recipients ==="")
    {
      return alert("Please specify atleast one Recipient");
    }
    if(Subject ==="")
    {
      return alert("Want to send mail without subject and text?");
    }
    if(Message ===" ")
    {
      return alert("Want to send mail without text?");
    }
    const emailsCollectionRef = collection(database, 'emails');
    addDoc(emailsCollectionRef, {
      Recipients,
      Subject,
      Message,
      from:user.email,
      fromName:user.displayName,
      timestamp: getServerTimestamp(),
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
    
    setRecipients("");
    setSubject(""); 
    setMessage("");
    alert("Email sent successfully");
    dispath({type:'CLOSE_COMPOSE'})
  }
  return (
    <div className="compose">
      <div className="compose_header">
        <div className="compose_header_left">
          <span>New Message</span>
        </div>
        <div className="compose_header_right">
          <RemoveIcon />
          <OpenInFullIcon />
          <CloseIcon onClick={()=>dispath({type:'CLOSE_COMPOSE'})} />
        </div>
      </div>
      <form onSubmit={formSubmit}>
      <div className="compose_body">
        <div className="compose_body_form">
          <input type="email" name= "email" placeholder="Recipients" value={Recipients} onChange={(e) => setRecipients(e.target.value)}/>
          <input type="text" name= "text" placeholder="Subject" value={Subject} onChange={(e) => setSubject(e.target.value)}/>
          <textarea rows="26" name= "message" onChange={(e) => setMessage(e.target.value)}>{Message}</textarea>
        </div>
      </div>
      <div className="compose_footer">
        <div className="compose_footer_left">
          <Button type="submit" variant="outlined" endIcon={<KeyboardArrowDownIcon />} className="send_btn">
            Send
          </Button>
        </div>
        <div className="compose_footer_right">
            <FormatColorTextIcon/>
            <AttachFileIcon/>
            <LinkIcon/>
            <InsertEmnoticonIcon/>
            <AddToDriveIcon/>
            <PhotoIcon/>
            <LockClockIcon/>
            <CreateIcon/>
            <MoreVertIcon/>
            <DeleteIcon className="del"/>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Compose;
