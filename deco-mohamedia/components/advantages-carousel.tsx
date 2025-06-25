"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface AdvantageSlide {
  id: number
  image: string
  title: string
  description: string
  features: string[]
  icon: string
}

const advantageSlides: AdvantageSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=1200&h=500&fit=crop",
    title: "Fabrication Artisanale",
    description: "Nos artisans expérimentés créent chaque meuble avec passion et savoir-faire",
    features: ["Fait main", "Matériaux nobles", "Finitions soignées"],
    icon: "🛠️",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=500&fit=crop",
    title: "Design Personnalisé",
    description: "Chaque création est unique et adaptée à votre style de vie",
    features: ["Sur mesure", "Design moderne", "Conseils experts"],
    icon: "🎨",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=500&fit=crop",
    title: "Qualité Premium",
    description: "Nous sélectionnons les meilleurs matériaux pour une durabilité exceptionnelle",
    features: ["Matériaux premium", "Garantie 5 ans", "Contrôle qualité"],
    icon: "⭐",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=500&fit=crop",
    title: "Service Complet",
    description: "De la conception à l'installation, nous vous accompagnons à chaque étape",
    features: ["Livraison gratuite", "Installation incluse", "SAV réactif"],
    icon: "🚚",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=500&fit=crop",
    title: "Showroom Moderne",
    description: "Visitez notre espace d'exposition de 500m² pour découvrir nos créations",
    features: ["Espace 500m²", "Dernières tendances", "Visite gratuite"],
    icon: "🏢",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=500&fit=crop",
    title: "Équipe Experte",
    description: "Plus de 15 ans d'expérience dans l'ameublement et la décoration",
    features: ["15+ ans d'expérience", "Équipe qualifiée", "Formation continue"],
    icon: "👥",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=500&fit=crop",
    title: "Innovation Technologique",
    description: "Nous utilisons les dernières technologies pour créer vos meubles",
    features: ["Outils modernes", "Précision maximale", "Techniques avancées"],
    icon: "⚡",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&h=500&fit=crop",
    title: "Prix Compétitifs",
    description: "Le meilleur rapport qualité-prix du marché marocain",
    features: ["Tarifs transparents", "Devis gratuit", "Facilités de paiement"],
    icon: "💰",
  },
]

export default function AdvantagesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % advantageSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-2xl">
      {advantageSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 transform translate-x-0"
              : index < currentSlide
                ? "opacity-0 transform -translate-x-full"
                : "opacity-0 transform translate-x-full"
          }`}
        >
          <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-2xl p-8 text-gray-800">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{slide.icon}</span>
                <h3 className="text-3xl font-bold text-gray-900">{slide.title}</h3>
              </div>
              <p className="text-lg mb-6 text-gray-700">{slide.description}</p>
              <div className="flex flex-wrap gap-2">
                {slide.features.map((feature, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-amber-500 text-white">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Tab Navigation */}
      <div className="absolute bottom-6 left-8 flex space-x-3">
        {advantageSlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-amber-500 text-white shadow-lg"
                : "bg-gray-800/70 text-white hover:bg-gray-700/80"
            }`}
          >
            <span className="text-lg">{slide.icon}</span>
            <span
              className={`text-sm font-medium transition-all duration-300 ${
                index === currentSlide ? "opacity-100 max-w-xs" : "opacity-0 max-w-0 overflow-hidden"
              }`}
            >
              {slide.title}
            </span>
          </button>
        ))}
      </div>

      {/* Progress Indicators */}
      <div className="absolute top-4 right-4 flex space-x-1">
        {advantageSlides.map((_, index) => (
          <div
            key={index}
            className={`h-1 transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-amber-500" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
