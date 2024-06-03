import React from "react";
import user from "../../assets/user.jpg";
import { LuSearch } from "react-icons/lu";
import { IoIosPulse } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";

const NavBar = () => {
  return (
    <nav className="py-4 sm:px-10 px-4 bg-[#161717] sticky top-0 z-10 flex flex-row items-center justify-between">
      <h1 className="sm:text-2xl text-lg font-semibold">Wi Jungle Dashboard</h1>

      <div className="flex flex-row items-center sm:gap-8 gap-4">
        <LuSearch className="sm:text-2xl text-lg" />
        <IoIosPulse className="sm:text-2xl text-lg" />

        <img
          src={user}
          alt="user"
          className="sm:w-10 w-6 sm:h-10 h-6 object-cover rounded-full border-2 border-white"
        />

        <CgMenuGridO className="sm:hidden block sm:text-2xl text-lg" />
      </div>
    </nav>
  );
};

export default NavBar;
