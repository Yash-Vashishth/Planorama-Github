import React, { useEffect, useState } from 'react'

const StartProject = () => {
    const [rotate, setRotate] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    })
    return (
        <div className='eyes w-full overflow-hidden bg-[#CDEA68]'>
            <div className='relative w-full h-full bg-cover bg-center'>
                <div className='w-full h-full flex justify-center items-center'>
                    <h1 className="text-[15vw] font-['Founders_Grotesk_X'] font-bold leading-none text-center mt-[10vw]">READY<br />TO START<br />THE PROJECT?</h1>
                </div>
                <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div data-scroll data-scroll-speed="0.1" className='w-[25vw] h-[25vw] sm:w-[20vw] sm:h-[20vw] lg:w-[15vw] lg:h-[15vw] rounded-full bg-[#F4F4F4] flex items-center justify-center'>
                        <div className='relative w-2/3 h-2/3  rounded-full bg-[#212121]  '>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                <div className='w-[3vw] h-[3vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw] rounded-full bg-[#F4F4F4]'></div>
                            </div>
                        </div>
                    </div>
                    <div data-scroll data-scroll-speed="0.1" className='w-[25vw] h-[25vw] sm:w-[20vw] sm:h-[20vw] lg:w-[15vw] lg:h-[15vw] rounded-full bg-[#F4F4F4] flex items-center justify-center'>
                        <div className='relative w-2/3 h-2/3  rounded-full bg-[#212121] '>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                <div className='w-[3vw] h-[3vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw] rounded-full bg-[#F4F4F4]'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-16 py-10'>
                    <div className="w-full flex mt-2 sm:mt-5 lg:mt-10 items-center justify-center">
                        <button
                            className="flex items-center gap-5 px-8 py-3 mt-10 md:mt-10 bg-zinc-900 rounded-full text-white text-[3.5vw] sm:text-[1.5vw] lg:text-[1vw]"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            GO TO CHATBOT
                            <div className='flex items-center justify-center'>
                                <div className={`bg-zinc-100 rounded-full transition-all ease-in-out ${isHovered ? 'w-7 h-7' : 'w-2 h-2'}`}></div>
                            </div>
                        </button>
                    </div>
                    <h1 className='text-[4vw] sm:text-[2vw] lg:text-[1.1vw] flex items-center justify-center mt-5'>OR</h1>
                    <div className="w-full flex mt-2 sm:mt-5 lg:mt-10 items-center justify-center">
                        <button
                            className="flex items-center gap-5 px-8 py-3 mt-0  bg-zinc-900 rounded-full text-white text-[3.5vw] sm:text-[1.5vw] lg:text-[1vw]"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            hello@panorama.design
                            <div className='flex items-center justify-center'>
                                <div className={`bg-zinc-100 rounded-full transition-all ease-in-out ${isHovered ? 'w-7 h-7' : 'w-2 h-2'}`}></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StartProject