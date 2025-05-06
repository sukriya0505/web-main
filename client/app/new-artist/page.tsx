import { ArtistCard } from "@/components/artist-card"
import { FilterSidebar } from "@/components/filter-sidebar"
import { artists } from "@/data/artists"

export default function NewArtistPage() {
  return (
    <div className="flex">
      <FilterSidebar />
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  )
}
