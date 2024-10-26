import React from "react";

const Cards = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.7" className=" h-screen w-full flex flex-col md:flex-row gap-5 items-center px-[3.922vw] relative ">
      <div className="cardcontainer w-full md:w-1/2 h-[55vh]">
        <div className="card relative h-full w-full bg-[#004d43] rounded-xl flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
            className="w-36"
          />
          <button className="absolute left-8 bottom-6 border border-[#cdea68] px-2 py-1 rounded-full text-xs text-[#cdea68]">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer w-full md:w-1/2 h-[55vh] flex gap-5 ">
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
            className="w-36"
          />
          <button className="absolute left-8 bottom-6 border  px-2 py-1 rounded-full text-xs ">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
            className="w-36"
          />
          <button className="absolute left-8 bottom-6 border  px-2 py-1 rounded-full text-xs ">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
