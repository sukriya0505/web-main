'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <div className="font-bold text-xl">SUKRIYA</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-purple-500 transition-colors">
              Home
            </Link>
            <Link href="/new-artist" className="text-sm font-medium hover:text-purple-500 transition-colors">
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-purple-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/new-artist"
                className="text-sm font-medium hover:text-purple-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Artists
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Link href="/signup-start" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600">Sign up</Button>
                </Link>
                <Link href="/login-fill-email" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-gray-300">
                    Log in
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
