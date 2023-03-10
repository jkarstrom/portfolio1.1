'use client'
import React from 'react'
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}

    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-white p-5 text-2xl'>
            About
        </h3>

        <motion.img
            initial={{
                x:-200,
                opacity: 0,
            }}
            transition= {{
                duration: 1.2,
            }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true}}
            src="/jeju.png"
            alt="A picture of Joan on an island in South Korea<3"
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[600px] xl:h-[500px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a bit about ME
            </h4>
            <p className='text text-[#fceee9]'>
            I am an almost graduate of Chapman University with a Bachelor of Science in Computer Science and Business Administration with an international emphasis. 
            After living in South Korea for nine months, I recently returned to the States, where I interned at a startup metaverse company and studied at Yonsei University. 
            Something that I really developed a passion for was assessability in software. 
            During COVID, I did a lot of freelance tech work with older people setting up new devices or programs that they needed help with. 
            Not just those older, people my age also need help understanding technology, especially in video games. 
            Growing up, I did not play video games and only really started playing in 2020 when I built my first computer. 
            I believe I have a unique perspective on the UX of video games as I notice things that others that might have played for years take for granted.
            </p>
        </div>

    </motion.div>
  )
}

export default About