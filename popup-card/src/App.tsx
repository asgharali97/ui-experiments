import React from "react";
import PopupCard from "./components/PopupCard";
import PopupCardGsap from "./components/PopupCardGsap";
const App = () => {
  return (
    <>
      <div className="w-full h-screen bg-neutral-100 text-black flex justify-center items-center geist">
        <div className="w-92 82  flex justify-center rouned-lg mx-4 py-4">
          <PopupCard />
        </div>
        <div className="w-92 82  flex justify-center rouned-lg mx-4 py-4">
          <PopupCardGsap />
        </div>
      </div>
    </>
  );
};

export default App;
