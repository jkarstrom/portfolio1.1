'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Skill from './components/Skill';

function Skills() {
  return (
    <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-white p-5 text-2xl'>
            Skills
        </h3>
        <h3 className='absolute top-36 p-5 uppercase tracking-[3px] text text-[#fceee9] text-sm'>
            Hover over a skill for more knowledge
        </h3>

        <div className='grid grid-cols-4 gap-5'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>


    </motion.div>
  )
}

export default Skills