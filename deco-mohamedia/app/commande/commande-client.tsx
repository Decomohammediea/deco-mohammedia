"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Phone, Mail } from "lucide-react"

interface FormData {
  // Informations personnelles
  nom: string
  prenom: string
  telephone: string
  email: string
  adresse: string
  ville: string

  // Détails de la commande
  typeCommande: string
  budget: string
  delai: string
  description: string
  dimensions: string

  // Services additionnels
  services: string[]

  // Préférences de contact
  contactPreference: string
}

const initialFormData: FormData = {
  nom: "",
  prenom: "",
  telephone: "",
  email: "",
  adresse: "",
  ville: "",
  typeCommande: "",
  budget: "",
  delai: "",
  description: "",
  dimensions: "",
  services: [],
  contactPreference: "telephone",
}

export default function CommandeClient() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked ? [...prev.services, service] : prev.services.filter((s) => s !== service),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="text-center p-8">
        <CardContent className="pt-6">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-600 mb-2">Commande Envoyée !</h2>
          <p className="text-gray-600 mb-6">
            Merci pour votre commande. Notre équipe vous contactera dans les 24h pour discuter de votre projet.
          </p>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="text-sm text-green-700">
              <strong>Numéro de référence :</strong> CMD-{Date.now().toString().slice(-6)}
            </p>
          </div>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setFormData(initialFormData)
            }}
            className="mt-4"
            variant="outline"
          >
            Nouvelle commande
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Informations personnelles */}
      <Card>
        <CardHeader>
          <CardTitle>Informations personnelles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="prenom">Prénom *</Label>
              <Input
                id="prenom"
                value={formData.prenom}
                onChange={(e) => handleInputChange("prenom", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="nom">Nom *</Label>
              <Input
                id="nom"
                value={formData.nom}
                onChange={(e) => handleInputChange("nom", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="telephone">Téléphone *</Label>
              <Input
                id="telephone"
                type="tel"
                value={formData.telephone}
                onChange={(e) => handleInputChange("telephone", e.target.value)}
                placeholder="+212 6XX XXX XXX"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="adresse">Adresse</Label>
            <Input
              id="adresse"
              value={formData.adresse}
              onChange={(e) => handleInputChange("adresse", e.target.value)}
              placeholder="Rue, quartier..."
            />
          </div>

          <div>
            <Label htmlFor="ville">Ville *</Label>
            <Select onValueChange={(value) => handleInputChange("ville", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez votre ville" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mohammedia">Mohammedia</SelectItem>
                <SelectItem value="casablanca">Casablanca</SelectItem>
                <SelectItem value="rabat">Rabat</SelectItem>
                <SelectItem value="temara">Témara</SelectItem>
                <SelectItem value="sale">Salé</SelectItem>
                <SelectItem value="autre">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Détails de la commande */}
      <Card>
        <CardHeader>
          <CardTitle>Détails de votre commande</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="typeCommande">Type de meuble *</Label>
            <Select onValueChange={(value) => handleInputChange("typeCommande", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Que souhaitez-vous commander ?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cuisine">Cuisine complète</SelectItem>
                <SelectItem value="chambre">Chambre à coucher</SelectItem>
                <SelectItem value="dressing">Dressing</SelectItem>
                <SelectItem value="meuble-tv">Meuble TV</SelectItem>
                <SelectItem value="bibliotheque">Bibliothèque</SelectItem>
                <SelectItem value="placard">Placard</SelectItem>
                <SelectItem value="sur-mesure">Projet sur mesure</SelectItem>
                <SelectItem value="renovation">Rénovation complète</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="budget">Budget approximatif *</Label>
            <Select onValueChange={(value) => handleInputChange("budget", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Quel est votre budget ?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="moins-5000">Moins de 5 000 DH</SelectItem>
                <SelectItem value="5000-10000">5 000 - 10 000 DH</SelectItem>
                <SelectItem value="10000-20000">10 000 - 20 000 DH</SelectItem>
                <SelectItem value="20000-50000">20 000 - 50 000 DH</SelectItem>
                <SelectItem value="plus-50000">Plus de 50 000 DH</SelectItem>
                <SelectItem value="a-discuter">À discuter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="delai">Délai souhaité</Label>
            <Select onValueChange={(value) => handleInputChange("delai", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Quand souhaitez-vous recevoir votre commande ?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="urgent">Urgent (moins de 2 semaines)</SelectItem>
                <SelectItem value="1-mois">Dans le mois</SelectItem>
                <SelectItem value="2-mois">Dans les 2 mois</SelectItem>
                <SelectItem value="3-mois">Dans les 3 mois</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="dimensions">Dimensions de l'espace</Label>
            <Input
              id="dimensions"
              value={formData.dimensions}
              onChange={(e) => handleInputChange("dimensions", e.target.value)}
              placeholder="Ex: 3m x 2.5m x 2.4m (hauteur)"
            />
          </div>

          <div>
            <Label htmlFor="description">Description détaillée de votre projet *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Décrivez votre projet, vos besoins, vos préférences de style, couleurs, matériaux..."
              className="min-h-[120px]"
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Services additionnels */}
      <Card>
        <CardHeader>
          <CardTitle>Services additionnels</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { id: "conception-3d", label: "Conception 3D", description: "Visualisation de votre projet" },
              { id: "livraison", label: "Livraison", description: "Transport jusqu'à chez vous" },
              { id: "installation", label: "Installation", description: "Montage par nos équipes" },
              { id: "prise-mesures", label: "Prise de mesures", description: "Visite technique gratuite" },
              { id: "conseil-deco", label: "Conseil décoration", description: "Accompagnement design" },
            ].map((service) => (
              <div key={service.id} className="flex items-start space-x-3">
                <Checkbox
                  id={service.id}
                  checked={formData.services.includes(service.id)}
                  onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                />
                <div className="flex-1">
                  <Label htmlFor={service.id} className="font-medium">
                    {service.label}
                  </Label>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Préférence de contact */}
      <Card>
        <CardHeader>
          <CardTitle>Comment souhaitez-vous être contacté ?</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={formData.contactPreference}
            onValueChange={(value) => handleInputChange("contactPreference", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="telephone" id="contact-phone" />
              <Label htmlFor="contact-phone" className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Par téléphone
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="contact-email" />
              <Label htmlFor="contact-email" className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                Par email
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <Card>
        <CardContent className="pt-6">
          <Button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer ma commande"}
          </Button>
          <p className="text-sm text-gray-500 text-center mt-3">
            En envoyant ce formulaire, vous acceptez d'être contacté par notre équipe pour discuter de votre projet.
          </p>
        </CardContent>
      </Card>
    </form>
  )
}
