"use client";

import { motion } from "framer-motion";
import cn from "../../../lib/utils/classname";

interface ButtonProps {
  text?: string;
  children: React.ReactNode;
  className?: string;
}

const firstTextVariant = {
  initial: {
    y: 0,
  },
  hover: {
    y: -40,
    transition: {
      duration: 0.825,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.825,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const secondTextVariant = {
  initial: {
    y: 40,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.825,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: 40,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

export const FramerButton = ({ children, className, text }: ButtonProps) => {
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      animate="animate"
      className={cn("", className)}
    >
      {text}
      <div className="overflow-hidden relative flex justify-center items-center">
        <motion.p variants={firstTextVariant} className="">
          {children}
        </motion.p>
        <motion.p variants={secondTextVariant} aria-hidden className="absolute">
          {children}
        </motion.p>
      </div>
    </motion.button>
  );
};
