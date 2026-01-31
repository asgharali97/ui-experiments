import React, { useState } from "react";
import { IconChevronRight, IconX } from "@tabler/icons-react";
import { motion, stagger } from "motion/react";

interface cardType {
  id: number;
  img: string;
  name: string;
  mic?: boolean;
}

const Card = () => {
  const [open, setOpen] = useState(false);
  const cards: cardType[] = [
    {
      id: 1,
      img: "https://i.pinimg.com/1200x/10/45/40/10454016c7fded770bb05bd5fce7c36d.jpg",
      name: "Jhon",
      mic: true,
    },
    {
      id: 2,
      img: "https://i.pinimg.com/1200x/37/70/40/377040e77df0d038134e99ae9d75c4e1.jpg",
      name: "Izuku",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/736x/d0/79/13/d0791356edc16f8d09e5574a7892eaef.jpg",
      name: "Killua",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/736x/9c/f0/78/9cf0780d14223edad65576b52ef827de.jpg",
      name: "anonyms",
    },
    {
      id: 5,
      img: "https://i.pinimg.com/1200x/09/cf/99/09cf995286449f4732f0b3c07dfdd6a3.jpg",
      name: "Yuta",
    },
    {
      id: 6,
      img: "https://i.pinimg.com/1200x/8e/a7/75/8ea775b63037c5307ccc9fe5d158c4e6.jpg",
      name: "Sabito",
      mic: true,
    },
  ];
  const barVariants = {
    animate: (custom) => ({
      scaleY: [1, 0.5, 1.2, 0.7, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: custom * 0.1,
      },
    }),
  };

  return (
    <>
      <div className="min-h-screen h-screen w-full flex justify-center items-center bg-[#d2d4d6b7]">
        {open ? (
          <motion.div
            layoutId="container"
            layout
            transition={{
              layout:{duration: 0.4},
              ease: "easeInOut",
            }}
            className="w-sm h-100 rounded-2xl bg-gray-100 border border-[#bcbfc6] relative shadow-[0px_1px_#ffffff12_inset,0px_1px_4px_#bab7b7ef]"
          >
            <div className="bg-gray-200 w-full border-b border-neutral-300 py-2 flex justify-center items-center rounded-t-2xl relative">
              <h4 className="text-lg text-neutral-600 font-medium">
                Vioce Chat
              </h4>
              <div
                className="absolute right-2 h-8 w-8 bg-[#e1e1e2f7] rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <IconX className="h-5 w-5 text-neutral-600" />
              </div>
            </div>
            <div className="grid grid-cols-4 p-5 gap-1">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="my-2 flex flex-col justify-center items-center relative"
                >
                  {card.mic && (
                    <div className="absolute flex justify-center items-center rounded-full h-6 w-6 top-1 right-0 z-50 bg-neutral-800">
                      <svg className="h-4 w-4" fill="#fff" viewBox="0 0 24 24">
                        <motion.path
                          d="M1 10v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-2 0z"
                          variants={barVariants}
                          animate="animate"
                          custom={0}
                          style={{ originY: 0.5 }}
                        />
                        <motion.path
                          d="M6 6v12a1 1 0 0 0 2 0V6a1 1 0 0 0-2 0z"
                          variants={barVariants}
                          animate="animate"
                          custom={1}
                          style={{ originY: 0.5 }}
                        />
                        <motion.path
                          d="M11 2v20a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0z"
                          variants={barVariants}
                          animate="animate"
                          custom={2}
                          style={{ originY: 0.5 }}
                        />
                        <motion.path
                          d="M16 6v12a1 1 0 0 0 2 0V6a1 1 0 0 0-2 0z"
                          variants={barVariants}
                          animate="animate"
                          custom={3}
                          style={{ originY: 0.5 }}
                        />
                        <motion.path
                          d="M21 10v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-2 0z"
                          variants={barVariants}
                          animate="animate"
                          custom={4}
                          style={{ originY: 0.5 }}
                        />
                      </svg>
                    </div>
                  )}
                  <motion.img
                    layoutId={`img-${card.id}`}
                    layout
                    src={card.img}
                    className="h-18 w-18 rounded-full border-3 border-white"
                    alt={card.name}
                  />
                  <h4 className="text-md text-neutral-500 font-medium">
                    {card.name}
                  </h4>
                </div>
              ))}
            </div>
            <div className="px-5 flex flex-col justify-center items-center">
              <button className="w-full group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transition-opacity rounded-md shadow-[0_1px_#ffffff12_inset,0_1px_3px_#101828] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-nd h-10 px-4 ring-1 bg-neutral-900 text-white ring-neutral-900 cursor-pointer">
                Join Now
              </button>
              <span className="text-sm text-neutral-500 font-medium text-center mt-3">
                Mic will be muted initially
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            layoutId="container"
            onClick={() => setOpen(true)}
            className="p-1 rounded-full bg-gray-100 border border-[#bcbfc6] shadow-sm flex items-center cursor-pointer"
          >
            {cards.slice(0, 4).map((card) => (
              <div key={card.id} className="relative">
                {card.mic && (
                  <div className="absolute flex justify-center items-center rounded-full h-6 w-6 top-2  left-0 z-50 bg-neutral-800">
                    <svg className="h-4 w-4" fill="#fff" viewBox="0 0 24 24">
                      <motion.path
                        d="M1 10v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-2 0z"
                        variants={barVariants}
                        animate="animate"
                        custom={0}
                        style={{ originY: 0.5 }}
                      />
                      <motion.path
                        d="M6 6v12a1 1 0 0 0 2 0V6a1 1 0 0 0-2 0z"
                        variants={barVariants}
                        animate="animate"
                        custom={1}
                        style={{ originY: 0.5 }}
                      />
                      <motion.path
                        d="M11 2v20a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0z"
                        variants={barVariants}
                        animate="animate"
                        custom={2}
                        style={{ originY: 0.5 }}
                      />
                      <motion.path
                        d="M16 6v12a1 1 0 0 0 2 0V6a1 1 0 0 0-2 0z"
                        variants={barVariants}
                        animate="animate"
                        custom={3}
                        style={{ originY: 0.5 }}
                      />
                      <motion.path
                        d="M21 10v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-2 0z"
                        variants={barVariants}
                        animate="animate"
                        custom={4}
                        style={{ originY: 0.5 }}
                      />
                    </svg>
                  </div>
                )}
                <div className="group relative -mr-4">
                  <motion.img
                    layoutId={`img-${card.id}`}
                    src={card.img}
                    className="h-18 w-18 rounded-full border-3 border-white"
                    alt={card.name}
                  />
                </div>
              </div>
            ))}
            <div className="ml-3 px-3 flex">
              <span className="text-neutral-600 text-lg">+3</span>
              <IconChevronRight className="rotate-90 mt-1 text-neutral-600" />
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Card;
