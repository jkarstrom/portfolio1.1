'use client'
import React from 'react'
import { motion } from 'framer-motion';

function ProjectCard1() {
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
            viewport={{ once: true }}
            src="/Portfolio.png"
            alt="A screenshot of the homepage of my portfolio"
        />

        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
                Echo Nite
            </h4>
            <p className='text-lg text-center md:text-left'>
            Echo Nite was my first REAL project done for my Visual Programming class as a final semester project. 
            It is a 2D scroller coded with C# on Unity for a Mac build. 
            I worked on it all by myself and did the art for it (except for the level backgrounds). 
            I learned about animation with player models and camera movement. 
            In this game, there are four levels; in each level, a new mechanic is introduced, for example, moving platforms or interactable blocks. 
            It was super fun to make, and for it being my first game, I am proud of doing it by myself. 
            Since finishing this project, I have used skills that I learned through this exercise in my internship experience.
            Although not the PRETTIEST it was a huge accomplishment for me. 
            </p>
        </div>
    </div>
  )
}


export default ProjectCard1