'use client'
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

function ContactMe() {
    const { register, handleSubmit} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = 'mailto:joankarstrom@gmail?subject=${formData.subject}&body=Hi, my name is ${fromData.name}. ${formData.message} (${formData.email})';
    };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-white p-5 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Help me help you.{" "}
                <span className='decoration-[#a3b899]/50 underline'></span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#f8d3c5] h-7 w-7 animate-pulse' />
                    <p className='text-2xl text-[#dde6d5]'>+1 (312) 610-3649</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#f8d3c5] h-7 w-7 animate-pulse' />
                    <p className='text-2xl text-[#dde6d5]'>Karstrom@chapman.edu</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#f8d3c5] h-7 w-7 animate-pulse' />
                    <p className='text-2xl text-[#dde6d5]'>Anaheim, California </p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register("name")} placeholder="Name" className='contactInput' type="text"/>
                    <input {...register("email")} placeholder="Email" className='contactInput' type="email"/>
                </div>
                <input {...register("subject")} placeholder="Subject" className='contactInput' type="text" />
                <textarea {...register("message")} placeholder="Message" className='contactInput' />
                <button className='bg-[#fdba74] py-5 px-10 rounded-md text-[#f8d3c5] font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe