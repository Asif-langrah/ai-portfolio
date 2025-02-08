import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-green-800">About Me</h1>
      <div className="flex items-start mb-8">
        <div className="w-1/3 pr-4">
          <Image
            src="/asif.jpeg?height=400&width=300"
            alt="Profile Picture"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-2/3">
          <p className="text-lg mb-4">
            I'm a Generative AI Engineer with a passion for creating intelligent systems that can learn, adapt, and
            generate new content. With expertise in machine learning, deep learning, and natural language processing, I
            strive to develop AI solutions that push the boundaries of what's possible.
          </p>
          <p className="text-lg mb-4">My experience includes working on projects involving:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Natural Language Generation</li>
            <li>Image Synthesis</li>
            <li>Conversational AI</li>
            <li>Predictive Modeling</li>
            <li>Reinforcement Learning</li>
          </ul>
          <p className="text-lg">
            I'm always excited to take on new challenges and collaborate on innovative AI projects. Feel free to explore
            my portfolio and get in touch if you'd like to work together!
          </p>
        </div>
      </div>
    </div>
  )
}

