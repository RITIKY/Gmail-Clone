import Header from "./Components/Header/Header";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import EmailList from "./Components/EmailList/EmailList";
import Compose from "./Components/Compose/Compose";
import { useSelector } from "react-redux";
import Emaildetails from "./Components/EmailDetails/Emaildetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
function App() {
  const isMainBox = useSelector((state) => state.composeisopen);
  const user = useSelector((state) => state.value);
  // console.log(user,"helloo")
  return (
    <BrowserRouter>
      {user ? (
        <div className="App">
          <Header />
          <div className="app_body">
            <SideBar />
            <Routes>
              <Route exact path="/" element={<EmailList />} />
              <Route path="/mail" element={<Emaildetails />} />
            </Routes>
          </div>
          {isMainBox && <Compose />}
        </div>
      )
      : (<Login />)}
    </BrowserRouter>
  );
}

export default App;
