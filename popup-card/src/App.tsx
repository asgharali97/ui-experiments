import React from "react";
import ConfirmDailog from './components/ConfirmMDailog'
import Dummy from './components/dummy'
import "./App.css"
import DashboardCard from "./components/DashboardCard";
import Glassy from "./components/Glassy";


const App = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-black text-white flex justify-center items-center geist">
        <DashboardCard/>
      </div>
    </>
  );
};

export default App;
