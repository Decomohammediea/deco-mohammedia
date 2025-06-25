import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import FavoriteButton from "@/components/favorite-button"
import CartButton from "@/components/cart-button"
import ProductContactButtons from "@/components/product-contact-buttons"

export default function DressingsPage() {
  const dressingImages = [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&h=600&fit=crop",
  ]

  const features = [
    "Rangement optimisé",
    "Éclairage LED intégré",
    "Miroirs haute qualité",
    "Accessoires modulables",
    "Portes coulissantes",
    "Finitions personnalisées",
  ]

  const solutions = [
    {
      title: "Dressing Walk-in",
      description: "Espace de rangement luxueux et spacieux",
      icon: "🚪",
    },
    {
      title: "Dressing d'angle",
      description: "Optimisation parfaite des espaces restreints",
      icon: "📐",
    },
    {
      title: "Dressing linéaire",
      description: "Solution élégante le long d'un mur",
      icon: "📏",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-white hover:text-purple-200 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dressings Sur Mesure</h1>
          <p className="text-xl max-w-2xl">
            Organisez votre garde-robe avec style. Nos dressings allient fonctionnalité et esthétique pour un rangement
            optimal.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Hero Image */}
        <div className="relative h-96 mb-12 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop"
            alt="Dressing moderne Deco Mohammedia"
            fill
            className="object-cover"
          />
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Nos Spécialités</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2 text-sm">
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
            {dressingImages.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Dressing réalisation ${index + 1}`}
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
          <h2 className="text-3xl font-bold mb-4">Prêt à créer votre dressing sur mesure ?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nos experts créent le dressing parfait pour votre espace et vos besoins. Consultation gratuite et devis
            personnalisé.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <FavoriteButton
              item={{
                id: "dressings",
                title: "Dressings Sur Mesure",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=350&h=300&fit=crop",
                description: "Dressings organisés et stylés",
                href: "/dressings",
              }}
            />
            <CartButton
              item={{
                id: "dressings",
                title: "Dressings Sur Mesure",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=350&h=300&fit=crop",
                description: "Dressings organisés et stylés",
                price: 8000,
                href: "/dressings",
              }}
            />
          </div>
          {ProductContactButtons && <ProductContactButtons productType="un dressing sur mesure" color="purple" />}
        </div>
      </div>
    </div>
  )
}
