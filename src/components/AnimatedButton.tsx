import { IconArrowRight, IconChevronRight } from "@tabler/icons-react";
import { animate } from "motion";
import { motion } from "motion/react";
import { useState } from "react";

const Button = () => {
  const buttonVaritent = {
    initial: {
      opacity: 0,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
    },
    transition: {
      delay: 0.3,
      ease: "easeInOut",
    },
    hover: {},
  };

  const childVaritent = {
    initial: { width: "3rem" },
    hover: {
      width: "100%",
      transition: {
        delay: 0.3,
        ease: "easeInOut",
      },
    },
  };
  const chevronVariants = {
    initial: { opacity: 1, filter: "blur(5px)" },
    animate: {
      filter: "blur(0px)",
    },
    hover: {
      opacity: 0,
      x: -10,
      transition: { duration: 0.3,delay:0.3, ease: "easeInOut" },
    },
  };
  const arrowVariants = {
    initial: { opacity: 0, filter: "blur(5px)" },
    hover: {
      opacity: 1,
      filter: "blur(0px)",
      x: 10,
      transition: { duration: 0.2, delay:0.3, ease: "easeInOut" },
    },
  };
  const ArrowVariants = motion(IconArrowRight);
  const ChevronVariants = motion(IconChevronRight);

  const textVariant = {
    initial: { color: "#525252" },
    hover: {
      color: "#ffffff",
      transition: {
        duration: 0.2,
        delay: 0.28,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <motion.button
          variants={buttonVaritent}
          initial="initial"
          animate="animate"
          transition="trasition"
          whileHover="hover"
          className="flex gap-2 w-48 rounded-full text-lg font-medium border border-neutral-200 text-neutral-600 cursor-pointer relative"
        >
          <motion.span
            variants={childVaritent}
            className="relative w-12 h-12 flex  bg-neutral-900 text-white rounded-full overflow-hidden items-center"
          >
            <div className="absolute left-3 top-3 -translate-y-1/2 pointer-events-none">
              <div className="absolute">
                <ChevronVariants
                  variants={chevronVariants}
                  className="h-6 w-6"
                />
              </div>
            </div>
            <div className="absolute">
              <ArrowVariants variants={arrowVariants} className="h-6 w-6" />
            </div>
          </motion.span>
          <motion.span 
          variants={textVariant}
          className="absolute py-2 top-0 left-8 bottom-0 right-0 ">
            Learn More
          </motion.span>
        </motion.button>
      </div>
    </>
  );
};

export default Button;
