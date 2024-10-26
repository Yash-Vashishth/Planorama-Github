import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-speed='.1' className="w-full py-[5.922vw] rounded-t-3xl bg-[#004D43] ">
      <div className="text border-t text-[30vw] border-b border-zinc-300 flex items-center gap-[3vw] whitespace-nowrap font-[FoundersGrotesk] uppercase overflow-hidden">
        <motion.h1
          initial={{ x: '3%' }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className=" leading-none -mt-[5.8vw] -mb-[2.665vw]"
        >
          PLANORAMA:
        </motion.h1>
        <motion.h1
           initial={{ x: '3%' }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className=" leading-none -mt-[5.8vw] -mb-[2.665vw]"
        >
          THE PLANNER
        </motion.h1>
        
      </div>
    </div>
  );
};

export default Marquee;
