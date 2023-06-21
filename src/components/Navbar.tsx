import '../app/App.css'
export default function Navbar() {
  return (
    <nav className="relative w-full h-[4em] py-4">
      <ul className="flex items-center justify-center w-full px-6 space-x-10">
        <li className="text-green-500 font-bold text-[1.1rem] cursor-pointer hover:animate-pulse">Home</li>
        <li className="text-white opacity-75 font-bold text-[1.1rem] cursor-pointer hover:animate-pulse">About</li>
        <li className="text-white opacity-75 font-bold text-[1.1rem] cursor-pointer hover:animate-pulse">Contact Us</li>
      </ul>
    </nav>
  )
}
