import React from "react";
import { GrPieChart } from "react-icons/gr";
import { BsPinAngle } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { MdOutlineSubject } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";

const SidePanel = () => {
  return (
    <aside className="SidePanel h-[92%] fixed z-10 bg-blue-600 p-4 flex flex-col items-center justify-evenly gap-y-4 text-2xl">
      <GrPieChart />
      <BsPinAngle />
      <BiBell />
      <HiOutlineUserCircle />
      <IoExtensionPuzzleOutline />
      <MdOutlineSubject />
      <BsCalendar3 />
    </aside>
  );
};

export default SidePanel;
