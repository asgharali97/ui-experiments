import { IconX, IconPlus } from "@tabler/icons-react";
import { useState, useRef } from "react";
import folder from "../assets/folder.svg";
import task from "../assets/task.svg";
import note from "../assets/note.svg";
import goal from "../assets/goal.svg";
import bolt from "../assets/bolt.svg";
import calender from "../assets/calender.svg";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { flushSync } from "react-dom";
gsap.registerPlugin(Flip);

const PopupCardGsap = () => {
  const [open, setOpen] = useState(false);
  const headRef = useRef(null);
  const iconRef = useRef(null);

  const cardRef = useRef(null);

  const toggle = () => {
    const state = Flip.getState(cardRef.current);

    flushSync(() => {
      setOpen((prev) => !prev);
    });

    Flip.from(state, {
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <div>
        <h1 className="text-neutral-600 text-lg font-medium text-center my-2">
          With GSAP
        </h1>
        <div
          ref={cardRef}
          className={`
          transition-all 
          ${
            open
              ? "w-88 h-74 rounded-3xl"
              : "py-2 px-6 rounded-full"
          }
        `}
        >
        {open ? (
          <div className="w-88 h-74 border border-[#bbbbbb] rounded-3xl flex flex-col shadow-[0_0.2px_4px_rgb(0,0,0,0.2)]">
            <div className="py-3 px-6 flex justify-between items-center rounded-t-3xl">
              <h1 className="text-neutral-600 text-lg font-medium">
                Create New
              </h1>
              <div
                className="flex justify-center items-center h-7 w-7 rounded-full bg-neutral-400"
                onClick={toggle}
              >
                <IconX className="text-white h-5 w-5" />
              </div>
            </div>
            <div className="flex-1 flex justify-center rounded-2xl bg-white border border-[#bcbcbc] py-10 px-6">
              <div className="grid grid-cols-3 gap-14">
                <div className="h-14 w-14 flex flex-col justify-center items-center">
                  <img src={folder} alt="" className="w-18 h-8" />
                  <span className="text-neutral-600 text-md font-medium">
                    Project
                  </span>
                </div>
                <div className="h-14 w-14 flex flex-col justify-center items-center">
                  <img src={task} alt="" className="w-18 h-8" />
                  <span className="text-neutral-600 text-md font-medium">
                    Task
                  </span>
                </div>
                <div className="h-14 w-14 flex flex-col justify-center items-center">
                  <img src={note} alt="" className="w-18 h-8" />
                  <span className="text-neutral-600 text-md font-medium">
                    Note
                  </span>
                </div>
                <div className="h-14 w-14 flex flex-col justify-center items-center">
                  <img src={goal} alt="" className="w-18 h-8" />
                  <span className="text-neutral-600 text-md font-medium">
                    Goal
                  </span>
                </div>
                <div className="h-14 w-14 flex flex-col justify-center items-center">
                  <img src={bolt} alt="" className="w-18 h-8" />
                  <span className="text-neutral-600 text-md font-medium">
                    Milestone
                  </span>
                </div>
                <div className="h-14 w-14 flex flex-col justify-center items-center">
                  <img src={calender} alt="" className="w-18 h-8" />
                  <span className="text-neutral-600 text-md font-medium">
                    Reminder
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={toggle}
            className="flex items-center gap-2 py-2 px-6 text-lg bg-neutral-100 text-neutral-600 font-medium  border-neutral-300 rounded-full shadow-[0.3px_0.5px_2px_0px_rgb(0,0,0,0.2)] cursor-pointer"
          >
            <span>Create New</span>
            <div>
              <IconPlus className="text-neutral-600" />
            </div>
          </button>
        )}
        </div>
      </div>
    </>
  );
};

export default PopupCardGsap;
