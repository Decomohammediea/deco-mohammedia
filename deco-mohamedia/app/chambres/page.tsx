import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import FavoriteButton from "@/components/favorite-button"
import CartButton from "@/components/cart-button"
import ProductContactButtons from "@/components/product-contact-buttons"

export default function ChambresPage() {
  const chambreImages = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=800&h=600&fit=crop",
  ]

  const features = [
    "Lits de qualité premium",
    "Armoires spacieuses",
    "Tables de chevet assorties",
    "Finitions soignées",
    "Matelas orthopédiques",
    "Éclairage d'ambiance",
  ]

  const collections = [
    {
      title: "Collection Moderne",
      description: "Lignes épurées et design contemporain",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    },
    {
      title: "Collection Classique",
      description: "Élégance intemporelle et raffinement",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    },
    {
      title: "Collection Minimaliste",
      description: "Simplicité et fonctionnalité optimale",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-white hover:text-blue-200 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Chambres à Coucher</h1>
          <p className="text-xl max-w-2xl">
            Créez votre espace de repos idéal avec nos chambres complètes. Confort, élégance et personnalisation au
            rendez-vous.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Hero Image */}
        <div className="relative h-96 mb-12 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=400&fit=crop"
            alt="Chambre moderne Deco Mohammedia"
            fill
            className="object-cover"
          />
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Nos Spécialités</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2 text-sm">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* Collections */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos Collections</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {collections.map((collection, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{collection.title}</h3>
                  <p className="text-gray-600">{collection.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Galerie de Réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chambreImages.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Chambre réalisation ${index + 1}`}
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
          <h2 className="text-3xl font-bold mb-4">Prêt à créer votre chambre idéale ?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nos experts vous accompagnent pour créer un espace de repos qui vous ressemble. Devis gratuit et
            personnalisé.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <FavoriteButton
              item={{
                id: "chambres",
                title: "Chambres à Coucher",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=350&h=300&fit=crop",
                description: "Chambres élégantes et confortables",
                href: "/chambres",
              }}
            />
            <CartButton
              item={{
                id: "chambres",
                title: "Chambres à Coucher",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=350&h=300&fit=crop",
                description: "Chambres élégantes et confortables",
                price: 12000,
                href: "/chambres",
              }}
            />
          </div>
          {ProductContactButtons && <ProductContactButtons productType="une chambre à coucher" color="blue" />}
        </div>
      </div>
    </div>
  )
}
