import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-speed='-.2' className="w-full py-20 bg-[#cdea68] rounded-t-3xl text-zinc-900">
      <div className="px-[5.922vw]">
        <p className="text-[3.65vw] leading-none w-[90%]">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </p>
      </div>
      {/* ******************************************************************************************* */}
      <div className="w-full border-y border-zinc-500/60 mt-12 px-[5.922vw]">
        <div className="flex flex-col md:flex-row gap-10 pt-4 pb-28">
          <div className="md:basis-[25vw] lg:basis-[50vw]">
            What you can expect:
          </div>
          <div className="flex flex-col basis-[25vw] w-[50vw] gap-7">
            <span>
              We have created an interactive chatbot that has the sole purpose of decentralizing important tasks
              It has tailored events for you to attend based on your availability, type of event , location
              and customer satisfaction.
            </span>

            <span>
              We believe the mix of strategy, design and chatting (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </span>
          </div>
          <div className="flex flex-col basis-[25vw]  justify-end md:pl-24">
            <span className="mb-3">S:</span>
            <span>Instagram</span>
            <span>Behance</span>
            <span>Facebook</span>
            <span>Linkedin</span>
          </div>
        </div>
      </div>
      {/* ******************************************************************************************* */}
      
    </div>
  );
};

export default About;
