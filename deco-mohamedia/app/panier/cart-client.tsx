"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Trash2, Plus, Minus, Phone, Mail } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

export default function CartClient() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingCart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-600 mb-2">Votre panier est vide</h2>
        <p className="text-gray-500 mb-6">Ajoutez des meubles à votre panier pour commencer votre commande.</p>
        <Link href="/">
          <Button className="bg-amber-500 hover:bg-amber-600 text-white">Découvrir nos meubles</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Articles dans votre panier</h2>
          <Button variant="outline" onClick={clearCart} className="text-red-600 border-red-200 hover:bg-red-50">
            <Trash2 className="h-4 w-4 mr-2" />
            Vider le panier
          </Button>
        </div>

        <div className="space-y-4">
          {cart.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                          className="w-16 text-center h-8"
                          min="1"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{item.price * item.quantity} DH</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Supprimer
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <Card className="sticky top-24">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Résumé de la commande</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>{getTotalPrice()} DH</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison</span>
                <span>Gratuite</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>{getTotalPrice()} DH</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                <Phone className="h-4 w-4 mr-2" />
                Commander par téléphone
              </Button>
              <Button variant="outline" className="w-full border-amber-500 text-amber-600 hover:bg-amber-50">
                <Mail className="h-4 w-4 mr-2" />
                Demander un devis
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Nos experts vous contacteront pour finaliser votre commande et organiser la livraison.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
