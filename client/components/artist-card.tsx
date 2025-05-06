import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart } from "lucide-react"
import { StarRating } from "@/components/star-rating"
import type { Artist } from "@/types/artist"
import Link from "next/link"

interface ArtistCardProps {
  artist: Artist
}

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={artist.image || "/placeholder.svg?height=300&width=400"}
          alt={artist.name}
          fill
          className="object-cover"
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full">
          <Heart className="h-5 w-5 text-gray-500" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="relative w-10 h-10">
            <Image
              src={artist.avatar || "/placeholder.svg?height=40&width=40"}
              alt={artist.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium">{artist.name}</h3>
            <p className="text-sm text-gray-500">
              {artist.specialty} · {artist.location}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded">{artist.rating}</div>
          <StarRating rating={artist.rating} />
        </div>
        <p className="text-sm mb-4">
          from ${artist.price} per {artist.priceUnit}
        </p>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/profile">
            <Button className="bg-purple-500 hover:bg-purple-600 w-full">Follow</Button>
          </Link>
          <Button variant="outline" className="w-full">
            Learn more
          </Button>
        </div>
      </div>
    </Card>
  )
}
