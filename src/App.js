import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/NavBar";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import User from "./pages/User";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
