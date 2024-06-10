import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Button from '../button/Button';
const Footer = () => {
    return (
        
        // bg-gradient-to-b from-[#FDFDFF] from-10% via-[#F3F4FF] via-70% to-[#F3F4FF] 10% to-90%
        <div className="bg bg-[#0C0C0C] text-white">
            <div className="-skew-y-2 bg-[#0C0C0C]  py-4 h-full w-full md:pt-20">
            <div className="skew-y-2 grid grid-cols-6 gap-10 max-w-7xl mx-3 xl:mx-auto ">
                <div className="col-span-2">
                    <div className="flex flex-col mb-10">
                    <Link href="/">
                        <Image src="next.svg" width={160} height={56} alt="logo" className="wi object-contain cursor-pointer" />
                    </Link>
                        <div className='mt-5 leading-[22px] text-sm font-normal break-words text-white'>
                        We take complex hiring processes - and  <br className='hidden sm:block' /> simplify them. Connecting you to the world&apos;s  <br className='hidden sm:block' /> highly qualified talent pool.
                        </div>
                    </div>
                    <div className="flex flex-col mt-5">
                        <span className='leading-[32px] font-semibold text-sm'>LINKS AND REDIRECTS</span>
                        <div className=' grid grid-cols-2 gap-6 mt-4'>
                        <Button title="Hire now" className="flex items-center justify-center rounded-[20.27px] !text-white !bg-[#292B34] !border !text-[14.86px] !border-none !leading-[12.16px] !font-medium !py-3 !px-2 " />
                        <Button title="Apply now" className="flex items-center justify-center rounded-[20.27px] !bg-[#292B34] !text-white !text-[14.86px] !leading-[12.16px] !font-medium !py-3 !px-2 " />
                    </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className={`inline text-center mt-2 text-white mb-5 font-bold text-4xl md:text-[54px] leading-[48px] md:leading-[64px] break-wo  rd`}>Connecting the right people to the right businesses.</div>


                    <div className="grid grid-cols-2 gap-3 md:gap-20 px-3 md:px-0 py-6 lg:py-8 md:grid-cols-4 whitespace-nowrap">
                        <div>
                            <h2 className="mb-3 md:mb-4 text-xs md:text-sm leading-[32px] font-semibold text-[#757679]">PLATFORM</h2>
                            <ul className="mb-3 md:mb-4 text-xs md:text-lg leading-[24px] font-medium text-white space-y-4 w-full">
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Find Work</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Find Talent</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Approvals</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Categories</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">About Us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-3 md:mb-4 text-xs md:text-sm leading-[32px] font-semibold text-[#757679]">CATEGORIES</h2>
                            <ul className="mb-3 md:mb-4 text-xs md:text-lg leading-[24px] font-medium text-white space-y-4 w-full">
                                <li className="mb-2">
                                    <Link href="/" className="hover:underline">Data Science</Link>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="hover:underline">IT & Networking</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Web & Mobile</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-3 md:mb-4 text-xs md:text-sm leading-[32px] font-semibold text-[#757679]">HELP</h2>
                            <ul className="mb-3 md:mb-4 text-xs md:text-lg leading-[24px] font-medium text-white space-y-4 w-full">
                                <li className="mb-2">
                                    <a href="/" className="hover:underline">FAQ’s</a>
                                </li>
                                <li className="mb-2">
                                    <Link href="/" className="hover:underline">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-3 md:mb-4 text-xs md:text-sm leading-[32px] font-semibold text-[#757679]">GET IN TOUCH @</h2>
                            <ul className="mb-3 md:mb-4 text-xs md:text-lg leading-[24px] font-medium text-white space-y-4 w-full">
                                <li className="mb-2">
                                    <Link href="/help-cent" className="hover:underline">Instagram</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/contact-us" className="hover:underline">LinkedIn</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/pricing" className="hover:underline">Twitter</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            <div className='max-w-7xl mx-auto mt-5 py-2'>
                <div className='flex items-center justify-between border-t border-[#2022295E]'>
                    <span className="text-[#FFFFFF] text-base text-[31.25px] font-medium">All rights reserved  by Zwilt</span>

                    <div className="flex items-center gap-4 text-[#A6A7A9] text-base leading[31.25px] font-medium">
                        <span className="text underline">Privacy Policy</span>
                        <span className="text underline">Terms and Conditions</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer