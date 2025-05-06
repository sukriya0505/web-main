import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Link href="/" className="flex items-center">
        <div className="font-bold text-xl">SUKRIYA</div>
      </Link>
      <nav className="flex items-center gap-6">
        <Link href="/" className="text-sm font-medium">
          Home
        </Link>
        <Link href="/new-artist" className="text-sm font-medium">
          Artists
        </Link>
        <Link href="/signup-start">
          <Button className="bg-purple-500 hover:bg-purple-600">Sign up</Button>
        </Link>
        <Link href="/login-fill-email">
          <Button variant="outline" className="border-gray-300">
            Log in
          </Button>
        </Link>
      </nav>
    </header>
  );
}
