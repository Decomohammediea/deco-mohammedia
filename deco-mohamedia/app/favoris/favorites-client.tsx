"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Trash2, ShoppingCart } from "lucide-react"
import { useFavorites } from "@/hooks/use-favorites"
import { useCart } from "@/hooks/use-cart"

export default function FavoritesClient() {
  const { favorites, removeFromFavorites } = useFavorites()
  const { addToCart } = useCart()

  if (favorites.length === 0) {
    return (
      <div className="text-center py-16">
        <Heart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-600 mb-2">Aucun favori pour le moment</h2>
        <p className="text-gray-500 mb-6">Commencez à ajouter des meubles à vos favoris pour les retrouver ici.</p>
        <Link href="/">
          <Button className="bg-amber-500 hover:bg-amber-600 text-white">Découvrir nos meubles</Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">
          {favorites.length} meuble{favorites.length > 1 ? "s" : ""} en favoris
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              <Button
                variant="outline"
                size="icon"
                onClick={() => removeFromFavorites(item.id)}
                className="absolute top-2 right-2 bg-white/90 hover:bg-white border-red-200 text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex gap-2">
                <Link href={item.href} className="flex-1">
                  <Button variant="outline" className="w-full">
                    Voir détails
                  </Button>
                </Link>
                <Button
                  onClick={() =>
                    addToCart({
                      id: item.id,
                      title: item.title,
                      image: item.image,
                      description: item.description,
                      price: 2500, // Prix par défaut
                      href: item.href,
                    })
                  }
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
