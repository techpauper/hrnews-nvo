"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Search, Menu, X } from "lucide-react"
import { getAllCategories } from "@/lib/articles"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const categories = getAllCategories()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  return (
    <nav className="bg-blue-800 text-white shadow-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo size="medium" />
          </div>

          <div className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className={`text-sm font-medium ${isActive(`/categories/${category.slug}`) ? "text-yellow-300" : "text-white hover:text-yellow-200"}`}
              >
                {category.name.toUpperCase()}
              </Link>
            ))}
            <Link
              href="/opinion"
              className={`text-sm font-medium ${isActive("/opinion") ? "text-yellow-300" : "text-white hover:text-yellow-200"}`}
            >
              OPINION
            </Link>
          </div>

          <div className="flex items-center">
            <button
              className="p-2 text-white hover:text-yellow-200"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
              <span className="sr-only">Search</span>
            </button>
            <button
              className="ml-2 p-2 text-white hover:text-yellow-200 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 border-t border-blue-600">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(`/categories/${category.slug}`) ? "bg-blue-900 text-white" : "text-white hover:bg-blue-600"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name.toUpperCase()}
              </Link>
            ))}
            <Link
              href="/opinion"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/opinion") ? "bg-blue-900 text-white" : "text-white hover:bg-blue-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              OPINION
            </Link>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 w-full max-w-[95%] sm:max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Search</h2>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSearch}>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-grow text-black"
                  autoFocus
                />
                <Button type="submit" className="bg-blue-700 hover:bg-blue-800 w-full sm:w-auto">
                  Search
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  )
}

