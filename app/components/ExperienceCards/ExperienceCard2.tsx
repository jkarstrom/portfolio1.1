'use client'
import React from 'react'
import { motion } from 'framer-motion';

function ExperienceCard2() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 space-x-5 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#a3b899] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
        <motion.img
        initial={{
            y:-100,
            opacity: 0,
        }}
        transition={{ duration: 1.2}}
        whileInView={{ opacity: 1, y:0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="/chapman.png"
        alt="A Chapman Univeristy Logo"
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Athletic Assistance</h4>
            <p className='font-bold text-2xl mt-1'>Chapman University - Orange, California</p>
            <div className='flex space-x-2 my-2'>
                {/* tech used */}
                <img className='h-10 w-10 rounded-full'
                src="/excel.png"
                alt="The Excel Logo"
                />
                {/* tech used */}
                <img className='h-10 w-10 rounded-full'
                src="/SQL.png"
                alt="The SQL Logo"
                />
                {/* tech used */}
                <img className='h-10 w-10 rounded-full'
                src="/figma.png"
                alt="The Figma Logo"
                />
            </div>
            <p className='uppercase py-5 text text-[#fceee9]'>May 2022 - September 2022</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Headed a company rebrand with three new websites and presented our project at a 10,000-person conference</li>
                <li>Collaborated effectively in a bilingual development environment on source code using C# and Unity, specifically worked on user
interaction, developing user data, and open-world generation.</li>
                <li> Appointed Leader on UX design for building the users HUD analyzing user data.</li>
            </ul>
        </div>

    </article>
  )
}

export default ExperienceCard2