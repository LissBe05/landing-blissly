'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface FeatureDishProps {
  image: string
  name: string
  description: string
  price: number
}

export default function FeatureDish({ image, name, description, price }: FeatureDishProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full md:w-1/2 lg:w-1/3 mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 space-y-3">
        <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex items-center justify-between pt-4">
          <span className="text-lg font-semibold text-primary">${price}</span>
          <button className="bg-primary text-white px-4 py-2 rounded-full text-sm shadow hover:bg-red-700 transition">
            Order Now
          </button>
        </div>
      </div>
    </motion.div>
  )
}
