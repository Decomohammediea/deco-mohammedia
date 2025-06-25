"use client"

import { useState, useEffect } from "react"

export interface CartItem {
  id: string
  title: string
  image: string
  description: string
  price: number
  quantity: number
  href: string
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem("deco-cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)
    let newCart: CartItem[]

    if (existingItem) {
      newCart = cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
      )
    } else {
      newCart = [...cart, { ...item, quantity: 1 }]
    }

    setCart(newCart)
    localStorage.setItem("deco-cart", JSON.stringify(newCart))
  }

  const removeFromCart = (id: string) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
    localStorage.setItem("deco-cart", JSON.stringify(newCart))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }

    const newCart = cart.map((item) => (item.id === id ? { ...item, quantity } : item))
    setCart(newCart)
    localStorage.setItem("deco-cart", JSON.stringify(newCart))
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem("deco-cart")
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart,
  }
}
