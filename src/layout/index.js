import React from "react";
import Navbar from "../component/nav/Navbar";
import Footer from "../component/footer/Footer";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <div className="max-w-screen min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="mt-20">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default index;
