'use client';

import { FaUtensils, FaShippingFast, FaLeaf } from 'react-icons/fa';

const services = [
  {
    icon: <FaUtensils className="text-3xl text-primary" />,
    title: 'Plats Frais & Faits Maison',
    description: 'Chaque repas est préparé sur commande avec des ingrédients frais et locaux pour une expérience culinaire unique.'
  },
  {
    icon: <FaShippingFast className="text-3xl text-primary" />,
    title: 'Livraison Express',
    description: 'Commandez et recevez vos plats préférés en un temps record, chaud et prêt à déguster.'
  },
  {
    icon: <FaLeaf className="text-3xl text-primary" />,
    title: 'Options Saines',
    description: 'Des menus équilibrés et adaptés à tous les régimes : végétarien, sans gluten, faible en calories.'
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-red-50 px-8 md:px-20 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Nos Services
        </h2>
        <p className="mt-4 text-gray-500">
          Blissly vous propose des services pensés pour votre confort et votre plaisir gustatif.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div key={index} className="bg-pink-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
