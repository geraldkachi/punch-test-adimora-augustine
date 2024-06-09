import React from 'react'
import { navVariants } from '../utils/motion'
import { motion } from "framer-motion";
const HowItWorked = () => {
    return (
        <div className='bg-[#202229] -skew-y-2  py-4 h-full w-full mix-blend-overlay flex items-center justify-center md:py-20'>
            <img src="quote.svg" className='skew-y-2 absolute top-0 right-5' alt="" />
            <div className={`skew-y-2 max-w-7xl mx-3 xl:mx-auto sm:flex flex-row items-center justify-center gap-5 py-20`}>
                <div className="flex flex-col flex-1">
                    <div className="flex flex-col mt-7 md:mt-14">
                        <p className={`inline text-start mt-2 text-[#FFFFFF] font-bold text-4xl md:text-[54px] leading-[48px] md:leading-[64px]`}>
                            How it worked <br className='hidden sm:block' /> for Jason <span><img className='inline' src="groove-face.svg" alt="" /></span> at <br className='hidden sm:block' /> <span><img className='inline' src="groove.svg" alt="" /></span></p>
                    </div>

                    <motion.p variants={navVariants} className={`my-10 text-start text-[#FFFFFF] font-normal text-[22px] leading-[32px]`}>
                        Zwilt enabled us to deliver on time and they&apos;ve <br className='hidden sm:block' />  been heavy hitters in our corner since.
                    </motion.p>

                    <div className="flex items-center gap-4">
                        <img src="back-w.svg" alt="back-f" />
                        <img src="back-w.svg" className='-rotate-180' alt="back-f" />
                    </div>
                </div>


                <div className='flex flex-1 flex-col py-10'>
                    <div className='flex items-center gap-4'>
                        <img src="sect-groove.svg" className='bg-[' alt="" />
                        <div className='flex flex-col items-start'>
                            <div className="text-xl md:text-[34px] leading-[44px] font-semibold text-white">Jason Makki</div>
                            <div className='space-y-1'>
                                <div className="text-sm md:text-base leading-[18px] font-medium text-[#C6C4C4]">Engineer at GROOVE</div>
                                <div className="text-sm md:text-base leading-[18px] font-medium text-[#C6C4C4]">San Francisco</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex text-base md:text-[22px] leading-[32px] mt-10 font-normal text-white'>
                        Zwilt enabled us to deliver on time and they&apos;ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they&apos;ve been heavy hitters in our corner since.Zwilt enabled us to deliver on time and they’ve been heavy hitters.
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HowItWorked