import React from "react";
import "./header.css";
import IconButton from "@mui/material/IconButton";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from '@mui/icons-material/Tune';
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { getAuth } from 'firebase/auth';

function Header() {
  const user = useSelector((state) => state.value)
  // console.log(user,"Hello")
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
        <ReorderIcon />
        </IconButton>
        <img
          src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
          alt="logo"
          className="logo"
        />
        <span className="gmail">Gmail</span>
      </div>
      <div className="header_middle">
        <div className="search_mail">
            <IconButton>
            <SearchIcon />
            </IconButton>
          <input type="text" placeholder="Search mail" />
          <IconButton>
          <TuneIcon />
          </IconButton>
        </div>
      </div>
      <div className="header_right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar src={user?.photoURL} onClick={()=>getAuth().signOut}/>
      </div>
    </div>
  );
}

export default Header;
