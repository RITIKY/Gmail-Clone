import React from "react";
import "./emaildetails.css";
import IconButton from "@mui/material/IconButton";
import ArchiveIcon from "@mui/icons-material/Archive";
import ReportIcon from "@mui/icons-material/Report";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import LabelIcon from "@mui/icons-material/Label";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PrintIcon from "@mui/icons-material/Print";
import LaunchIcon from "@mui/icons-material/Launch";
import { Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ReplyIcon from "@mui/icons-material/Reply";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Emaildetails() {
  const selectedMessage = useSelector((state) => state.selectedMessage);
  console.log(selectedMessage)
const navigate = useNavigate();
const handleButtonClick = () =>{
    navigate("/")
}
  return (
    <div className="details_Message">
      <>
        <div className="emaillist_set">
          <div className="emaillist_set_left">
            <IconButton>
              <ArrowBackIcon onClick={handleButtonClick}/>
            </IconButton>
            <IconButton>
              <ArchiveIcon />
            </IconButton>
            <IconButton>
              <ReportIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
            <IconButton>
              <MarkunreadIcon />
            </IconButton>
            <IconButton>
              <AccessTimeIcon />
            </IconButton>
            <IconButton>
              <TaskAltIcon />
            </IconButton>
            <IconButton>
              <DriveFileMoveIcon />
            </IconButton>
            <IconButton>
              <LabelIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>

          <div className="emaillist_set_right">
            <p>1-50 of 8,2006</p>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </div>
        </div>

        <div className="detailshead">
          <div className="head_left">
            <h4>{selectedMessage.subject}</h4>
          </div>
          <div className="head_right">
            <PrintIcon />
            <LaunchIcon />
          </div>
        </div>
        <div className="detailsmiddle">
          <div className="middle_left">
            <IconButton>
              <Avatar />
            </IconButton>
            <h4>{selectedMessage.name}</h4>
            <p>{selectedMessage.email}</p>
          </div>
          <div className="middle_right">
            <p>{selectedMessage.time}</p>
            <IconButton>
              <StarIcon />
            </IconButton>
            <IconButton>
              <ReplyIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="detailsbody">
          <p>
            {selectedMessage.message}
          </p>
        </div>
        <div className="details_btn">
          <Button variant="outlined" className="reply">
            Reply
          </Button>
          <Button variant="outlined" className="forward">
            Forward
          </Button>
        </div>
      </>
    </div>
  );
}

export default Emaildetails;
