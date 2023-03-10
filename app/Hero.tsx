'use client'
import React from 'react'
import Link from 'next/link';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundBubbles from './components/BackgroundBubbles';

function Hero() {
    const [text, count] = useTypewriter({
        words: ["Hi my name is Joan :)",
        "Likes tea more than coffee", 
        "Plays too much video games", 
        "Can almost squat a plate", 
        "Loves her computer too much",
        "Buys too many plants"],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundBubbles />
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src="/profilepicture.png"
            alt="A picture of Joan <3"
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase pb-2 tracking-[12px]'>
                Software Engineer
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span>{text}</span>
                <Cursor cursorColor="#fceee9" />
            </h1>

            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>

                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>

                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>

                <Link href="#project">
                    <button className='heroButton'>Projects</button>
                </Link>
            
            </div>
        </div>
        
    </div>
  )
}

export default Hero