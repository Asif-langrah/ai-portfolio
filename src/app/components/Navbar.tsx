import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          AI Engineer
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-green-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-green-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-white hover:text-green-200">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-green-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

