import React from "react";
import "./emaillistset.css"
import IconButton from "@mui/material/IconButton";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function EmailListSet() {
  return (
    <div className="emaillist_set">
      <div className="emaillist_set_left">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>

      <div className="emaillist_set_right">
      <p>1-25 of 1,026</p>
        <IconButton>
          <ChevronLeftIcon/>
        </IconButton>
        <IconButton>
          <ChevronRightIcon/>
        </IconButton>
      </div>
    </div>
  );
}

export default EmailListSet;
