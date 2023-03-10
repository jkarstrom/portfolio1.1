'use client'
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between bg-orange-300/75 z-100'>
        <motion.div 
        initial={{
            x: -500,
            scale: 5,
        }}
        animate={{
            x: 0,
            scale: 1,
        }}    
        transition={{
            duration: .5,
        }}
        className='flex flex-row items-center space-x-4'>
            <Link href='/' className='px-2 py-1 bg-[#f8ebe7] text text-[#f8c9b8] rounded-lg'>
                Home
            </Link>

            {/* Social Icons*/}
            <SocialIcon 
                url="https://www.linkedin.com/in/joan-karstrom/" 
                fgColor='#dde6d5' 
                bgColor='transparent'
            />

            <SocialIcon 
                url="https://github.com/jkarstrom" 
                fgColor='#dde6d5' 
                bgColor='transparent'
            />

            <SocialIcon 
                url="https://www.linkedin.com/in/joan-karstrom/" 
                fgColor='#dde6d5' 
                bgColor='transparent'
            />

        </motion.div>

        <motion.div 
        initial={{
            x: 500,
            scale: 5,
        }}
        animate={{
            x: 0,
            scale: 1,
        }}    
        transition={{
            duration: .5,
        }}
        className="flex flex-row items-center cursor-pointer">
            {/* Avatar*/}
            <SocialIcon
                className='cursor-pointer'
                network='email'
                fgColor='#dde6d5' 
                bgColor='transparent'
            />
            <p className="uppercase hidden font-bold md:inline-flex text-sm text text-[#f8c9b8]">
                Contact Me
            </p>
        </motion.div>
    </header>
  )
}

export default Header