import Link from "next/link"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import CartClient from "./cart-client"

export default function PanierPage() {
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
            <ShoppingCart className="h-8 w-8" />
            <h1 className="text-4xl md:text-5xl font-bold">Mon Panier</h1>
          </div>
          <p className="text-xl max-w-2xl">Finalisez votre commande et transformez votre intérieur.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <CartClient />
      </div>
    </div>
  )
}
