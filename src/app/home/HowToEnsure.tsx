import React from 'react'
import { navVariants } from '../utils/motion'
import { motion } from "framer-motion";
import VerticalAccordion from '@/components/Accordion/AccordionMotion';
import { Accordion } from '@/components';

export const faqArr = [
    {
      header: 'Resume Screening',
      content: `Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit..`
    },
    {
      header: 'Step 3: Technical Evaluation',
      content: `Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit..`
    },
    {
      header: 'Technical Evaluation',
      content: `Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit..`
    },
    {
      header: 'Application Review',
      content: `Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit..`
    },
    {
      header: 'Lets get to work',
      content: `Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit..`
    },
  ]
  

const HowToEnsure = () => {
    return (
        <div className='-skew-y-2  py-4 h-full w-full md:py-20'>
            <div className={`skew-y-2 max-w-7xl mx-3 xl:mx-auto md:flex flex-row items-center justify-center gap-5 py-20`}>
                <div className="flex flex-col flex-1 w-full">
                <div className="flex flex-col mt-7 md:mt-14">
                        <p className={`inline text-start mt-2 text-[#202229] font-bold text-4xl md:text-[54px] leading-[48px] md:leading-[64px]`}>
                             How we ensure you&apos;re <br className='hidden sm:block' />  in good hands.
                        </p>
                </div>

                    <motion.p variants={navVariants} className={`my-10 text-start text-[#1E1515CC] font-normal text-[22px] leading-[32px] break-words`}>
                    With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.
                    </motion.p>

                    {/* <VerticalAccordion /> */}
                    {faqArr.map((item, index) => (
                        <Accordion key={`faq_${index}`} heading={ <h1 className='flex items-center gap-3'><span className="font-semibold">Step {index + 1}:</span>{item.header}</h1>}>
                          <p className="pb-4 text-[#202229]">{item?.content}</p>
                        </Accordion>
                    ))}
                </div>

                <div className="flex flex-col flex-1"></div>
            </div>
        </div>
    )
}

export default HowToEnsure