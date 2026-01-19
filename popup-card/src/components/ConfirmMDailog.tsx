import { useState } from "react";
import { motion } from 'motion/react';

const ConfirmMDailog = () => {

  const [open, setOpen] = useState(true)

  return (
    <>
      {
        open ? (
          <div className="mx-4">
            <motion.button
              layoutId={'container'}
              onClick={() => setOpen(!open)}
              className="px-6 py-2 rounded-2xl text-lg font-bold bg-neutral-900
      shadow-[inset_0px_1px_2px_#ffffff70,0px_4px_6px_#00000030,0px_6px_10px_#00000015]
        ">
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                layoutId={'message'}
              >
                Delete
              </motion.span>
            </motion.button>

          </div>
        ) : (
          <motion.div
            layoutId={'container'}
            className="w-82 h-48 bg-neutral-900 rounded-[2.2rem] px-8 overflow-hidden
      shadow-[inset_0px_-1px_2px_-2px_oklch(92%_0.03_85),inset_0px_2px_4px_-2px_oklch(90%_0.04_80),inset_-2px_0px_1px_-2px_oklch(90%_0.04_80),inset_2px_0px_1px_-2px_oklch(85%_0.02_90)]
      ">
            <div className="flex justify-center relative">
              <div className="bg-orange-300 absolute bottom-2 w-18 h-32 rounded-full opacity-85 z-20 blur-[55px] shadow-[0_0 40px_20px_oklch(83.907%_0.11653_68.733),_0_0_100px_50px_oklch(92.856%_0.05275_69.823)]"></div>
            </div>
            <p></p>
            <div className="flex flex-col h-full gap-4 justify-center items-end ">
              <div className="flex justify-center items-center">
                <motion.h1
                  layoutId={'message'}
                  className="mt-12 text-center text-white text-lg z-50">
                  Please confirm that you want to delete this project.
                </motion.h1>
              </div>
              <div className="py-8 w-full flex h-full gap-4 justify-between items-end">
                <button className="py-2 px-10 text-md font-light text-neutral-200 bg-neutral-800 rounded-2xl 
            shadow-[inset_0px_1px_1px_#ffffff70,inset_0px_2px_4px_#00000015]">
                  Delete
                </button>
                <button className="py-2 px-10 text-md font-light text-neutral-              200 bg-neutral-800 rounded-2xl shadow-[inset_0px_1px_1px_#ffffff70,inset_0px_2px_4px_#00000015]"
                  onClick={() => setOpen(!open)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )
      }
    </>
  );
};

export default ConfirmMDailog;
