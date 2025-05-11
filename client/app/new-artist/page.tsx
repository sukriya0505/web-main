'use client'
import { ArtistCard } from "@/components/artist-card"
import { FilterSidebar } from "@/components/filter-sidebar"
import { artists } from "@/data/artists"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu } from "lucide-react"

export default function NewArtistPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Mobile filter button */}
      <div className="lg:hidden p-4 border-b">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="w-4 h-4 mr-2" />
          {isSidebarOpen ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      {/* Sidebar */}
      <div className={`
        ${isSidebarOpen ? 'block' : 'hidden'} 
        lg:block lg:w-64 border-r p-4 h-screen sticky top-0 overflow-y-auto
      `}>
        <FilterSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 lg:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  )
}
