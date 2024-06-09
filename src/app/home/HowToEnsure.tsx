import React from 'react'
import { navVariants } from '../utils/motion'
import { motion } from "framer-motion";
const HowToEnsure = () => {
    return (
        <div className=' -skew-y-2  py-4 h-full w-full mix-blend-overlay flex items-center justify-center md:py-20'>
            <div className={`skew-y-2 max-w-7xl mx-3 xl:mx-auto sm:flex flex-row items-center justify-center gap-5 py-20`}>
                <div className="flex flex-col flex-1">
                <div className="flex flex-col mt-7 md:mt-14">
                        <p className={`inline text-start mt-2 text-[#202229] font-bold text-4xl md:text-[54px] leading-[48px] md:leading-[64px]`}>
                        How we ensure you&apos;re <br className='hidden sm:block' />  in good hands.
                          </p>
                    </div>

                    <motion.p variants={navVariants} className={`my-10 text-start text-[#1E1515CC] font-normal text-[22px] leading-[32px]`}>
                        Zwilt enabled us to deliver on time and they&apos;ve <br className='hidden sm:block' />  been heavy hitters in our corner since.
                    </motion.p>
                </div>

                <div className="flex flex-col flex-1"></div>
            </div>
        </div>
    )
}

export default HowToEnsure