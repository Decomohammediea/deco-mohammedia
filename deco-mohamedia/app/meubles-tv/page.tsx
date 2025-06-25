import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function MeublesTVPage() {
  const meubleTVImages = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=800&h=600&fit=crop",
  ]

  const features = [
    "Design moderne",
    "Rangements cachés",
    "Gestion des câbles",
    "Différentes tailles",
    "Éclairage LED",
    "Support TV intégré",
  ]

  const styles = [
    {
      title: "Style Minimaliste",
      description: "Lignes épurées pour un salon moderne",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    },
    {
      title: "Style Industriel",
      description: "Métal et bois pour un look authentique",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    },
    {
      title: "Style Contemporain",
      description: "Élégance et fonctionnalité réunies",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-white hover:text-green-200 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meubles TV Design</h1>
          <p className="text-xl max-w-2xl">
            Sublimez votre salon avec nos meubles TV modernes. Design épuré et fonctionnalité pour tous vos équipements
            audiovisuels.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Hero Image */}
        <div className="relative h-96 mb-12 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=400&fit=crop"
            alt="Meubles TV"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Badge key={index} className="bg-green-600 text-white">
              {feature}
            </Badge>
          ))}
        </div>

        {/* Styles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">{style.title}</h2>
                <p className="text-gray-600 mb-6">{style.description}</p>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={style.image || "/placeholder.svg"}
                    alt={style.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
