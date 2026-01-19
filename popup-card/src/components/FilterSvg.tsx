import React from "react";
import { motion, AnimatePresence, cubicBezier } from "motion/react";
import { ChevronDown } from "lucide-react";

const FilterSvg = ({
  open,
  handleToggle,
}: {
  open: boolean;
  handleToggle: () => void;
}) => {
  const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);
  const easedProgress = easing(0.5);
  return (
    <>
      <div
        onClick={handleToggle}
        className="flex gap-2 items-center cursor-pointer"
      >
        <div className="relative w-6 h-6">
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="chart"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-neutral-600"
                >
                  <motion.line
                    layoutId="line-4"
                    x1="20"
                    y1="15"
                    x2="20"
                    y2="20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{
                      opacity: 0,
                      filter: "blur(10px)",
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      filter: "blur(0px)",
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.05,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                  />
                  <motion.line
                    layoutId="line-2"
                    x1="10"
                    y1="10"
                    x2="10"
                    y2="20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{
                      opacity: 0,
                      filter: "blur(10px)",
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      filter: "blur(0px)",
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 0.32,
                      delay: 0.12,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                  />
                  <motion.line
                    layoutId="line-3"
                    x1="15"
                    y1="6"
                    x2="15"
                    y2="20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{
                      opacity: 0,
                      filter: "blur(10px)",
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      filter: "blur(0px)",
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 0.33,
                      delay: 0.14,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                  />
                  <motion.line
                    layoutId="line-1"
                    x1="5"
                    y1="4"
                    x2="5"
                    y2="20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{
                      opacity: 0,
                      filter: "blur(10px)",
                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,
                      filter: "blur(0px)",
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.22,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                  />
                </motion.svg>
              </motion.div>
            ) : (
              <motion.div
                key="text"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <motion.svg
                  layoutId="filter-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-neutral-600"
                >
                  <motion.line
                    layoutId="line-4"
                    x1="4"
                    y1="23"
                    x2="14"
                    y2="23"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.05,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                  />
                  <motion.line
                    layoutId="line-3"
                    x1="4"
                    y1="18"
                    x2="23"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.08,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                  />
                  <motion.line
                    layoutId="line-2"
                    x1="4"
                    y1="13"
                    x2="18"
                    y2="13"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{
                      duration: 0.2,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                  />
                  <motion.line
                    layoutId="line-1"
                    x1="4"
                    y1="8"
                    x2="22"
                    y2="8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.12,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                  />
                </motion.svg>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: open ? 360 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <ChevronDown className="text-neutral-600 h-6 w-6" />
        </motion.div>
      </div>
    </>
  );
};

export default FilterSvg;
