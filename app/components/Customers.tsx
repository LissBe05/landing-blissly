'use client'
import Slider from 'react-slick'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Marie Dupont',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    review: "Le service est incroyable ! La commande est arrivée chaude et en un temps record. Je recommande fortement.",
    rating: 5,
  },
  {
    name: 'Jean Martin',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    review: "Les plats sont excellents, bien présentés et savoureux. Une expérience très positive !",
    rating: 4,
  },
  {
    name: 'Claire Bernard',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    review: "J'ai adoré la variété du menu. Facile à commander, rapide à livrer et super bon !",
    rating: 5,
  },
  {
    name: 'Lucas Petit',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    review: "Service rapide et plats délicieux. J'ai commandé plusieurs fois, jamais déçu.",
    rating: 4,
  },
]

export default function Customers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <section className="bg-pink-50 py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Ce que disent nos clients
      </h2>

      <Slider {...settings}>
        {testimonials.map((customer, index) => (
          <div key={index} className="px-4">
            <div className="bg-white p-6 rounded-2xl shadow-md max-w-xl mx-auto text-center">
              <Image
                src={customer.avatar}
                alt={customer.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg">{customer.name}</h3>
              <div className="flex justify-center text-yellow-400 mb-2">
                {[...Array(customer.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-700 text-sm italic">“{customer.review}”</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}
