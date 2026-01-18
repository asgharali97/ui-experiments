import React from "react";
import ConfirmDailog from './components/ConfirmMDailog'
import "./App.css"


const App = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-black text-white flex justify-center items-center geist">
        <ConfirmDailog/>
      </div>
    </>
  );
};

export default App;
