"use client"
import Navbar from '@/components/Navbar/Navbar'
import ChipTabs from '@/components/Tabs/TabsFramer'
import React from 'react'
import { navVariants } from '../utils/motion'
import { motion } from "framer-motion";
import MarketPlace from './MarketPlace'
import HowItWorked from './HowItWorked'
import HowToEnsure from './HowToEnsure'
import Startjourney from './Startjourney'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className={`max-w-7xl mx-3 sm:mx-auto flex flex-row items-center justify-center gap-5`}>
                <motion.div variants={navVariants} className="flex flex-col my-7 md:my-14">
                    <p className={`inline text-center mt-2 text-[#202229] font-bold text-[54px] leading-[64px]`}>
                        Finding the right fit <span><img className='inline' src="hero-face.svg" alt="hero-face" /></span> has<br className='hidden sm:block' /> never been easier.
                    </p>
                    <motion.p variants={navVariants} className={`text-center mt-4 text-[#202229] font-normal text-[22px] leading-[32px]`}>With our rigorous pre-vetting process, you&apos;ll never have to <br className='hidden sm:block' /> worry about finding the ideal candidate ever again.</motion.p>
                </motion.div>
            </div>

            <div className="flex item-center justify-center mx-3 max-w-7xl sm:mx-auto">
                <form className="relative flex w-full max-w-md items-center gap-2 rounded-[15px] border-[1.5px] border-[#F0F0F0] my-1.5 pl-6">
                    <input type="email" placeholder="Looking for design |" className="w-full h-full bg-transparent text-sm text-[#202229] placeholder- focus:outline-0" />
                    <button type="submit" className="flex shrink-0 items-center rounded-[15px] bg-[#FFBE2E] px-4 py-6 h-max transition-transform active:scale-[0.985]">
                        <img src="searchicon.svg" alt="" />
                    </button>

                    <div className="pointer-events-none absolute inset-0 z-10 rounded-[15px]"><div className="mask-with-browser-support absolute -inset-[1px] rounded-[15px] border border-transparent bg-origin-border"
                    ></div>
                    </div>
                </form>
            </div>


            <div className="lex flex-col items-center justify-center mx-3 overflow-x- max-w-[920px] pb-5 sm:mx-auto bg-[#F8F8F8] rounded-[15px] mt-4">
                <ChipTabs
                    tabs={[
                        {
                            title: 'IT & Development', content: <>
                                <div className="max-w-5xl mx-auto">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-36 items-center justify-center text-[#959595]">
                                        <div className="items-start justify-center flex flex-col space-y-4">
                                            <span className="text-base leading-[16px] font-normal">Python Developer</span>
                                            <span className="text-base leading-[16px] font-normal">Shopify Developer</span>
                                            <span className="text-base leading-[16px] font-medium text-[#202229]">MERN Stack Developer</span>
                                            <span className="text-base leading-[16px] font-normal">Full Stack Developer</span>
                                        </div>
                                        <div className="items-start justify-center flex flex-col space-y-4">
                                            <span className="text-base leading-[16px] font-normal">Data Scientist</span>
                                            <span className="text-base leading-[16px] font-normal">Front End Developer</span>
                                            <span className="text-base leading-[16px] font-normal">Shopify Developer</span>
                                            <span className="text-base leading-[16px] font-normal">Python Developer</span>
                                        </div>
                                        <div className="items-start justify-center flex flex-col space-y-4">
                                            <span className="text-base leading-[16px] font-normal">Shopify Developer</span>
                                            <span className="text-base leading-[16px] font-normal">Python Developer</span>
                                            <span className="text-base leading-[16px] font-normal">Full Stack Developer</span>
                                            <span className="text-base leading-[16px] font-medium text-[#202229]">Shopify Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        },
                        {
                            title: 'Design and Creative', content: <>

                                <div className="max-w-5xl mx-auto">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-36 items-center justify-center text-[#959595]">
                                        <div className="items-start justify-center flex flex-col space-y-4">
                                            <span className="text-base leading-[16px] font-medium text-[#202229]">Python Developer</span>
                                            <span className="text-base leading-[16px] font-medium">Shopify Developer</span>
                                            <span className="text-base leading-[16px] font-medium text-[#202229]">MERN Stack Developer</span>
                                            <span className="text-base leading-[16px] font-medium text-[#202229]">Full Stack Developer</span>
                                        </div>
                                        <div className="items-start justify-center flex flex-col space-y-4">
                                            <span className="text-base leading-[16px] font-normal">Data Scientist</span>
                                            <span className="text-base leading-[16px] font-medium text-[#202229]">Front End Developer</span>
                                            <span className="text-base leading-[16px] font-normal">Shopify Developer</span>
                                            <span className="text-base leading-[16px] font-normal">Python Developer</span>
                                        </div>
                                        <div className="items-start justify-center flex flex-col space-y-4">
                                            <span className="text-base leading-[16px] font-medium text-[#202229]">Shopify Developer</span>
                                            <span className="text-base leading-[16px] font-normal">Python Developer</span>
                                            <span className="text-base leading-[16px] font-medium text-[#202229]">Full Stack Developer</span>
                                            <span className="text-base leading-[16px] font-medium text-[#202229]">Shopify Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        },
                    ]}
                />
            </div>
            <img src="lining.svg" className='w-full mt-20' alt="" />
            <MarketPlace /> 
            <HowItWorked />
            <HowToEnsure />
            <Startjourney />
        </div>
    )
}

export default Home