'use client'
import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './components/ExperienceCards/ExperienceCard';
import ExperienceCard1 from './components/ExperienceCards/ExperienceCard1';
import ExperienceCard2 from './components/ExperienceCards/ExperienceCard2';

function WorkExperience() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly content-around mx-auto place-items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-white text-2xl'>
            Experience
        </h3>

        <div className='w-full flex space-x-5 mt-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-[#fceee9]/20 scrollbar-thumb-[#f8d3c5]'>
            <ExperienceCard />
            <ExperienceCard1 />
            <ExperienceCard2 />

        </div>
    </motion.div>
  )
}

export default WorkExperience