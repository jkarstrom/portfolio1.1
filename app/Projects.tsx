'use client'
import React from 'react'
import ProjectCard from './components/ProjectCard'
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-white p-5 text-2xl'>
            Skills
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-[#fceee9]/20 scrollbar-thumb-[#fceee9]'>
            {/* Projects */}
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>

        <div className='w-full absolute top-[30%] bg-[#f8d3c5]/80 left-0 h-[500px] -skew-x-12'/>
    </motion.div>
  )
}

export default Projects