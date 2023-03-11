'use client'
import React from 'react'
import { motion } from 'framer-motion';

function ExperienceCard1() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#a3b899] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
        <motion.img
        initial={{
            y:-100,
            opacity: 0,
        }}
        transition={{ duration: 1.2}}
        whileInView={{ opacity: 1, y:0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src=""
        alt=""
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Business Analysis</h4>
            <p className='font-bold text-2xl mt-1'>Deb Reinhart Interior Design</p>
            <div className='flex space-x-2 my-2'>
                {/* tech used */}
                <img className='h-10 w-10 rounded-full'
                src="/figma.png"
                alt="The Figma Logo"
                />
                {/* tech used */}
                <img className='h-10 w-10 rounded-full'
                src="/salesforce.png"
                alt="The Salesforce Logo"
                />
                {/* tech used */}
                <img className='h-10 w-10 rounded-full'
                src="/canva.png"
                alt="The Canva Logo"
                />
            </div>
            <p className='uppercase py-5 text text-[#fceee9]'>May 2021 - January 2022</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Collaborated with the principal designer to find solutions that accomplish the branding goals to increase social media
presence and engagement.</li>
                <li>Rebrand a well-established high-end North Shore Interior Design Company including social media presence and website redesign.</li>
                <li>Took a lead role in designing a working CRM using Salesforce for the company and organized client database.</li>
            </ul>
        </div>

    </article>
  )
}

export default ExperienceCard1