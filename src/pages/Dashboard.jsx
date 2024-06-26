import React from "react";
import CustomBarChart from "../components/Graphs/CustomBarChart";
import CustomPieChart from "../components/Graphs/CustomPieChart";
import CustomLineChart from "../components/Graphs/CustomLineChart";
import CustomAreaChart from "../components/Graphs/CustomAreaChart";
import CustomScatter from "../components/Graphs/CustomScatter";
import { useMediaQuery } from "@mui/material";
import SidePanel from "../components/SidePanel/SidePanel";
import NavBar from "../components/NavBar/NavBar";

const Dashboard = ({ list }) => {
  const is500px = useMediaQuery("(min-width: 500px)");
  const listTemplateColumns = `repeat(auto-fill, minmax(${
    is500px ? 350 : 250
  }px, 1fr))`;
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: listTemplateColumns,
  };

  return (
    <React.Fragment>
      <NavBar />

      {/* Check if list is an array and has items */}
      {Array.isArray(list) && list.length > 0 ? (
        <div className="Dashboard w-full flex flex-row">
          <SidePanel />

          <div className="Graphs w-full ms:gap-y-6 gap-y-3 flex flex-col p-6 sm:ml-20 ml-0">
            <h1 className="sm:text-2xl text-lg font-semibold sm:mb-4">Dashboard</h1>
            <div
              className="gridLayout sm:gap-6 gap-3 w-full"
              style={containerStyle}
            >
              <CustomPieChart data={list} />
              <CustomBarChart data={list} />
              <CustomAreaChart data={list} />
            </div>

            <CustomLineChart data={list} />
            <CustomScatter data={list} />
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </React.Fragment>
  );
};

export default Dashboard;
