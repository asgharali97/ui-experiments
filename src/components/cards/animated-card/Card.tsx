import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import react from "../assets/react.svg";
import { IconX, IconPointerCode,IconAirBalloonFilled,IconApps,IconBrandSwift, IconPlus, } from "@tabler/icons-react";
const Card = () => {
const [open, setOpen] = useState(true);
return (
  <>
<AnimatePresence>
    {open && (
      <motion.div
        initial={{
            opacity:0,
            filter:'blur(10px)',
            scale:0.98
        }}
        animate={{
            opacity:1,
            filter:'blur(0px)',
            scale:1
        }}
        exit={{
            opacity:0,
            filter:'blur(10px)',
            scale:0.96
        }}
        transition={{
            ease:'easeInOut',
            duration:0.3
        }}
      className="w-[27rem] h-[37rem] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-lg p-6 flex flex-col">
        <h1 className="font-bold text-xl">Built things that works Fast</h1>
        <p className="text-neutral-600 mt-2 text-lg">
          Let your users discover and join organizations based on their email
          domain.
        </p>
        <div className="flex justify-center items-center">
          <button onClick={() => setOpen(!open)} className="py-2 px-4 flex items-center gap-2 cursor-pointer rounded-md mt-6 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
            <img src={react} alt="" className="h-6 w-6" />
            EventShpere
            {
                open ? <IconX className="h-4 w-4"/> : <IconPlus className="h-4 w-4"/>
            }
          </button>
        </div>
        <motion.div className="w-full h-82 mt-4 rounded-lg border border-dashed border-neutral-300 bg-gray-100 relative">
          <motion.div 
          initial={{
            opacity:0,
            scale:0.96,
            filter: "blur(10px)",
          }}
          whileHover={{
            opacity:100,
            scale:1.02,
            filter:'blur(0px)'
          }}
          transition={{
            duration:0.3,
            ease:'easeInOut'
            }}
          className="absolute bg-white h-full w-full inset-0 rounded-lg divide-y divide-neutral-300 border  border-neutral-200">
            <div className="flex gap-2 py-4 px-4">
              <div className="h-10 w-10 flex-shrink-0 bg-grdeient-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white flex items-center justify-center rounded-md">
                <IconPointerCode className="fill-neutral-600 stroke-neutral-600"/>
              </div>
              <div className="flex flex-col px-2">
                <p className="text-md text-neutral-700 font-bold">
                  Start a new project
                </p>
                <p className="text-sm text-neutral-400">
                  Create a new project from a template
                </p>
              </div>
            </div>
             <div className="flex gap-2 py-4 px-4">
              <div className="h-10 w-10 flex-shrink-0 bg-grdeient-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white flex items-center justify-center rounded-md">
                <IconAirBalloonFilled className="fill-neutral-600 stroke-neutral-600"/>
              </div>
              <div className="flex flex-col px-2">
                <p className="text-md text-neutral-700 font-bold">
                  Take inspration from others
                </p>
                <p className="text-sm text-neutral-400">
                    Explore projects made by the community
                </p>
              </div>
            </div>
            <div className="flex gap-2 py-4 px-4">
              <div className="h-10 w-10 flex-shrink-0 bg-grdeient-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white flex items-center justify-center rounded-md">
                <IconApps className="fill-neutral-600 stroke-neutral-600"/>
              </div>
              <div className="flex flex-col px-2">
                <p className="text-md text-neutral-700 font-bold">
                  Get multiple Tools Together
                </p>
                <p className="text-sm text-neutral-400">
                    Integrate with your favorite tools and services
                </p>
              </div>
            </div>
            <div className="flex gap-2 py-4 px-4">
              <div className="h-10 w-10 flex-shrink-0 bg-grdeient-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white flex items-center justify-center rounded-md">
                <IconBrandSwift className="fill-neutral-600 stroke-neutral-600"/>
              </div>
              <div className="flex flex-col px-2">
                <p className="text-md text-neutral-700 font-bold">
                  Work Fast not slow
                </p>
                <p className="text-sm text-neutral-400">
                    Optimize your workflow with performance in mind
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
         <div className="flex justify-center items-center mt-4 gap-2 cursor-pointer">
              <button className="h-8 w-8 flex-shrink-0 bg-grdeient-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white flex items-center justify-center rounded-full">
                <IconPlus className="fill-neutral-600 
                stroke-neutral-600 h-6 w-6"/>
              </button>
              <span className="text-sm text-neutral-500">
                Add integration
              </span>
        </div>
        </motion.div>
        )}
        </AnimatePresence>
    </>
  );
};

export default Card;
