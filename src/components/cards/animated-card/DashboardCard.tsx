import { IconFilter2 } from "@tabler/icons-react";
import { ChevronDown } from "lucide-react";
import dirbble from "../../../assets/dribble.svg";
import motion1 from "../../../assets/motion.svg";
import youtube from "../../../assets/youtube.svg";
import google from "../../../assets/google.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import FilterSvg from "../../FilterSvg";
import { cn } from "../../../utils/cn";


interface state {
  icon: string | React.ReactElement<React.SVGProps<SVGSVGElement>>;
  name: string;
  revune: string;
  growth: number;
}

const data: state[] = [
  { icon: dirbble, name: "Dribbble", revune: "$1,0000", growth: 74 },
  { icon: motion1, name: "Motion", revune: "$6,0000", growth: 98 },
  { icon: youtube, name: "Youtube", revune: "$4,0000", growth: 70 },
  { icon: google, name: "Google", revune: "$10,0000", growth: 50 },
];



const DashboardCard = () => {
  const [open, setOpen] = useState(false);

  const displayData = open
    ? [...data].sort(
        (a, b) =>
          parseInt(b.revune.replace(/\D/g, "")) -
          parseInt(a.revune.replace(/\D/g, ""))
      )
    : data;
  const card = open ? data : displayData;

  const handleToggle = () => {
    setOpen(!open);
  };

  

  return (
    <>
      <div className="w-94 h-92 bg-[#f4f4f4] border border-neutral-200 rounded-4xl p-6">
        <div className="flex justify-between items-center">
          <FilterSvg handleToggle={handleToggle} open={open} />
          <div className="flex items-center gap-2 px-4 py-2 border-neutral-300 border rounded-xl">
            <span className="text-md text-neutral-800 font-medium">
              Filters
            </span>
            <IconFilter2 className="text-neutral-700 h-6 w-6" />
          </div>
        </div>
        <div className="relative h-full w-full">
          <AnimatePresence mode="wait">
            <div className="my-4 w-full h-[calc(100%-110px)]">
              <div className={`${open ? "flex gap-2 h-full" : ""} `}>
                {card.map((item, index) => {
                  const maxHeight = 100;
                  const barHeight = `${(item.growth / 100) * maxHeight}%`;
                  return (
                    <motion.div
                      key={index}
                      className={cn(
                        `flex-1 flex items-center gap-2`,
                        `${open ? "justify-end" : ""}`,
                        `${open ? "flex-col" : "flex-row"}`,
                        `${open && "h-full"}`
                      )}
                    >
                      <div
                        className={cn(
                          "w-full bg-white flex items-start",
                          `${
                            open
                              ? "rounded-2xl justify-center p-1"
                              : "rounded-xl mt-2 py-4 px-4 justify-between"
                          }`
                        )}
                        style={{ height: `${open ? barHeight : ""}` }}
                      >
                        <div
                          className={cn(
                            "w-full flex items-center gap-2",
                            `${open ? "h-full" : ""}`
                          )}
                        >
                          <div
                            className={`${
                              open
                                ? "relative flex justify-center py-4 h-full w-full rounded-2xl border-neutral-300 bg-[repeating-linear-gradient(315deg,#e1e1e1_0,#e1e1e1_1px,transparent_0,transparent_50%)] bg-[size:9px_9px] bg-fixed"
                                : ""
                            }`}
                          >
                            <img
                              src={item.icon}
                              alt=""
                              className="h-7 w-7 z-50"
                            />
                          </div>
                          {!open && (
                            <span className="text-md text-neutral-600 font-medium">
                              {item.name}
                            </span>
                          )}
                        </div>
                        {!open && (
                          <div className="flex items-center gap-4">
                            <span className="text-md text-neutral-900 font-bold">
                              {item.revune}
                            </span>
                            <span className="bg-neutral-200 px-2 text-md text-neutral-800 font-normal rounded-xl">
                              {item.growth}%
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              {open && (
                <div className="my-2">
                  <h4 className="text-lg font-medium text-neutral-600">
                    Deals amount
                  </h4>
                  <div className="flex gap-2 items-center">
                    <h4 className="text-lg font-bold text-neutral-900">
                      by reffer category
                    </h4>
                    <ChevronDown className="h-6 w-6 text-neutral-900" />
                  </div>
                </div>
              )}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
export default DashboardCard;
