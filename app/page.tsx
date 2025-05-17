import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function page() {
  return (
    <main className='w-[1000] h-[700] bg-[#fff3f3] rounded-[68px] outline outline-10 outline-offset-2 outline-white' >
       <Navbar />
       <Hero />

    </main>
    
  )
}

