import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import FavoriteButton from "@/components/favorite-button"
import CartButton from "@/components/cart-button"
import ProductContactButtons from "@/components/product-contact-buttons"

export default function BibliothequesPage() {
  const bibliothequeImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42e?w=800&h=600&fit=crop",
  ]

  const features = [
    "Étagères ajustables",
    "Matériaux durables",
    "Design personnalisable",
    "Grande capacité",
    "Finitions variées",
    "Éclairage intégré",
  ]

  const types = [
    {
      title: "Bibliothèque Murale",
      description: "Optimise l'espace vertical de votre pièce",
      icon: "📚",
    },
    {
      title: "Bibliothèque d'Angle",
      description: "Parfaite pour les espaces restreints",
      icon: "📖",
    },
    {
      title: "Bibliothèque Séparatrice",
      description: "Divise l'espace tout en rangeant",
      icon: "📑",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-white hover:text-indigo-200 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bibliothèques Élégantes</h1>
          <p className="text-xl max-w-2xl">
            Organisez vos livres et objets déco avec style. Nos bibliothèques s'adaptent à tous les espaces et tous les
            styles d'intérieur.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Hero Image */}
        <div className="relative h-96 mb-12 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=400&fit=crop"
            alt="Bibliothèque moderne Deco Mohammedia"
            fill
            className="object-cover"
          />
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Nos Spécialités</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="bg-indigo-100 text-indigo-800 px-4 py-2 text-sm">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Types de Bibliothèques</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {types.map((type, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Galerie de Réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bibliothequeImages.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Bibliothèque réalisation ${index + 1}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Voir en détail
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à organiser votre collection ?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nos bibliothèques allient fonctionnalité et esthétique. Contactez-nous pour créer votre espace de lecture
            idéal.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <FavoriteButton
              item={{
                id: "bibliotheques",
                title: "Bibliothèques Élégantes",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=350&h=300&fit=crop",
                description: "Bibliothèques élégantes et fonctionnelles",
                href: "/bibliotheques",
              }}
            />
            <CartButton
              item={{
                id: "bibliotheques",
                title: "Bibliothèques Élégantes",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=350&h=300&fit=crop",
                description: "Bibliothèques élégantes et fonctionnelles",
                price: 4500,
                href: "/bibliotheques",
              }}
            />
          </div>
          <ProductContactButtons productType="une bibliothèque élégante" color="indigo" />
        </div>
      </div>
    </div>
  )
}
