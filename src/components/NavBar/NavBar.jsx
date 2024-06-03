import React from "react";
import user from '../../assets/user.jpg'
import { LuSearch } from "react-icons/lu";
import { IoIosPulse } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className="py-4 px-10 bg-[#1a1a1f] sticky top-0 z-10 flex flex-row items-center justify-between">
      <h1 className="text-2xl font-semibold">Wi Jungle Dashboard</h1>

      <div className="flex flex-row items-center gap-8">
        <LuSearch className="text-2xl" />
        <IoIosPulse className="text-2xl" />

        <img src={user} alt="user" className="w-10 h-10 rounded-full border-2 border-white" />
      </div>
    </nav>
  );
};

export default NavBar;
