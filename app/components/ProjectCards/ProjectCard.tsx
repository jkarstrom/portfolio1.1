'use client'
import React from 'react'
import { motion } from 'framer-motion';

function ProjectCard() {
  return (
    <div 
    className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5  items-center justify-center p-20 md:p-44 h-screen'>
        <motion.img
            initial={{
                y: -300,
                opacity: 0,
            }}
            transition={{ duration: 1.2}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true}}
            src="/Portfolio.png"
            alt="A little plant in a pot that is the favicon of my portfolio site"
        />

        <div className='space-y-4 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
                Personal Portfolio
            </h4>
            <p className='text-lg text-center md:text-left'>
            What you are looking at right now was one of the projects I worked on! 
            I am constantly updating it, but the base build was initiated with Nextjs13. 
            I used tailwind CSS and a few libraries to implement animation and other really cool things. 
            Little things such as changing the color of the scroll bar, making icons smaller on smaller on smaller things, or chaning the opacity when you hover on something.
            This is an excellent example of my front-end development skills, and every time I work on this, I find myself correcting or adding more items. 
            I love the end of software where users interact with the product, and having that creative control makes me more passionate about my work.
            </p>
        </div>
    </div>
  )
}

export default ProjectCard