import React from "react";
import { GrPieChart } from "react-icons/gr";
import { BsPinAngle } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { MdOutlineSubject } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { GoTriangleRight } from "react-icons/go";

const SidePanel = () => {
  return (
    <aside className="SidePanel h-[92%] fixed z-10 bg-blue-600 p-4 sm:flex hidden flex-col items-center justify-evenly gap-y-4 text-2xl">
      <button className="flex flex-row items-center">
        <GrPieChart />
        <GoTriangleRight className="text-sm" />
      </button>
      <button className="flex flex-row items-center">
        <BsPinAngle />
      </button>
      <button className="flex flex-row items-center">
        <BiBell />
      </button>
      <button className="flex flex-row items-center">
        <HiOutlineUserCircle />
      </button>
      <button className="flex flex-row items-center">
        <IoExtensionPuzzleOutline />
      </button>
      <button className="flex flex-row items-center">
        <MdOutlineSubject />
      </button>
      <button className="flex flex-row items-center">
        <BsCalendar3 />
      </button>
    </aside>
  );
};

export default SidePanel;
