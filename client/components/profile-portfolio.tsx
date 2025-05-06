import Image from "next/image"

export function ProfilePortfolio() {
  const portfolioItems = [
    { id: 1, image: "/placeholder.svg?height=300&width=400", title: "Portrait Session" },
    { id: 2, image: "/placeholder.svg?height=300&width=400", title: "Wedding Photography" },
    { id: 3, image: "/placeholder.svg?height=300&width=400", title: "Landscape Series" },
    { id: 4, image: "/placeholder.svg?height=300&width=400", title: "Commercial Work" },
    { id: 5, image: "/placeholder.svg?height=300&width=400", title: "Event Coverage" },
    { id: 6, image: "/placeholder.svg?height=300&width=400", title: "Street Photography" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {portfolioItems.map((item) => (
        <div key={item.id} className="group relative overflow-hidden rounded-lg">
          <div className="relative h-64 w-full">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <h3 className="text-white font-medium p-4">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
