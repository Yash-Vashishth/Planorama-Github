import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

const Featured = () => {

  const cards =[useAnimation() , useAnimation()]

  const handelHovering = (index) =>{
    cards[index].start({y:"0"})
  } 

  const handelHoverEnd = (index) =>{
    cards[index].start({y:"100%"})
  }


  return (
    <div className="relative z-10 bg-zinc-900 w-full py-20">
      <div className="w-full px-[3.922vw] pb-10 border-b border-zinc-600">
        <h1 className="text-[4vw] ">Featured projects</h1>
      </div>

      <div className="w-full px-[3.922vw] py-[2.922vw]">
        <div className="w-full relative flex flex-wrap -mx-2">
        

            {/* ****************************** */}
          <motion.div onHoverStart={()=>{handelHovering(0)}} onHoverEnd={()=>{handelHoverEnd(0)}} className="cardcontainer group/card1 relative w-1/2 p-2 mb-10  h-[50vh] md:h-[75vh]">

            <div className="card relative z-0  w-full h-full rounded-lg hover:scale-95 transition-all duration-300 overflow-hidden">
            {/* <div className=" absolute w-full h-full bg-yellow-400/40 z-50"></div> */}
              <img
                className="object-cover object-center w-full h-full hover:scale-110 delay-100 transition-all duration-700"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />

            </div>
            <h1 className="text-[#cdea68] flex overflow-hidden text-[8vw] absolute z-[9] top-1/2 left-full -translate-x-1/2 -translate-y-1/2 font-['FoundersGrotesk']">
              {"FYDE".split("").map((letter, index) => (
                <motion.span 
                initial={{y:"100%"}} 
                animate={cards[0]} 
                transition={{delay:index*0.06 , ease: [0.76, 0, 0.24, 1]}}
                className="inline-block" key={index}>{letter}</motion.span>
              ))}
            </h1>
          </motion.div>

          {/* ****************************************************** */}
          <motion.div onHoverStart={()=>{handelHovering(1)}} onHoverEnd={()=>{handelHoverEnd(1)}} className="cardcontainer group relative w-1/2 p-2 mb-10 h-[50vh] md:h-[75vh]">
            <div className="card  w-full h-full mix-blend-screen rounded-lg hover:scale-95 transition-all duration-300 overflow-hidden">
              <img
                className="object-cover object-center w-full h-full hover:scale-110 delay-100 transition-all duration-700"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <h1 className="text-[#cdea68] flex overflow-hidden text-[8vw] absolute z-[9] top-1/2 right-full translate-x-1/2 -translate-y-1/2 font-['FoundersGrotesk']">
              {"VISE".split("").map((letter, index) => (
                <motion.span 
                initial={{y:"100%"}} 
                animate={cards[1]} 
                transition={{delay:index*0.06 , ease: [0.76, 0, 0.24, 1]}}
                className="inline-block" key={index}>{letter}</motion.span>
              ))}
            </h1>
          </motion.div>

          {/* ****************************************************** */}

          <div className="cardcontainer group relative w-1/2 p-2 h-[50vh] md:h-[75vh]">
            <div className="card w-full h-full rounded-lg hover:scale-95 transition-all duration-300 overflow-hidden">
              <img
                className="object-cover object-center w-full h-full hover:scale-110 delay-100 transition-all duration-700"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
            <h1 className="text-[#cdea68] w-full text-center group-hover:block hidden text-[8vw] absolute z-[9] top-1/2 left-full -translate-x-1/2 -translate-y-1/2 font-['FoundersGrotesk']">
              {"PREMIUM BLEND".split("").map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
            </h1>
          </div>

          {/* ****************************************************** */}
          <div className="cardcontainer group relative w-1/2 p-2 h-[50vh] md:h-[75vh]">
            <div className="card w-full h-full mix-blend-screen rounded-lg hover:scale-95 transition-all duration-300 overflow-hidden">
              <img
                className="object-cover object-center w-full h-full hover:scale-110 delay-100 transition-all duration-700"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
            <h1 className="text-[#cdea68] group-hover:block hidden text-[8vw] absolute z-[9] top-1/2 right-full translate-x-1/2 -translate-y-1/2 font-['FoundersGrotesk']">
              {"TRAWA".split("").map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
            </h1>
          </div>

          {/* ****************************************************** */}
          
        </div>
      </div>
    </div>
  );
};

export default Featured;
