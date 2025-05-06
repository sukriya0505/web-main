'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Heart } from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"recent" | "best">("recent")

  const workDetails = [
    {
      image: "https://framerusercontent.com/images/c92CH1MP5YQcMLlMNxrry8Zx28k.jpg?scale-down-to=1024",
      title: "Ceramic Vase",
    },
    {
      image: "https://framerusercontent.com/images/ayDqy4Ht9RkFYXKs91SmwGW7I.png?scale-down-to=512",
      title: "Modern Sculpture",
    },
    {
      image: "https://framerusercontent.com/images/rQRaaafo3wCP7kxVOIxm8eqwQ.png?scale-down-to=512",
      title: "Artistic Plate",
    },
    // Add more items as needed
  ]

  const bestWorkDetails = [
    {
      image: "https://framerusercontent.com/images/ardL1oqEQa80dnz8zTjxciJCcY.png?scale-down-to=1024",
      title: "Award-winning Vase",
    },
    {
      image: "https://framerusercontent.com/images/GaMR6ylXJ0WdikU3FJgA4qlczcg.png?scale-down-to=1024",
      title: "Signature Sculpture",
    },
    // Add more items as needed
  ]

  const displayedWorks = activeTab === "recent" ? workDetails : bestWorkDetails

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        <div className="relative w-40 h-40">
          <Image
            src="https://framerusercontent.com/images/l1hfTr2axAdc064uf5xTECO0.png"
            alt="Profile"
            width={160}
            height={160}
            className="rounded-full object-cover border-4 border-white shadow"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold">Elara Whitmore</h1>
          <p className="text-gray-500 mb-4">Ceramic Artist</p>

          <div className="flex gap-8 mb-6">
            <div>
              <span className="text-purple-500 font-semibold">69</span> Connections
            </div>
            <div>
              <span className="text-purple-500 font-semibold">106</span> Clients
            </div>
            <div>
              <span className="text-purple-500 font-semibold">8</span> Projects
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="bg-purple-500 hover:bg-purple-600 px-6">Follow</Button>
            <Button variant="outline" className="px-6">
              Chat
            </Button>
            <Button variant="outline" className="px-3 aspect-square">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Work Tabs */}
      <div className="mb-8 border-b">
        <div className="flex gap-8">
          <button
            className={`px-4 py-2 font-medium border-b-2 ${
              activeTab === "recent"
                ? "border-purple-500 text-black"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab("recent")}
          >
            Recent Work
          </button>
          <button
            className={`px-4 py-2 font-medium border-b-2 ${
              activeTab === "best"
                ? "border-purple-500 text-black"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab("best")}
          >
            Best Work
          </button>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedWorks.map((work, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-lg">
            <div className="relative h-64 w-full">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
              {work.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
