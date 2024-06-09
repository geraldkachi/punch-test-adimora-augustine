import React from 'react'
import { navVariants } from '../utils/motion'
import { motion } from "framer-motion";

const Startjourney = () => {
    return (
        <div className=' py-4 h-full w-full md:py-20 space-y-4'>
            <div className="flex flex-col items-center justify-center my-14">
                <p className={`inline text-center text-[#202229] font-bold text-4xl md:text-[54px] leading-[48px] md:leading-[64px]`}>
                    Start your journey today.
                </p>
            </div>
            <div className={`max-w-7xl mx-3 xl:mx-auto sm:flex flex-row items-center justify-center gap-5`}>
                {/* section 1 */}
                <div className="-skew-y-2 sm:flex items-center flex-1 w-full bg-[#EDEFFF] overflow-hidden">
                    <div className="skew-y-2 flex flex-col flex-1 pl-4 md:pl-8 pt-4 md:pt-8">
                        <div className="flex flex-col mt-7 md:mt-14">
                            <motion.div variants={navVariants} className="flex items-start gap-2">
                                <img src="1start.svg" alt="" />

                                <div className="flex flex-col">
                                    <p className={`inline text-start text-[#202229] font-semibold text-xl md:text-[34px] leading-[38px] md:leading-[44px]`}>
                                        Find your next star <br className='hidden sm:block' />  performer.
                                    </p>
                                    <motion.p variants={navVariants} className={`my-10 text-start text-[#202229CC] font-normal text-base leading-[24px]`}>
                                        Explore the vast Zwilt marketplace to find the candidate  <br className='hidden sm:block' /> that meets your needs.
                                    </motion.p>


                                    <div className="flex items-center gap-4 leading-[12.11px] text-[14.8px] font-medium text-[#202229]">
                                        <img src="back-skew.svg" alt="back-f" />
                                        <span>Join Now</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>

                    <div className="skew-y-2 flex flex-col flex-1 mt-10 md:mt-0"> 
                        <img src="1start-sec.svg" className='-mb-10' alt="" />
                    </div>
                </div>

            </div>

            {/* section 2 */}
            <div className={`max-w-7xl mx-3 xl:mx-auto sm:flex flex-row items-center justify-center gap-5`}>
                 {/* section 2 */}
                 <div className="-skew-y-2 sm:flex items-center flex-1 w-full bg-[#FFF7E2] overflow-hidden">
                    <div className="skew-y-2 flex flex-col flex-1 pl-4 md:pl-8 pt-4 md:pt-8">
                        <div className="flex flex-col mt-7 md:mt-14">
                            <motion.div variants={navVariants} className="flex items-start gap-2">
                                <img src="2start.svg" alt="" />

                                <motion.div variants={navVariants} className="flex flex-col">
                                    <p className={`inline text-start text-[#202229] font-semibold text-xl md:text-[34px] leading-[38px] md:leading-[44px]`}>
                                        Find your next star <br className='hidden sm:block' />  performer.
                                    </p>
                                    <motion.p variants={navVariants} className={`my-10 text-start text-[#202229CC] font-normal text-base leading-[24px]`}>
                                        Explore the vast Zwilt marketplace to find the candidate  <br className='hidden sm:block' /> that meets your needs.
                                    </motion.p>


                                    <div className="flex items-center gap-4 leading-[12.11px] text-[14.8px] font-medium text-[#202229]">
                                        <img src="back-skew.svg" alt="back-f" />
                                        <span>Join Now</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>


                    </div>

                    <div className="skew-y-2 flex flex-col flex-1 mt-10 md:mt-0"> 
                        <img src="2start-sec.svg" className='-mb-10' alt="" />
                    </div>
                </div>
            </div>

            {/* section 3 */}
            <div className={`max-w-7xl mx-3 xl:mx-auto sm:flex flex-row items-center justify-center gap-5`}>
                 {/* section 3 */}
                 <div className="-skew-y-2 sm:flex items-center flex-1 w-full bg-[#F3F3F3] overflow-hidden">
                    <div className="skew-y-2 flex flex-col flex-1 pl-4 md:pl-8 pt-4 md:pt-8">
                        <div className="flex flex-col mt-7 md:mt-14">
                            <motion.div variants={navVariants} className="flex items-start gap-2">
                                <img src="3start.svg" alt="" />

                                <div className="flex flex-col">
                                    <p className={`inline text-start text-[#202229] font-semibold text-xl md:text-[34px] leading-[38px] md:leading-[44px]`}>
                                        Find your next star <br className='hidden sm:block' />  performer.
                                    </p>
                                    <motion.p variants={navVariants} className={`my-10 text-start text-[#202229CC] font-normal text-base leading-[24px]`}>
                                        Explore the vast Zwilt marketplace to find the candidate  <br className='hidden sm:block' /> that meets your needs.
                                    </motion.p>


                                    <div className="flex items-center gap-4 leading-[12.11px] text-[14.8px] font-medium text-[#202229]">
                                        <img src="back-skew.svg" alt="back-f" />
                                        <span>Join Now</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>


                    </div>

                    <div className="skew-y-2 flex flex-col flex-1 mt-10 md:mt-0"> 
                        <img src="3start-sec.svg" className='-mb-5' alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Startjourney