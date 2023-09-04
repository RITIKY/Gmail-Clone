import React from "react";
import "./sidebar.css";
import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOpt from "./SidebarOpt";
import InboxIcon from "@mui/icons-material/Inbox";
import StarRateIcon from "@mui/icons-material/StarRate";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import LabelIcon from "@mui/icons-material/Label";
import DeleteIcon from "@mui/icons-material/Delete";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { OPEN_COMPOSE } from "../../Store/Constants";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="sidebar">
      <Button
        onClick={() => dispath({ type: "OPEN_COMPOSE" })}
        variant="outlined"
        startIcon={<CreateIcon />}
        className="compose_btn"
      >
        Compose
      </Button>
      <br />
      <div onClick={handleClick}>
        <SidebarOpt
          Icon={InboxIcon}
          title="Inbox"
          number="220"
          isactive={true}
        />
      </div>
      <SidebarOpt Icon={StarRateIcon} title="Starred" />
      <SidebarOpt Icon={WatchLaterIcon} title="Snoozed" />
      <SidebarOpt Icon={LabelImportantIcon} title="Important" />
      <SidebarOpt Icon={SendIcon} title="Sent" number="20" />
      <SidebarOpt Icon={DraftsIcon} title="Drafts" />
      <SidebarOpt Icon={LabelIcon} title="Category" />
      <SidebarOpt Icon={DeleteIcon} title="Trash" number="2" />
      <SidebarOpt Icon={FindInPageIcon} title="Document" />
      <SidebarOpt Icon={ExpandMoreIcon} title="More" />
    </div>
  );
}

export default SideBar;
