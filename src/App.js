import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Invicing from "./pages/Invicing";
import Intro from "./pages/Intro";

import Setting from "./pages/AllSettings/Setting";
import Extras from "./pages/AllSettings/Extras";
import Funding from "./pages/AllSettings/Funding";
import AddSession from "./pages/AllSettings/AddSesion";
import AddPurchase from "./pages/AllSettings/AddPurchase";
import AddFunding from "./pages/AllSettings/AddFunding";
import Messages from "./pages/Messages";
import Activity from "./pages/Activity";
import Feed from "./pages/AllFeed/Feed";
import Filter from "./pages/AllFeed/Filter";
import NewActivity from "./pages/AllFeed/New Activity";
import Room from "./pages/Room";
import AddRoom from "./pages/AddRoom";
import AllStaff from "./pages/Staff/AllStaff";
import AddStaff from "./pages/Staff/AddStaff";
import AddChild from "./pages/Children/AddChild";
import AllChild from "./pages/Children/AllChild";

// import Maseggs from './pages/Maseggs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/Invicing" exact element={<Invicing />}></Route>
          <Route path="/Setting" exact element={<Setting />}></Route>
          <Route path="/AddSession" exact element={<AddSession />}></Route>
          <Route path="/Extras" exact element={<Extras />}></Route>
          <Route path="/AddPurchase" exact element={<AddPurchase />}></Route>

          <Route path="/Funding" exact element={<Funding />}></Route>
          <Route path="/AddFunding" exact element={<AddFunding />}></Route>

          <Route path="/Feed" exact element={<Feed />}></Route>
          <Route path="/Filter" exact element={<Filter />}></Route>

          <Route path="/NewActivity" exact element={<NewActivity />}></Route>
          <Route path="/Activity" exact element={<Activity />}></Route>

          <Route path="/Messages" exact element={<Messages />}></Route>

          <Route path="/Room" exact element={<Room />}></Route>
          <Route path="/AddRoom" exact element={<AddRoom />}></Route>

          <Route path="/AllStaff" exact element={<AllStaff />}></Route>
          <Route path="/AddStaff" exact element={<AddStaff />}></Route>

          <Route path="/AddChild" exact element={<AddChild />}></Route>
          <Route path="/AllChild" exact element={<AllChild />}></Route>

          {/* <Route path="/Invoicing" exact element={<Invicing/>}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
