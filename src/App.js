import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/NavBar";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import User from "./pages/User";
import Error from "./pages/Error";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
