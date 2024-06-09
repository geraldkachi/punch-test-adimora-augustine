"use client"
import Navbar from '@/components/Navbar/Navbar'
import ChipTabs from '@/components/Tabs/TabsFramer'
import React from 'react'
import { navVariants } from '../utils/motion'
import { motion } from "framer-motion";

const listCom = [
    {
        title: 'Shopify \n Developer',
        icon: "/shopify.svg"
    },
    {
        title: 'Magento \n Developer',
        icon: "/magneto.svg"
    },
    {
        title: 'Data \n Scientist',
        icon: "/data-sci.svg"
    },
    {
        title: 'Webflow \n  Developer',
        icon: "/web-flow.svg"
    },
    {
        title: 'Dot Net \n  Developer',
        icon: "/not-net.svg"
    },
    {
        title: '',
        icon: "/icon-list.svg"
    },
    {
        title: 'UX \n Designer',
        icon: "/figma.svg"
    },
    {
        title: 'Graphics \n Designer',
        icon: "/ps.svg"
    },
    {
        title: 'Illustration \n Artist',
        icon: "/ai.svg"
    },
    {
        title: 'Unreal \n Engine',
        icon: "/unreal.svg"
    },
    {
        title: 'Cinema \n 4D',
        icon: "/cinema.svg"
    },
]

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



            <div className="-skew-y-2 bg-[#EDEFFF] py-4 h-full w-full">
                {/* <div className='' /> */}
                <div className={`skew-y-2 max-w-7xl mx-3 sm:mx-auto flex flex-col items-center justify-center gap-5`}>
                    <div className="flex flex-col my-7 md:my-14">
                        <p className={`inline text-center mt-2 text-[#202229] font-bold text-4xl md:text-[54px] leading-[48px] md:leading-[64px]`}>
                            Your one-stop marketplace for finding <br className='hidden sm:block' /> the talent your business needs.
                        </p>
                    </div>
                </div>

                <div className={`skew-y-2 max-w-7xl mx-3 sm:mx-auto`}>

                    {/* ?section 1 */}
                    <div className="grid md:grid-cols-5 gap-5 my-10">
                        <div className="md:col-span-2">
                            <motion.div variants={navVariants} className="text-2xl font-medium leading-[34px] text-[#202229] whitespace-normal">Find Dev and IT professionals to <br className='hidden sm:block' />  scale your business.</motion.div>

                            <div className="flex items-center gap-20 mt-4">
                                <div className="flex items-center gap-4 text-base font-normal leading-[32px] text-[#202229]">
                                    <span className='flex items-center gap-4'><img src="skill.svg" alt="" /><span>989 Skills</span></span>
                                </div>
                                <div className="flex items-center gap-4 text-base font-normal leading-[32px] text-[#202229]">
                                    <span className='flex items-center gap-4'><img src="box.svg" alt="" /><span>45 Sub-Categories</span></span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-base font-normal leading-[32px] text-[#202229] mt-4">
                                <span className='flex items-center gap-4'><img src="person.svg" alt="" /><span>1011 Profiles</span></span>
                            </div>
                        </div>
                        <div className="md:col-span-3 bg-white p-10 rounded-[7px] overflow-x-scroll no-scrollbar">
                            <div className="flex flex-col items-start gap-4 rounded-[7px] flex-wrap md:flex-nowrap">
                                <div className="text-base font-medium lea">IT & Development</div>

                                <div className="grid grid-cols-6 w-full">
                                    {listCom.slice(0, 6).map((item, key) => (
                                        <div key={key} className="flex flex-col items-center justify-between gap-4 flex-wrap md:flex-nowrap">
                                            <div className={`flex items-center justify-center bg-[#F6F6F6] rounded-full p-3 md:p-6 w-[60px] md:w-[96px] h-[60px] md:h-[96px] ${key == 5 && 'rounded-[30px]'}`}>
                                                <img src={item.icon} alt="icon" />
                                            </div>
                                            <div className="text-sm font-semibold leading-[18px] self-center text-center text-[#202229]">{item.title && (<>{item.title.split('\n').map((line, index) => (
                                                <React.Fragment key={index}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}</>)}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ?section 1 */}
                    <div className="grid md:grid-cols-5 gap-5 my-10">
                        <div className="md:col-span-2">
                            <motion.div variants={navVariants} className="text-2xl font-medium leading-[34px] text-[#202229]">Explore Creative individuals with a <br className='hidden sm:block' /> keen eye for detail.  </motion.div>

                            <div className="flex items-center gap-20 mt-4">
                                <div className="flex items-center gap-4 text-base font-normal leading-[32px] text-[#202229]">
                                    <span className='flex items-center gap-4'><img src="skill.svg" alt="" /><span>989 Skills</span></span>
                                </div>
                                <div className="flex items-center gap-4 text-base font-normal leading-[32px] text-[#202229]">
                                    <span className='flex items-center gap-4'><img src="box.svg" alt="" /><span>45 Sub-Categories</span></span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-base font-normal leading-[32px] text-[#202229] mt-4">
                                <span className='flex items-center gap-4'><img src="person.svg" alt="" /><span>1011 Profiles</span></span>
                            </div>
                        </div>
                        <div className="md:col-span-3 bg-white p-10 rounded-[7px] overflow-x-scroll no-scrollbar">
                            <div className="flex flex-col items-start gap-4 rounded-[7px] flex-wrap md:flex-nowrap">
                                <div className="text-base font-medium lea">IT & Development</div>

                                <div className="grid grid-cols-6 w-full">
                                    {listCom.slice(5, 11).map((item, key) => (
                                        <div key={key} className="flex flex-col items-center justify-between gap-4 flex-wrap md:flex-nowrap">
                                            <div className={`flex items-center justify-center bg-[#F6F6F6] rounded-full p-3 md:p-6 w-[60px] md:w-[96px] h-[60px] md:h-[96px] ${key == 0 && 'rounded-[30px]'}`}>
                                                <img src={item.icon} alt="icon" />
                                            </div>
                                            <div className="text-sm font-semibold leading-[18px] text-center self-center w-full text-[#202229]">{item.title && (<>{item.title.split('\n').map((line, index) => (
                                                <React.Fragment key={index}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}</>)}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home