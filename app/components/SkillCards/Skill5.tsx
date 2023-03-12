import React from 'react'
import { motion } from 'framer-motion';

function Skill5() {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            src='/JavaScript.png'
            alt="The Java Script Logo"
            className='rounded-full border-orange-300/75 bg-[#dde6d5] object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filer group-hover:greyscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text text-center text-[#667b68] opacity-100'>
                    Java Script
                </p>
            </div>
        </div>
    </div>
  )
}

export default Skill5