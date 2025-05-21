'use client'

export default function Contact() {
  return (
    <section id="contact" className="bg-pink-50 py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Contactez-nous
      </h2>

      <form className="max-w-2xl mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            Nom
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Votre email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Votre message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-red-400 text-white px-6 py-2 rounded-full font-medium hover:bg-red-500 transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  )
}
