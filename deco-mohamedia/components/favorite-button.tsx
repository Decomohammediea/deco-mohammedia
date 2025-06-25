"use client"

import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFavorites, type FavoriteItem } from "@/hooks/use-favorites"
import { cn } from "@/lib/utils"

interface FavoriteButtonProps {
  item: FavoriteItem
  className?: string
}

export default function FavoriteButton({ item, className }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorite = isFavorite(item.id)

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => toggleFavorite(item)}
      className={cn(
        "transition-colors",
        favorite
          ? "bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
          : "hover:bg-gray-50 hover:border-red-200 hover:text-red-600",
        className,
      )}
    >
      <Heart className={cn("h-4 w-4", favorite && "fill-current")} />
      <span className="sr-only">{favorite ? "Retirer des favoris" : "Ajouter aux favoris"}</span>
    </Button>
  )
}
