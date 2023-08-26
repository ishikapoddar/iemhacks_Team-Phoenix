import React, { useState } from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * The Homeredirect function returns a grid of links to different pages with hover effects and
 * descriptions for a competitive programming community website.
 * @returns A component that renders four links with hover effects, each linking to a different page
 * within the website. The links are displayed in a grid layout with two columns on larger screens and
 * one column on smaller screens. The links have a common style defined by the `style` variable, which
 * includes various CSS classes and styles. When the user hovers over a link, a description of the
 * linked page is displayed
 */
const Homeredirect = ({theme}) => {
    const [ishover1, sethover1] = useState(false);
    const [ishover2, sethover2] = useState(false);
    const [ishover3, sethover3] = useState(false);
    const [ishover4, sethover4] = useState(false);
    let style = `m-2 p-4 rounded-md backdrop-blur-sm 
          hover:box-shadow flex flex-col items-center justify-around xl:text-5xl lg:text-5xl md:text-3xl lg:h-[25vw] xl:h-[25vw] text-dark__blue border-4 border-dark__blue  ${theme ? "bg-gradient-to-t from-[#071fb4]" : "bg-gradient-to-t from-[#ffffff]"} to-[#e2a343]`;

    return (
        <div className='w-full grid grid-cols-2 grid-template-rows-global md:grid-cols-1 sm:grid-cols-1'>
            <Link href='/chatroom'data-aos="zoom-in" data-aos-duration="3000" onMouseOver={() => sethover1(true)}
                onMouseOut={() => sethover1(false)}>
                <div className={style}> {!ishover1 ? "Chatroom" : <motion.p className='text-2xl md:text-xl'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }} >
                    A place to exchange your ideas and contribute to the Community. It allows users to post messages, comments, and questions, which can be viewed and responded to by other users.</motion.p>}</div>
            </Link>
            <Link href='/events' onMouseOver={() => sethover2(true)}
            data-aos="zoom-in" data-aos-duration="3000"
                onMouseOut={() => sethover2(false)}>
                <div className={style}> {!ishover2 ? "Events" : <motion.p className='text-2xl md:text-xl'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}>This will help you to list the dates and times of upcoming programming contests and other related events.</motion.p>}</div>
            </Link>
            <Link href='/resources' onMouseOver={() => sethover3(true)}
            data-aos="zoom-in" data-aos-duration="3000"
                onMouseOut={() => sethover3(false)}>
                <div className={style}> {!ishover3 ? "Resources" : <motion.p className='text-2xl md:text-xl'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}>
                    Some of the most popular resources for competitive programming.</motion.p>}</div>
            </Link>
            <Link href='/more' onMouseOver={() => sethover4(true)}
            data-aos="zoom-in" data-aos-duration="3000"
                onMouseOut={() => sethover4(false)}>
                <div className={style}> {!ishover4 ? "More" : <motion.p className='text-2xl md:text-xl'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}>Some of the most popular Online Tools and Browser Extensions for competitive programming.</motion.p>}</div>
            </Link>
        </div>
    )
}

export default Homeredirect