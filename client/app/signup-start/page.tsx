import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Palette, Briefcase } from "lucide-react"

export default function SignupStartPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="max-w-md w-full">
          <h1 className="text-2xl font-semibold mb-8 text-center">Select your Preference</h1>

          <div className="grid gap-6">
            <Card className="p-6 border-2 hover:border-purple-500 cursor-pointer transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-md">
                  <Palette className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Artist</h3>
                  <p className="text-gray-600">Artists don&#39;t need to look for work—it finds them!</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 hover:border-purple-500 cursor-pointer transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-md">
                  <Briefcase className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Client</h3>
                  <p className="text-gray-600">
                    No more searching for hours. Just click and find great artists who do exactly what you need
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 flex justify-end">
            <Link href="/signup-details">
              <Button className="bg-purple-500 hover:bg-purple-600 px-8">Next</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:block flex-1 bg-purple-100 relative">
        <Image
          src="https://framerusercontent.com/images/7Ca0X3xcBpa5VjfvoMT5xob2vc.jpg?scale-down-to=2048"
          alt="Artist working in studio"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
