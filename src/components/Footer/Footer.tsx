import React from 'react'

const Footer = () => {
    return (
        <div className="bg bg-[#0C0C0C]">
            <div className='max-w-7xl mx-auto'>
                <div className='flex items-center justify-between'>
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