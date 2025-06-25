import Link from "next/link"
import { ArrowLeft, Heart } from "lucide-react"
import FavoritesClient from "./favorites-client"

export default function FavorisPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-white hover:text-red-200 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-8 w-8" />
            <h1 className="text-4xl md:text-5xl font-bold">Mes Favoris</h1>
          </div>
          <p className="text-xl max-w-2xl">Retrouvez tous vos meubles préférés sauvegardés pour plus tard.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <FavoritesClient />
      </div>
    </div>
  )
}
