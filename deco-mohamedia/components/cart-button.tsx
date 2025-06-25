"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart, type CartItem } from "@/hooks/use-cart"

interface CartButtonProps {
  item: Omit<CartItem, "quantity">
  className?: string
}

export default function CartButton({ item, className }: CartButtonProps) {
  const { addToCart } = useCart()

  return (
    <Button onClick={() => addToCart(item)} className={`bg-amber-500 hover:bg-amber-600 text-white ${className}`}>
      <ShoppingCart className="h-4 w-4 mr-2" />
      Ajouter au panier
    </Button>
  )
}
