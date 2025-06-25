import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import FavoriteButton from "@/components/favorite-button"
import CartButton from "@/components/cart-button"
import ProductContactButtons from "@/components/product-contact-buttons"

export default function PlacardsPage() {
  const placardImages = [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&h=600&fit=crop",
  ]

  const features = [
    "Sur mesure",
    "Portes coulissantes",
    "Intérieur modulable",
    "Finitions variées",
    "Optimisation espace",
    "Installation rapide",
  ]

  const solutions = [
    {
      title: "Placard Encastré",
      description: "Intégration parfaite dans votre architecture",
      icon: "🏠",
    },
    {
      title: "Placard d'Entrée",
      description: "Rangement pratique dès l'entrée",
      icon: "🚪",
    },
    {
      title: "Placard Sous Escalier",
      description: "Exploite chaque recoin de votre maison",
      icon: "🪜",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-white hover:text-red-200 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Placards Sur Mesure</h1>
          <p className="text-xl max-w-2xl">
            Maximisez votre espace de rangement avec nos placards conçus sur mesure. Solutions intelligentes pour chaque
            recoin de votre maison.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Hero Image */}
        <div className="relative h-96 mb-12 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop"
            alt="Placard moderne Deco Mohammedia"
            fill
            className="object-cover"
          />
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Nos Spécialités</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="bg-red-100 text-red-800 px-4 py-2 text-sm">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Galerie de Réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placardImages.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Placard réalisation ${index + 1}`}
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
          <h2 className="text-3xl font-bold mb-4">Prêt à optimiser chaque espace ?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nos placards sur mesure s'adaptent parfaitement à votre intérieur. Consultation gratuite et devis
            personnalisé.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <FavoriteButton
              item={{
                id: "placards",
                title: "Placards Sur Mesure",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=350&h=300&fit=crop",
                description: "Placards sur mesure et optimisés",
                href: "/placards",
              }}
            />
            <CartButton
              item={{
                id: "placards",
                title: "Placards Sur Mesure",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=350&h=300&fit=crop",
                description: "Placards sur mesure et optimisés",
                price: 6000,
                href: "/placards",
              }}
            />
          </div>
          <ProductContactButtons productType="des placards sur mesure" color="red" />
        </div>
      </div>
    </div>
  )
}
