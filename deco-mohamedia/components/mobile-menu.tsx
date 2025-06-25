"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: "Accueil", href: "#" },
    { name: "A propos", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Nos avantages", href: "#advantages" },
    { name: "Temoignage", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-lg font-medium px-2 py-2 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/commande"
            className="mt-4 bg-amber-500 hover:bg-amber-600 text-white w-full"
            onClick={() => setOpen(false)}
          >
            Commande
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
