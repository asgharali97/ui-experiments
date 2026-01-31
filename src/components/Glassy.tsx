import React from "react";

const Glassy = () => {
  return (
    <>
      <div className="min-h-screen w-full py-12">
        <div className="flex">
          <div className="h-96 w-96 rounded-[4.5rem] bg-gradient-to-b from-[var(--bg-grad-t)] to-[var(--bg-grad-b)] shadow-[inset_4px_4px_8px_-2px_#252525,inset_4px_-4px_8px_-2px_#282828,inset_4px_4px_8px_-2px_#fff,inset_-4px_-4px_8px_-2px_#fff] mx-4"></div>
          <div className="icon mx-4"></div>
        </div>
        <div className="bg-[url('https://www.allianz.com/en/mediacenter/news/reports/250703-nature-on-the-brink-why-a-thriving-planet-matters-for-us-all/_jcr_content/root/parsys/wrapper/wrapper/image_copy_copy.img.82.1280.jpeg/1751523991160/nature-on-the-brink-3b.jpeg')] bg-cover bg-no-repeat h-112 w-md flex justify-center items-center">
          <div className="h-96 w-96 bg-white/20 backdrop-blur-lg rounded-2xl border-[0.5px] border-white/80 flex justify-center items-center">
            <div className="bg-white h-94 w-94 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Glassy;
