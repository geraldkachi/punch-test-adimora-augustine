import React from 'react'

const NeedAJob = () => {
  return (
    <div className='-skew-y-2  py-4 h-full w-full md:py-20 bg-[#0C0C0C]'>
            <div className={`max-w-7xl mx-3 xl:mx-auto flex flex-col items-center justify-center gap-5 py-20 bg-[#525AA0]`}>
                <div className="flex flex-col flex-1 w-full items-center justify-center ">
                        <p className={`skew-y-2  inline mt-2 text-center text-white font-bold text-4xl md:text-[54px] leading-[48px] md:leading-[64px]`}>
                             Need a job done, and done <br className='hidden sm:block' />  well? Get started
                        </p>

                        <img src="needa-job.svg" className='skew-y-2  mt-8' alt="" />
                </div>

            </div>
        </div>
  )
}

export default NeedAJob