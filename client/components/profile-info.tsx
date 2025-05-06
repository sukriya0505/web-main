import { Card, CardContent } from "@/components/ui/card"

export function ProfileInfo() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">About</h3>
            <p className="text-gray-600">
              Professional photographer with over 10 years of experience specializing in portrait, landscape, and event
              photography. I'm passionate about capturing moments that tell stories and evoke emotions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Specialties</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Portrait Photography</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Landscape</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Events</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Wedding</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Commercial</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Experience</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <h4 className="font-medium">Senior Photographer</h4>
                  <span className="text-gray-500">2018 - Present</span>
                </div>
                <p className="text-gray-600">Studio 67, New York</p>
              </div>
              <div>
                <div className="flex justify-between">
                  <h4 className="font-medium">Freelance Photographer</h4>
                  <span className="text-gray-500">2015 - 2018</span>
                </div>
                <p className="text-gray-600">Self-employed</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Education</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <h4 className="font-medium">BFA in Photography</h4>
                  <span className="text-gray-500">2011 - 2015</span>
                </div>
                <p className="text-gray-600">New York School of Visual Arts</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
