import React from "react";
import "./emailbody.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import {useNavigate} from 'react-router-dom'
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useDispatch } from "react-redux";
import { openMessage } from "../../Store/action";
// import { OPEN_MESSAGE } from "../../Store/Constants";


function EmailBody({name,email,subject,message,time}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setMessage = () =>{
    const messageData = {
      name,
      email,
      subject,
      message,
      time,
    };
    dispatch(openMessage(messageData));
    navigate('/mail')
  }
  return (
    <div className="emailbody" onClick={setMessage}>
      <div className="emailbody_left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
        
        <h4>{name.split('@')[0]}</h4>
      </div>
      <div className="emailbody_middle">
        <div className="emailbody_msg">
          <p>
            <b>{subject}</b> - {message}
          </p>
        </div>
      </div>
      <div className="emailbody_right">
        <p>{time}</p>
      </div>
    </div>
  );
}

export default EmailBody;
