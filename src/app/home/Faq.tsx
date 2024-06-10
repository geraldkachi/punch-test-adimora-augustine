import React from 'react'
import { navVariants } from '../utils/motion'
import { motion } from "framer-motion";

const Faq = () => {
  return (
    <div className='bg-[#F3F3F3] -skew-y-2 py-4 h-full w-full md:py-20 space-y-4'>
            <div className="skew-y-2 flex flex-col items-center justify-center my-14">
                <p className={`inline text-center text-[#202229] font-bold text-4xl md:text-[54px] leading-[48px] md:leading-[54px]`}>
                Frequently asked questions
                </p>
            </div>

                <div className="skew-y-2 flex flex-col justify-center flex-1 w-full bg-[#F3F3F3] overflow-hidden">
                   
                <motion.div variants={navVariants} className={`max-w-full h-max flex items-center justify-between flex-1 px-auto  w-full  text-center text-[#202229] font-normal text-2xl leading-[24px] border border-[#D6D6D6]`}>
                  <span className="px-4 h-full w-max py-5 border-r border-[#D6D6D6]">General</span>  
                  <span className="flex items-center justify-center flex-1 py-5 pl-20">I want to work part-time, is that possible</span>
                  <span></span>
                </motion.div>

                <motion.div variants={navVariants} className={`self-end max-w-full flex items-center justify-between flex-1 px-auto w-full  text-center text-[#202229] font-normal text-2xl leading-[24px] border border-[#D6D6D6]`}>
                  <span></span>
                  <span className="flex items-center justify-center flex-1 py-5 pl-40">How long are the average projects? </span>
                  <span></span>
                </motion.div>
                <motion.div variants={navVariants} className={`self-end max-w-full flex items-center justify-between flex-1 px-auto w-full  text-center text-[#202229] bg-[#E8E8E8] font-semibold text-2xl leading-[24px] border border-[#D6D6D6]`}>
               <span></span>
                <span className="flex items-center justify-center flex-1 py-5 pl-[240px]">How does the payment works?</span>
                  <span className="px-4 h-full w-max py-5 pr-20 border">
                  <svg   width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.924 7.81731C13.924 11.5029 10.807 14.4906 6.96198 14.4906C3.11698 14.4906 -2.38813e-08 11.5029 -1.62296e-08 7.81731C-8.57797e-09 4.13174 3.11698 1.144 6.96198 1.144C10.807 1.144 13.924 4.13174 13.924 7.81731Z" fill="#FFBE2E"/>
                <path d="M12.1337 15.6346L12.1337 2.5191e-08L26.0577 7.81731L12.1337 15.6346Z" fill="#FFBE2E"/>
                </svg>
                    </span>  
                </motion.div>

                <motion.div variants={navVariants} className={`max-w-full flex items-center justify-between flex-1 px-auto w-full  text-center text-[#202229] font-normal text-2xl leading-[24px] border border-[#D6D6D6]`}>
                  <span className="border px-4 flex h-max"></span>  
                  <span className="flex items-center justify-center flex-1 py-5 pr-8">How much can I earn?</span>
                  <span></span>
                </motion.div>
                <motion.div variants={navVariants} className={`max-w-full flex items-center justify-between flex-1 px-auto w-full  text-center text-[#202229] font-normal text-2xl leading-[24px] border border-[#D6D6D6]`}>
                  <div className="border px-4 flex h-max">
                    <span className="px-4 h-full w-max py-5 border-r border-[#D6D6D6]">General</span>
                    <span className="px-4 h-full w-max py-5">Joining Process</span>
                    </div>  
                  <span className="flex items-center justify-center flex-1 py-5 pr-44">I want to work part-time, is that possible</span>
                  <span></span>
                </motion.div>
                <motion.div variants={navVariants} className={`max-w-full flex items-center justify-between flex-1 px-auto w-full  text-center text-[#202229] font-normal text-2xl leading-[24px] border border-[#D6D6D6]`}>
                  <span className="border px-4 flex h-max"></span>  
                  <span className="flex items-center justify-center flex-1 py-5 pl-24">How long are the average projects?</span>
                  <span></span>
                </motion.div>
                <motion.div variants={navVariants} className={`max-w-full flex items-center justify-between flex-1 px-auto w-full  text-center text-[#202229] font-normal text-2xl leading-[24px] border border-[#D6D6D6]`}>
                  <span className="border px-4 flex h-max"></span>  
                  <span className="flex items-center justify-center flex-1 py-5 pl-24">How long are the average projects?</span>
                  <span></span>
                </motion.div>
                <motion.div variants={navVariants} className={`max-w-full flex items-center justify-between flex-1 px-auto w-full  text-center text-[#202229] font-normal text-2xl leading-[24px] border border-[#D6D6D6]`}>
                  <span className="border px-4 flex h-max"></span>  
                  <span className="flex items-center justify-center flex-1 py-5 pr-12">How much can I earn?</span>
                  <span></span>
                </motion.div>

                </div>
    </div>
  )
}

export default Faq