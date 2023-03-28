import React from 'react'

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* ///overlay */}
        <div className='absolute left-0 top-0 right-0 bottom-0 bg-black/60 z-[2]'/>
        <div className='p-5 text-white z-[2] mt-[-10rem]'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <h2 className='py-5 text-xl'>{message}</h2>
            <button className='px-8 py-2 border  '>explore</button>
            <h2 className='text-sm sm:text-base underline py-5'>read about transl-x plus</h2>
        </div>
    </div>
  )
}

export default Hero