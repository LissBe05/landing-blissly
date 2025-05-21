'use client';

import React from 'react';
import DishCard from "./DishCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link"; 

export default function DishesSection() {
  return (
    <section id="menu" className="pt-24 bg-pink-50 px-10 py-16">
      <div className="flex justify-between items-center">
        {/* Bouton gauche */}
        <button className="text-gray-600 text-xl p-2 bg-white rounded-full shadow">
          <FaArrowLeft />
        </button>

        {/* Liste des plats */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <DishCard
            image="/salad.jpg"
            name="Fresh and Healthy Salad"
            calories={50}
            price={20}
          />
          <DishCard
            image="/noodles.jpg"
            name="Delicious Spicy Beef Noodles"
            calories={60}
            price={30}
            isActive
          />
          <DishCard
            image="/smoothie.jpg"
            name="Healthy Fruit Smoothie"
            calories={70}
            price={40}
          />
          <DishCard
            image="/plat3.jpg"
            name="Poulet"
            calories={100}
            price={90}
          />
          <DishCard
            image="/plat2.jpg"
            name="Steak"
            calories={100}
            price={98}
          />
        </div>

        {/* Bouton droit avec lien vers /menu */}
        <Link href="/menu">
          <button className="text-white text-xl p-2 bg-red-600 rounded-full shadow">
            <FaArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
}
