'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

function ProjectCard2() {
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
            src="/3dprinter.png"
            alt="A picture of the 3D printer I own"
            className='rounded-lg'
        />

        <div className='space-y-10 px-0 md:px-10 max-w-6xl space-x-2 my-2'>
            <h4 className='text-4xl font-semibold text-center'>
                3D Printing
                <SocialIcon 
                url="https://news.chapman.edu/2020/04/10/cu-students-and-faculty-3d-print-more-than-1000-face-shields-for-healthcare-workers/" 
                fgColor='#dde6d5' 
                bgColor='transparent'
                style={{ height: 70, width: 70 }}
                />
            </h4>
            <p className='text-lg text-center md:text-left'>
            During the Spring of 2020, I took a 3D printing class where we learned how to use 3D printers and model items to print. 
            During this time, lockdown happened, and we had to take our 3D printers home to finish the semester. 
            A big thing we were focused on in class was prosthetics and how to create cheaper alternatives that make it more accessible for people to get ahold of and afford prosthetics. 
            When the mask shortage happened, we changed our focus to masks and how to create PPL for healthcare workers. 
            We got a sponsorship from a small filament business, mass-produced masks and donated them to local hospitals.
            </p>
        </div>
    </div>
  )
}


export default ProjectCard2