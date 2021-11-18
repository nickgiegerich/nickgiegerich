import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: -200 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Wrapper = ({ children }) => {
  return (
    <div>
      <motion.main
        key="wrapper"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
        className="flex flex-col items-start w-full h-full pt-96 px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Wrapper;
