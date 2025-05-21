import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DishesSection from './components/DishesSection'
import Customers from './components/Customers'
import Servicessection from './components/Servicessection'
import Footer from './components/footer'
import ChatWidget from './components/ChatWidget'

export default function page() {
  return (
    <main>
       <Navbar />
       <Hero />
       <DishesSection />
       <Servicessection />
       <Customers />
       <Footer />
       <ChatWidget />
       
       


    </main>
    
  )
}

