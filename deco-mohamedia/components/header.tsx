"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Heart, ShoppingCart, Menu } from "lucide-react"
import { useFavorites } from "@/hooks/use-favorites"
import { useCart } from "@/hooks/use-cart"

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const { favorites } = useFavorites()
  const { getTotalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 py-4",
        isSticky ? "bg-white shadow-md" : "",
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold no-underline">
          <span className="text-orange-500">D</span>eco mohammedia
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {[
            { name: "Accueil", href: "/" },
            { name: "A propos", href: "#about" },
            { name: "Menu", href: "#menu" },
            { name: "Nos avantages", href: "#advantages" },
            { name: "Temoignage", href: "#testimonials" },
            { name: "Contact", href: "#contact" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "font-medium transition-colors hover:text-amber-500 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-amber-500 after:transition-all",
                isSticky ? "text-gray-800" : "text-white",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Favorites Button */}
          <Link href="/favoris">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "relative",
                isSticky ? "text-gray-800 hover:text-amber-500" : "text-white hover:text-amber-200",
              )}
            >
              <Heart className="h-5 w-5" />
              {favorites.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                  {favorites.length}
                </Badge>
              )}
            </Button>
          </Link>

          {/* Cart Button */}
          <Link href="/panier">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "relative",
                isSticky ? "text-gray-800 hover:text-amber-500" : "text-white hover:text-amber-200",
              )}
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-amber-500 text-white text-xs">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
          </Link>

          <Link href="/commande">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white hidden md:block">Commande</Button>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl">
            <Menu className={cn("h-6 w-6", isSticky ? "text-gray-800" : "text-white")} />
          </button>
        </div>
      </div>
    </header>
  )
}
