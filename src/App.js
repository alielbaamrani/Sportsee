import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
 import Home from "./pages/Home/Home";
// import Error from "./pages/Error";
 import User from "./pages/User/User";

export default function App() {
    
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header />
    <SideBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  </BrowserRouter>
  );
}