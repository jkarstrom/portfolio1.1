'use client'
import React from 'react'
import { motion } from 'framer-motion';

function ProjectCard() {
  return (
    <div 
    className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
        <motion.img
            initial={{
                y: -300,
                opacity: 0,
            }}
            transition={{ duration: 1.2}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true}}
            src=""
            alt=""
        />

        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
                Project Name
            </h4>
            <p className='text-lg text-center md:text-left'>
                This is where I will write all about my wonderful project and everything that it did.
            </p>
        </div>
    </div>
  )
}

export default ProjectCard