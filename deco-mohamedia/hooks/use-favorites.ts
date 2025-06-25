"use client"

import { useState, useEffect } from "react"

export interface FavoriteItem {
  id: string
  title: string
  image: string
  description: string
  href: string
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([])

  useEffect(() => {
    const savedFavorites = localStorage.getItem("deco-favorites")
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  const addToFavorites = (item: FavoriteItem) => {
    const newFavorites = [...favorites, item]
    setFavorites(newFavorites)
    localStorage.setItem("deco-favorites", JSON.stringify(newFavorites))
  }

  const removeFromFavorites = (id: string) => {
    const newFavorites = favorites.filter((item) => item.id !== id)
    setFavorites(newFavorites)
    localStorage.setItem("deco-favorites", JSON.stringify(newFavorites))
  }

  const isFavorite = (id: string) => {
    return favorites.some((item) => item.id === id)
  }

  const toggleFavorite = (item: FavoriteItem) => {
    if (isFavorite(item.id)) {
      removeFromFavorites(item.id)
    } else {
      addToFavorites(item)
    }
  }

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite,
  }
}
