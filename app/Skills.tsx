'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Skill from './components/SkillCards/Skill';
import Skill1 from './components/SkillCards/Skill1';
import Skill2 from './components/SkillCards/Skill2';
import Skill3 from './components/SkillCards/Skill3';
import Skill4 from './components/SkillCards/Skill4';
import Skill5 from './components/SkillCards/Skill5';
import Skill6 from './components/SkillCards/Skill6';
import Skill7 from './components/SkillCards/Skill7';
import Skill8 from './components/SkillCards/Skill8';
import Skill9 from './components/SkillCards/Skill9';
import Skill10 from './components/SkillCards/Skill10';
import Skill11 from './components/SkillCards/Skill11';
import Skill12 from './components/SkillCards/Skill12';
import Skill13 from './components/SkillCards/Skill13';
import Skill14 from './components/SkillCards/Skill14';
import Skill15 from './components/SkillCards/Skill15';

function Skills() {
  return (
    <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto place-items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-white p-5 text-2xl'>
          Skills
        </h3>
        <h3 className='absolute top-36 p-5 space-y-5 uppercase tracking-[3px] text text-[#fceee9] text-sm'>
          Hover over a skill for more knowledge
        </h3>

        <div className='grid grid-cols-4 gap-5 top-36'>
            <Skill />
            <Skill1 />
            <Skill2 />
            <Skill3 />
            <Skill4 />
            <Skill5 />
            <Skill9 />
            <Skill7 />
            <Skill15 />
            <Skill6 />
            <Skill10 />
            <Skill11 />
            <Skill12 />
            <Skill13 />
            <Skill14 />
            <Skill8 />
        </div>
    </motion.div>
  )
}

export default Skills