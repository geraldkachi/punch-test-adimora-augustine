"use client"
import { useState } from "react";
// import Button from "./button/Button"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'
import { navVariants } from "@/app/utils/motion";
import Button from "../button/Button";

const Navbar = () => {
    const router = useRouter()
    const [nav, setNav] = useState(false);
    return (
        <>
            <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`my-4 p-3 relative max-w-[1300px] mx-3 sm:mx-auto bg-[#525AA0] rounded-[15px]`}>
                {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
                <div className={`mx-auto flex items-center justify-between gap-8 bg-[#525AA0] rounded-[15px]`}>
                    <div  className="cursor-pointer"  onClick={() => router.push('/', { scroll: false })}>
                    <Link href="/">
                        <Image src="next.svg" width={100} height={56} alt="logo" className="wi object-contain cursor-pointer" />
                    </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-6 px-4 ml-24">
                        <Link href="/" className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors text-white leading-[14px]`}>
                            <span>Find Work</span>
                        </Link>
                        <Link href="/" className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors text-white leading-[14px]`}>
                            <span>Find Talent</span>
                        </Link>
                        <Link href="/" className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors text-white leading-[14px]`}>
                            <span>Articles</span>
                        </Link>
                        <Link href="/" className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors text-white leading-[14px]`}>
                            <span>About Us</span>
                        </Link>
                        <Link href="/" className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors text-white leading-[14px]`}>
                            <span>Contact Us</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center relative gap-x-2">
                        <Button variant="secondary" title="Log In" className="!bg-transparent text-white" />
                        <Button title="Join Now" className="!bg-white !text-[#202229] !text-sm !leading-[14px] rounded-2xl" />
                    </div>

                    <div className="md:hidden flex items-center justify-center gap-4">
                        <Button title="Join Now" className="!bg-white text-[#202229]" />
                        <img src="/menu.svg" alt="menu" onClick={() => setNav(!nav)} className="w-[48px] h-[48px] object-contain cursor-pointer" width={20} height={20} />
                    </div>
                </div>
            </motion.nav>



            <ul className={nav ? 'fixed left-0 top-0 w-full h-svh z-20 border-r bg-black ease-in-out duration-500 shadow-lg' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <div className="flex flex-col justify-between h-full overflow-scroll">
                    <div>
                        <h1 className='w-full text-3xl font-bold text- p-4 flex items-center justify-between bg-[#2A2A33]'>
                            <a href="/" className="cursor-pointer" >
                                <Image src="next.svg" width={14} height={56} alt="logo" className="w-[56px] h-[56px] object-contain" onClick={() => { }} />
                            </a>
                            <Image src="menu.svg" width={14} height={56} alt="navx" onClick={() => setNav(!nav)} className="w-[56px] h-[56px] object-contain" />
                        </h1>
                        <li className='text-white'>
                           
                        </li>
                        <div className='py-4 px-5 text-[#CCCCCE] leading-[38.08px] text-xl font-medium w-full h-max cursor-pointer' onClick={() => router.push('/', { scroll: false })}><Link className="w-full h-full whitespace-nowrap" href="/pricing">Find Work</Link> </div>
                        <div className='py-4 px-5 text-[#CCCCCE] leading-[38.08px] text-xl font-medium w-full h-max cursor-pointer' onClick={() => router.push('/', { scroll: false })}><Link className="w-full h-full whitespace-nowrap" href='/faq'>Find Talent</Link> </div>
                        <div className='py-4 px-5 text-[#CCCCCE] leading-[38.08px] text-xl font-medium w-full h-max cursor-pointer' onClick={() => router.push('/', { scroll: false })}><Link className="w-full h-full whitespace-nowrap" href='/faq'>Articles</Link> </div>
                        <div className='py-4 px-5 text-[#CCCCCE] leading-[38.08px] text-xl font-medium w-full h-max cursor-pointer' onClick={() => router.push('/', { scroll: false })}><Link className="w-full h-full whitespace-nowrap" href='/faq'>About Us</Link> </div>
                        <div className='py-4 px-5 text-[#CCCCCE] leading-[38.08px] text-xl font-medium w-full h-max cursor-pointer' onClick={() => router.push('/', { scroll: false })}><Link className="w-full h-full whitespace-nowrap" href='/faq'>Contact Us</Link> </div>
                    </div>


                    <div className='w-full grid grid-cols-2  gap-6 bg-[#2A2A33] p-4'>
                        <Button title="Log In" className="flex items-center justify-center !text-white !bg-transparent !border !border-white" />
                        <Button title="Join Now" className="flex items-center justify-center !bg-white text-[#202229]" />
                    </div>
                </div>
            </ul>
        </>
    )
}

export default Navbar


// Ezekiel 28:11-19 
// 2 Corinthians 11:14