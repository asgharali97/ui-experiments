
const ConfirmMDailog = () => {
  return (
    <>
      <div className="w-82 h-48 bg-neutral-900 rounded-[2.2rem] px-8 overflow-hidden
      shadow-[inset_0px_-2px_2px_-2px_oklch(92%_0.03_85),inset_0px_2px_4px_-2px_oklch(90%_0.04_80),inset_-1px_0px_1px_-2px_oklch(90%_0.04_80),inset_1px_0px_2px_-2px_oklch(85%_0.02_90)]
      ">
        <div className="flex justify-center relative">
          <div className="bg-[oklch(83.7% 0.128 66.29)] absolute bottom-2 w-18 h-32 rounded-full opacity-80 z-20 blur-[55px] shadow-[0_0 40px_20px_oklch(83.907%_0.11653_68.733),_0_0_100px_50px_oklch(92.856%_0.05275_69.823);]"></div>
        </div>
        <div className="flex flex-col h-full gap-4 justify-center items-end ">
          <h1 className="mt-12 text-center text-white text-lg z-50">
            Please confirm that you want to delete this project.
          </h1>
          <div className="py-8 w-full flex h-full gap-4 justify-between items-end">
            <button className="py-2 px-10 text-md font-light text-neutral-200 bg-neutral-800 rounded-2xl">
              Delete
            </button>
            <button className="py-2 px-10 text-md font-light text-neutral-              200 bg-neutral-800 rounded-2xl">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmMDailog;
