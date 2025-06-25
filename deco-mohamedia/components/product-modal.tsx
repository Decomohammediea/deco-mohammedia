"use client"

import type React from "react"

import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProductModalProps {
  title: string
  image: string
  description: string
  details: string
  features: string[]
  gallery: string[]
  children: React.ReactNode
}

export default function ProductModal({
  title,
  image,
  description,
  details,
  features,
  gallery,
  children,
}: ProductModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-amber-600">{title}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
            <p className="text-gray-700 mb-4">{details}</p>
            <div className="space-y-2">
              <h4 className="font-semibold text-lg">Caractéristiques:</h4>
              <div className="flex flex-wrap gap-2">
                {features.map((feature, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-amber-100 text-amber-800">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Galerie de réalisations:</h4>
            <div className="grid grid-cols-1 gap-4">
              {gallery.map((img, idx) => (
                <div key={idx} className="relative h-32 rounded-lg overflow-hidden">
                  <Image src={img || "/placeholder.svg"} alt={`${title} ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">Demander un devis</Button>
              <Button variant="outline" className="w-full border-amber-500 text-amber-600 hover:bg-amber-50">
                Voir plus de réalisations
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
