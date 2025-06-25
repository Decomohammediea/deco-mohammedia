import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import FavoriteButton from "@/components/favorite-button"
import CartButton from "@/components/cart-button"
import ProductContactButtons from "@/components/product-contact-buttons"

export default function CuisinesPage() {
  const cuisineImages = [
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1556909045-f7c5c2b4b2b0?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1556909045-4d5c2b4b2b0?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1556909045-4d5c2b4b2b1?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1556909045-4d5c2b4b2b2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1556909045-4d5c2b4b2b3?w=800&h=600&fit=crop",
  ]

  const features = [
    "Design sur mesure",
    "Matériaux de qualité premium",
    "Installation professionnelle",
    "Garantie 5 ans",
    "Électroménager intégré",
    "Éclairage LED inclus",
  ]

  const services = [
    {
      title: "Conception 3D",
      description: "Visualisez votre cuisine avant réalisation",
      icon: "🎨",
    },
    {
      title: "Installation complète",
      description: "Pose professionnelle par nos équipes",
      icon: "🔧",
    },
    {
      title: "Service après-vente",
      description: "Support technique et maintenance",
      icon: "🛠️",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-white hover:text-amber-200 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cuisines Sur Mesure</h1>
          <p className="text-xl max-w-2xl">
            Créez la cuisine de vos rêves avec nos designs modernes et fonctionnels. Chaque cuisine est unique et
            adaptée à vos besoins.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Hero Image */}
        <div className="relative h-96 mb-12 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=400&fit=crop"
            alt="Cuisine moderne Deco Mohammedia"
            fill
            className="object-cover"
          />
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Nos Spécialités</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="bg-amber-100 text-amber-800 px-4 py-2 text-sm">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Galerie de Réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cuisineImages.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Cuisine réalisation ${index + 1}`}
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
          <h2 className="text-3xl font-bold mb-4">Prêt à créer votre cuisine de rêve ?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé. Nos experts vous accompagnent dans votre projet de A à
            Z.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <FavoriteButton
              item={{
                id: "cuisines",
                title: "Cuisines Sur Mesure",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=350&h=300&fit=crop",
                description: "Cuisines modernes et fonctionnelles sur mesure",
                href: "/cuisines",
              }}
            />
            <CartButton
              item={{
                id: "cuisines",
                title: "Cuisines Sur Mesure",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=350&h=300&fit=crop",
                description: "Cuisines modernes et fonctionnelles sur mesure",
                price: 15000,
                href: "/cuisines",
              }}
            />
          </div>
          {ProductContactButtons && <ProductContactButtons productType="une cuisine sur mesure" color="amber" />}
        </div>
      </div>
    </div>
  )
}
