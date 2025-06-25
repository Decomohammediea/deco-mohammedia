"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

interface SearchResult {
  id: string
  title: string
  description: string
  image: string
  href: string
  category: string
}

const searchData: SearchResult[] = [
  {
    id: "cuisines",
    title: "Cuisines Sur Mesure",
    description: "Cuisines modernes et fonctionnelles sur mesure",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=350&h=300&fit=crop",
    href: "/cuisines",
    category: "Mobilier",
  },
  {
    id: "chambres",
    title: "Chambres à Coucher",
    description: "Chambres élégantes et confortables",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=350&h=300&fit=crop",
    href: "/chambres",
    category: "Mobilier",
  },
  {
    id: "dressings",
    title: "Dressings",
    description: "Dressings organisés et stylés",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=350&h=300&fit=crop",
    href: "/dressings",
    category: "Mobilier",
  },
  {
    id: "meubles-tv",
    title: "Meubles TV",
    description: "Meubles TV design et pratiques",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=350&h=300&fit=crop",
    href: "/meubles-tv",
    category: "Mobilier",
  },
  {
    id: "bibliotheques",
    title: "Bibliothèques",
    description: "Bibliothèques élégantes et fonctionnelles",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=350&h=300&fit=crop",
    href: "/bibliotheques",
    category: "Mobilier",
  },
  {
    id: "placards",
    title: "Placards",
    description: "Placards sur mesure et optimisés",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=350&h=300&fit=crop",
    href: "/placards",
    category: "Mobilier",
  },
]

interface SearchBarProps {
  className?: string
  placeholder?: string
}

export default function SearchBar({ className = "", placeholder = "Rechercher..." }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Recherche en temps réel
  useEffect(() => {
    if (query.trim() === "") {
      setResults([])
      setIsOpen(false)
      return
    }

    const filteredResults = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()),
    )

    setResults(filteredResults)
    setIsOpen(filteredResults.length > 0)
    setSelectedIndex(-1)
  }, [query])

  // Fermer la recherche en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Navigation au clavier
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0 && results[selectedIndex]) {
          window.location.href = results[selectedIndex].href
        }
        break
      case "Escape":
        setIsOpen(false)
        inputRef.current?.blur()
        break
    }
  }

  const clearSearch = () => {
    setQuery("")
    setResults([])
    setIsOpen(false)
    inputRef.current?.focus()
  }

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setIsOpen(results.length > 0)}
          className="pl-8 pr-8 h-8 text-sm bg-white/90 backdrop-blur-sm border-gray-300 focus:border-amber-500 focus:ring-amber-500"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            onClick={clearSearch}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 h-6 w-6 hover:bg-gray-100"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {/* Résultats de recherche */}
      {isOpen && results.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 max-h-80 overflow-y-auto shadow-lg min-w-80">
          <CardContent className="p-0">
            {results.map((result, index) => (
              <Link
                key={result.id}
                href={result.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 p-2 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                  index === selectedIndex ? "bg-amber-50" : ""
                }`}
              >
                <div className="relative w-8 h-8 rounded overflow-hidden flex-shrink-0">
                  <Image src={result.image || "/placeholder.svg"} alt={result.title} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 truncate text-sm">{result.title}</h4>
                  <p className="text-xs text-gray-500 truncate">{result.description}</p>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Message aucun résultat */}
      {isOpen && query && results.length === 0 && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 shadow-lg min-w-80">
          <CardContent className="p-3 text-center text-gray-500">
            <Search className="h-6 w-6 mx-auto mb-1 text-gray-300" />
            <p className="text-sm">Aucun résultat pour "{query}"</p>
            <p className="text-xs mt-1">Essayez "cuisine", "chambre"...</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
