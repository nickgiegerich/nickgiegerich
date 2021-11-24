import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const svgVariants = {
  initial: {},
  animate: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const Logo = ({ draw }) => {
  return (
    <AnimateSharedLayout>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="50"
          viewBox="0 0 384.879 221.589"
          variants={svgVariants}
          initial={draw ? "initial" : false}
          animate="animate"
          layoutId="header"
        >
          <g
            id="Component_4_1"
            data-name="Component 4 – 1"
            transform="translate(2.791 2)"
          >
            <motion.path
              id="Path_4"
              data-name="Path 4"
              d="M4283.846,213.594H4141.934l-48.314,48.1V391.705l48.314,39.477h141.912V314.132h-102.54V361.2h46.857v17.662h-46.857L4161.438,361.2V288.921l10.523-13.282h111.885Z"
              transform="translate(-3903.757 -213.594)"
              fill="none"
              stroke="#c64e6c"
              strokeWidth="6"
              variants={pathVariants}
            />
            <motion.path
              id="Path_5"
              data-name="Path 5"
              d="M3661.44,514.188c-.471,133.413,0,201.063,0,201.063h65.624V626.414l8.683,12.14,54.86,76.7h60.486V514.188h-60.486V626.414l-63.543-112.227Z"
              transform="translate(-3661.231 -508.573)"
              fill="none"
              stroke="#191a24"
              strokeWidth="6"
              variants={pathVariants}
            />
          </g>
        </motion.svg>

    </AnimateSharedLayout>
  );
};
