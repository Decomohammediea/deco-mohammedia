import Link from "next/link"
import { ArrowLeft, ShoppingBag, Phone, Mail, MapPin } from "lucide-react"
import CommandeClient from "./commande-client"

export default function CommandePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-white hover:text-amber-200 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <ShoppingBag className="h-8 w-8" />
            <h1 className="text-4xl md:text-5xl font-bold">Passer Commande</h1>
          </div>
          <p className="text-xl max-w-2xl">
            Commandez vos meubles sur mesure en quelques clics. Notre équipe vous contactera pour finaliser votre
            projet.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <CommandeClient />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Besoin d'aide ?</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-amber-500 mt-1" />
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <p className="text-gray-600">+212 661 52 86 54</p>
                    <p className="text-sm text-gray-500">Lun-Sam: 9h-18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-amber-500 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">contact@decomohammedia.ma</p>
                    <p className="text-sm text-gray-500">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-amber-500 mt-1" />
                  <div>
                    <p className="font-semibold">Showroom</p>
                    <p className="text-gray-600">Avenue Mohammed V</p>
                    <p className="text-gray-600">Mohammedia, Maroc</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">💡 Conseil</h4>
                <p className="text-sm text-amber-700">
                  Pour un devis plus précis, n'hésitez pas à nous envoyer des photos de votre espace et vos dimensions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
