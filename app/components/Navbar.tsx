export default function Navbar() {
    return (
      <nav className="flex items-center bg-pink-50 justify-between px-10 py-6">
        <div className="flex gap-4">
         <div className="w-4 h-4 mb-8 rounded-full bg-red-500"></div>
         <div className="w-4 h-4 mb-8 rounded-full bg-blue-500"></div>
         <div className="w-4 h-4 mb-8 rounded-full bg-green-500"></div>
        </div>
        <div className="text-2xl font-bold">Blissly</div>
        <ul className="hidden md:flex space-x-8 font-medium text-lg">
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="text-xl">🛍️</button>
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </div>
          <button className="bg-red-400 text-white px-4 py-2 rounded-full text-sm">Sign in</button>
        </div>
      </nav>
    )
  }
  