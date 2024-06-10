import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Button from '../button/Button';
const Footer = () => {
    return (
        
        // bg-gradient-to-b from-[#FDFDFF] from-10% via-[#F3F4FF] via-70% to-[#F3F4FF] 10% to-90%
        <div className="bg bg-[#0C0C0C] text-white">
            <div className="-skew-y-2 bg-[#0C0C0C]  py-4 h-full w-full md:py-20">
            <div className="skew-y-2 grid grid-cols-6 gap-4 max-w-7xl mx-3 xl:mx-auto ">
                <div className="col-span-2">
                    <div className="flex flex-col">
                    <Link href="/">
                        <Image src="next.svg" width={100} height={56} alt="logo" className="wi object-contain cursor-pointer" />
                    </Link>
                        <div className='mt-5 leading-[22px] text-sm font-normal break-words text-white'>
                        We take complex hiring processes - and simplify them. Connecting you to the world&apos;s highly qualified talent pool.
                        </div>
                    </div>
                    <div className="flex flex-col mt-5">
                        <span className='leading-[32px] font-semibold text-sm'>LINKS AND REDIRECTS</span>
                        <div className=' grid grid-cols-2 gap-6'>
                        <Button title="Hire now" className="flex items-center justify-center rounded-[20.27px] !text-white !bg-[#292B34] !border !text-[14.86px] !border-none !leading-[12.16px] !font-medium !py-3 !px-2 " />
                        <Button title="Apply now" className="flex items-center justify-center rounded-[20.27px] !bg-[#292B34] !text-white !text-[14.86px] !leading-[12.16px] !font-medium !py-3 !px-2 " />
                    </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className={`inline text-center mt-2 text-white mb-5 font-bold text-4xl md:text-[54px] leading-[48px] md:leading-[64px] break-wo  rd`}>Connecting the right people to the right businesses.</div>


                    <div className="grid grid-cols-2 gap-3 md:gap-20 px-3 md:px-0 py-6 lg:py-8 md:grid-cols-5 whitespace-nowrap">
                        <div>
                            <h2 className="mb-3 md:mb-6 text-xs md:text-sm leading-[32px] font-semibold text-[#757679]">PRODUCTS</h2>
                            <ul className="mb-3 md:mb-6 text-xs md:text-sm leading-[32px] font-semibold text-white space-y-4">
                                <li className="mb-2">
                                    <Link href="/account-payable" className=" hover:underline">Accounts Payable</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/account-receivable" className="hover:underline">Accounts Receivable</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/account-payable" className="hover:underline">Inventory Management</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/financial-accounting" className="hover:underline">Financial Accounting</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-3 md:mb-6 text-xs md:text-sm leading-[32px] font-semibold text-[#757679]">FEATURES</h2>
                            <ul className="mb-3 md:mb-6 text-xs md:text-sm leading-[32px] font-semibold text-white space-y-4">
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Financial Reports</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Virtual Accounts</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Approvals</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Audit Trails</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">invoicing</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-3 md:mb-6 text-xs md:text-sm leading-[32px] font-semibold text-[#757679]">COMPANY</h2>
                            <ul className="mb-3 md:mb-6 text-xs md:text-sm leading-[32px] font-semibold text-white space-y-4">
                                <li className="mb-2">
                                    <Link href="/about" className="hover:underline">About Us</Link>
                                </li>
                                <li className="mb-2">
                                    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Careers</a>
                                </li>
                                <li className="mb-2">
                                    <Link href="/faq" className="hover:underline">FAQs</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-3 md:mb-6 text-xs md:text-sm leading-[32px] font-semibold text-[#757679]">RESOURCES</h2>
                            <ul className="mb-3 md:mb-6 text-xs md:text-sm leading-[32px] font-semibold text-white space-y-4">
                                <li className="mb-2">
                                    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-2">
                                    <Link href="/terms-of-use" className="hover:underline">Terms of Use</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/help-center" className="hover:underline">Help Center</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/blog" className="hover:underline">Blog</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-3 md:mb-6 text-xs md:text-sm leading-[32px] font-semibold text-[#757679]">SUPPORT</h2>
                            <ul className="mb-3 md:mb-6 text-xs md:text-sm leading-[32px] font-semibold text-white space-y-4">
                                <li className="mb-2">
                                    <Link href="/help-cent" className="hover:underline">Help Center</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/contact-us" className="hover:underline">Contact Us</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/pricing" className="hover:underline">Pricing</Link>
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