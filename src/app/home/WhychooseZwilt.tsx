import React from 'react'
import { navVariants } from '../utils/motion'
import { motion } from "framer-motion";
const WhychooseZwilt = () => {
    return (
        <div>
            <div className="-skew-y-2 bg-[#FDFDFF  py-20 md:py-36 px-3 sm:px-0 md:pl-20 relative z-0  bg-gradient-to-b from-[#FDFDFF] from-10% via-[#F3F4FF] via-70% to-[#F3F4FF] 10% to-90%">
                <div className={`grid sm:grid-cols-6 skew-y-2 max-w-full xl:mx-auto gap-5 py-0`}>
                    <div className="col-span-2 flex flex-col flex-1 w-full">
                        <div className="flex flex-col mt-7 md:mt-14">
                            <p className={`inline text-start mt-2 text-[#202229] font-bold text-4xl md:text-[54px] leading-[48px] md:leading-[64px]`}>
                                Why choose <br className='hidden sm:block' /> Zwilt?
                            </p>
                        </div>

                        <motion.p variants={navVariants} className={`my-10 text-start text-[#1E1515CC] font-normal text-[22px] leading-[32px] break-words`}>
                            We take complex hiring processes - and simplify them. Connecting you to the world&apso;s highly qualified talent pool.
                        </motion.p>
                    </div>
                    <div className="hidden col-span-4 sm:flex items-center justify-between flex-1 py-10 pl-4 md:pl-8 pt-4 md:pt-8 bg-white rounded-[20px]">
                        <div className="flex flex-col">
                            <motion.div variants={navVariants} className="flex items-start gap-2">

                                <div className="flex flex-col">
                                    <p className={`inline text-start text-[#202229] font-bold text-xl md:text-[54px] leading-[38px] md:leading-[64px]`}>
                                        Onboard without <br className='hidden sm:block' />  the risk.
                                    </p>

                                    <div className="my-5">
                                        <motion.p variants={navVariants} className={`flex items-center gap-3 my-1 text-start text-[#202229CC] font-normal text-[22px] leading-[32px]`}>
                                            <span className="h-[7px] w-[18px] !bg-[#50589F] rounded-[21px]"></span>
                                            We pick the best for you to select.</motion.p>
                                        <motion.p variants={navVariants} className={`flex items-center gap-3 my-1 text-start text-[#202229CC] font-normal text-[22px] leading-[32px]`}>
                                            <span className="h-[7px] w-[18px] !bg-[#50589F] rounded-[21px]"></span>
                                            Thousands of vetted candidates in dozens of categories.</motion.p>
                                        <motion.p variants={navVariants} className={`flex items-center gap-3 my-1 text-start text-[#202229CC] font-normal text-[22px] leading-[32px]`}>
                                            <span className="h-[7px] w-[18px] !bg-[#50589F] rounded-[21px]"></span>
                                            Risk-free resource swapping for the best fit.
                                        </motion.p>
                                    </div>


                                    <div className="flex items-center gap-4 leading-[12.11px] text-[14.8px] font-medium text-[#202229]">
                                        <img src="whyzi.svg" alt="back-f" />
                                        <span>Learn More</span>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                        <div>
                            <img src="whychoose1.svg" alt="" />
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhychooseZwilt