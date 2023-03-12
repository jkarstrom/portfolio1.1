'use client'
import React from 'react'
import ProjectCard from './components/ProjectCards/ProjectCard'
import { motion } from 'framer-motion';
import ProjectCard1 from './components/ProjectCards/ProjectCard1';
import ProjectCard2 from './components/ProjectCards/ProjectCard2';

function Projects() {
  return (
    <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-white p-5 text-2xl'>
          Projects
        </h3>
        
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-[#fceee9]/20 scrollbar-thumb-[#fceee9]'>
            {/* Projects */}
            <ProjectCard />
            <ProjectCard1 />
            <ProjectCard2 />
        </div>

        <div className='w-full absolute top-[30%] bg-[#f8d3c5]/60 left-0 h-[500px] -skew-x-12 rotate-12'/>
    </motion.div>
  )
}

export default Projects