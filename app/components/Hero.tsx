'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'


export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 flex flex-col-reverse md:flex-row items-center justify-between bg-pink-50 px-10 py-10"
    >
      {/* LEFT */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          it’s not just <br />
          food <span className="text-primary">,</span> it’s an <br />
          experience
        </h1>

        <div className="flex gap-4">
          <button className="bg-red-600 text-white px-5 py-2 rounded-full shadow-md">
            Get Started
          </button>
          <button className="bg-white px-5 py-2 rounded-full shadow-md flex items-center gap-2">
            <span className="text-red-500 text-xl">▶</span>
            Watch Video
          </button>
        </div>

        <div>
          <p className="text-sm text-gray-600">Our Happy Customer</p>
          <div className="flex items-center space-x-2 mt-2">
            <div className="flex -space-x-2">
              <Image src="/user1.jpg" alt="user1" width={60} height={60} className="rounded-full border-2 border-white" />
              <Image src="/user2.jpg" alt="user2" width={60} height={60} className="rounded-full border-2 border-white" />
              <Image src="/user3.jpg" alt="user3" width={60} height={60} className="rounded-full border-2 border-white" />
            </div>
            <div className="w-15 h-15 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold ml-[-1rem] ">
              +
            </div>
          </div>
          <div className="flex mt-2">
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} className="text-yellow-400 text-sm">★</span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        className="relative md:w-1/2 mb-10 md:mb-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

     
        <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
          <Image
            src="/spaghetti.jpg"
            alt="Spaghetti"
            fill
            className="rounded-full object-cover"
          />
          {/* Discount badge */}
          <div className="absolute top-0 -left-5 bg-white w-25 h-10 text-red-600 px-3 py-1 rounded-xl text-xs font-bold shadow-md">
            <span className="block text-black text-center leading-none ">5%</span>
            <span className="block text-center -mt-1">Discount</span>
          </div>
        </div>
      </motion.div>

    </section>
  )
}
