import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-green-800">Welcome to My AI Engineering Portfolio</h1>
      <div className="flex items-center mb-8">
        <div className="w-1/2 pr-4">
          <p className="text-lg mb-4">
            I'm a Generative AI Engineer passionate about creating intelligent systems and pushing the boundaries of
            artificial intelligence.
          </p>
          <Link href="/projects" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            View My Projects
          </Link>
        </div>
        <div className="w-1/2">
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="AI Robot"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

