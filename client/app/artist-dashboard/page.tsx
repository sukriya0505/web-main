"use client";

import { useAuth } from "@/lib/auth.context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Artist {
  id: string;
  name: string;
  email: string;
  bio?: string;
  profilePic?: string;
  isArtist: true;
}

export default function ArtistDashboard() {
  const { user, logout } = useAuth();
  const artist = user as Artist | null;

  return (
    <div className="container mx-auto p-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Artist Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={artist?.profilePic} alt={artist?.name} />
              <AvatarFallback>{artist?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">{artist?.name}</h2>
              <p className="text-gray-500">{artist?.email}</p>
            </div>
          </div>

          {artist?.bio && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Bio</h3>
              <p className="text-gray-600">{artist.bio}</p>
            </div>
          )}

          <div className="mt-8 flex justify-between items-center">
            <Button variant="outline" onClick={() => {}}>
              Edit Profile
            </Button>
            <Button variant="destructive" onClick={logout}>
              Logout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
