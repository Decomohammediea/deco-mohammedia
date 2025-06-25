"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import SearchBar from "@/components/search-bar"

export default function MobileSearch() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Search className="h-5 w-5" />
          <span className="sr-only">Rechercher</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="h-auto">
        <SheetHeader>
          <SheetTitle>Rechercher</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          <SearchBar placeholder="Rechercher des meubles..." />
        </div>
      </SheetContent>
    </Sheet>
  )
}
