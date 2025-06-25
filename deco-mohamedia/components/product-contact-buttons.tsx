"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

interface ProductContactButtonsProps {
  productType: string
  color?: string
  phoneNumber?: string
  email?: string
}

export default function ProductContactButtons({
  productType,
  color = "amber",
  phoneNumber = "+212661528654",
  email = "contact@decomohammedia.ma",
}: ProductContactButtonsProps) {
  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  const handleEmailRequest = () => {
    const emailSubject = encodeURIComponent(`Demande de devis - ${productType}`)
    const emailBody = encodeURIComponent(
      `Bonjour,\n\nJe souhaite obtenir un devis pour ${productType}.\n\nPouvez-vous me recontacter pour discuter de mon projet ?\n\nMerci,\nCordialement`,
    )
    window.location.href = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`
  }

  const getColorClasses = (color: string) => {
    const colors = {
      amber: {
        primary: "bg-amber-500 hover:bg-amber-600",
        outline: "border-amber-500 text-amber-600 hover:bg-amber-50",
      },
      blue: {
        primary: "bg-blue-500 hover:bg-blue-600",
        outline: "border-blue-500 text-blue-600 hover:bg-blue-50",
      },
      purple: {
        primary: "bg-purple-500 hover:bg-purple-600",
        outline: "border-purple-500 text-purple-600 hover:bg-purple-50",
      },
      green: {
        primary: "bg-green-500 hover:bg-green-600",
        outline: "border-green-500 text-green-600 hover:bg-green-50",
      },
      indigo: {
        primary: "bg-indigo-500 hover:bg-indigo-600",
        outline: "border-indigo-500 text-indigo-600 hover:bg-indigo-50",
      },
      red: {
        primary: "bg-red-500 hover:bg-red-600",
        outline: "border-red-500 text-red-600 hover:bg-red-50",
      },
    }
    return colors[color as keyof typeof colors] || colors.amber
  }

  const colorClasses = getColorClasses(color)

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button onClick={handlePhoneCall} className={`${colorClasses.primary} text-white px-8 py-3 text-lg`}>
        <Phone className="mr-2 h-5 w-5" />
        Appeler maintenant
      </Button>
      <Button onClick={handleEmailRequest} variant="outline" className={`${colorClasses.outline} px-8 py-3 text-lg`}>
        <Mail className="mr-2 h-5 w-5" />
        Demander un devis
      </Button>
    </div>
  )
}
