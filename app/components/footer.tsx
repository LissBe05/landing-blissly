'use client'
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      alert(`Merci pour votre inscription : ${email}`)
      setEmail('')
    }
  }

  return (
    <footer className="bg-pink-100 text-gray-800 pt-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

        {/* Logo + description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Blissly</h2>
          <p className="text-sm">
            Le meilleur de la food saine, livrée avec soin. Découvrez des plats gourmands, frais et équilibrés.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-2">Recevez nos offres exclusives et nouveautés.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full sm:w-auto flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full sm:w-auto">
              S’inscrire
            </button>
          </form>
        </div>

        {/* Contact rapide */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2"><FaPhoneAlt /> +33 1 23 45 67 89</li>
            <li className="flex items-center gap-2"><FaEnvelope /> contact@blissly.fr</li>
          </ul>

          <div className="mt-4">
            <h4 className="text-md font-semibold mb-2">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
                <FaFacebookF size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Localisation */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaMapMarkerAlt /> Localisation
          </h3>
          <p className="text-sm mb-2">123 Rue du Bonheur, Paris 75001</p>
          <iframe
            title="Blissly Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9997740828493!2d2.2922926156748944!3d48.85884497928747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdd450b6efb%3A0xf27e9b60bc7d0b0a!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1654536261843!5m2!1sfr!2sfr"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow"
          ></iframe>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 border-t border-gray-300 pt-4">
        &copy; {new Date().getFullYear()} Blissly. Tous droits réservés.
      </div>
    </footer>
  )
}
