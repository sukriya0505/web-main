import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function FilterSidebar() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-medium mb-4 text-lg">Filter by</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="artist-type">Type of artist</Label>
            <Input
              id="artist-type"
              placeholder="sound engineer"
              className="h-9"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Japan" className="h-9" />
          </div>

          <div className="space-y-2">
            <Label>Availability</Label>
            <Input placeholder="14 FEB - 14 NOV" className="h-9" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="min-budget">Minimum Budget</Label>
            <Input id="min-budget" placeholder="$ 500" className="h-9" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="max-budget">Maximum Budget</Label>
            <Input id="max-budget" placeholder="$ 2500" className="h-9" />
          </div>

          <Button className="w-full bg-purple-500 hover:bg-purple-600">
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
