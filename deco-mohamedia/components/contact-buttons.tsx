"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

interface ContactButtonsProps {
  phoneNumber?: string
  email?: string
  subject?: string
  className?: string
}

export default function ContactButtons({
  phoneNumber = "+212661528654",
  email = "contact@decomohammedia.ma",
  subject = "Demande de devis",
  className = "",
}: ContactButtonsProps) {
  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  const handleEmailRequest = () => {
    const emailSubject = encodeURIComponent(subject)
    const emailBody = encodeURIComponent(
      "Bonjour,\n\nJe souhaite obtenir un devis pour un projet d'ameublement.\n\nMerci de me recontacter.\n\nCordialement",
    )
    window.location.href = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`
  }

  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      <Button onClick={handlePhoneCall} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg">
        <Phone className="mr-2 h-5 w-5" />
        Appeler maintenant
      </Button>
      <Button
        onClick={handleEmailRequest}
        variant="outline"
        className="border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg"
      >
        <Mail className="mr-2 h-5 w-5" />
        Demander un devis
      </Button>
    </div>
  )
}
