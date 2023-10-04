import React from "react";
import { Link } from "react-router-dom";
import { link } from "../../assets/database/Database";

const Navbar = () => {
  return (
    <div className="w-screen h-[5rem] flex justify-center items-center bg-white/90 shadow-sm fixed z-50">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div>
          <Link to="/">
            <h2 className=" text-2xl font-extrabold capitalize">Orikiyoruba</h2>
          </Link>
        </div>
        <div className="">
          <ul className="flex justify-between items-center gap-12">
            {link.map((item) => (
              <li key={item.id} className=" text-base font-semibold capitalize active:text-brown hover:text-brown outline-none">
                <Link to={item.path}>{item.link}</Link>
              </li>
            ))}
            <li className="bg-brown px-6 py-2 rounded-md text-base font-semibold text-smokeWhite hover:bg-brown/80">
              <Link>Donate</Link>
            </li>
          </ul>
        </div>
      </div>
       
    </div>
  );
};

export default Navbar;
