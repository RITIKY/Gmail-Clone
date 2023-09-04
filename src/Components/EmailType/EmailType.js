import React from "react";
import "./emailtype.css"
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/Inbox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import GroupIcon from "@mui/icons-material/Group";

function EmailType() {
  return (
    <div className="emailtype">
      <div className="email_options email_options--active">
          <InboxIcon />
          <p>Primary</p>
      </div>
      <div className="email_options">
          <LocalOfferIcon />
          <p>Promotion</p>
      </div>
      <div className="email_options">
          <GroupIcon />
          <p>Social</p>
      </div>
    </div>
  );
}

export default EmailType;
