import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import FavoriteButton from "@/components/favorite-button"
import CartButton from "@/components/cart-button"
import ImageCarousel from "@/components/image-carousel"
import AdvantagesCarousel from "@/components/advantages-carousel"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Image de fond pour toute la page */}
      <div className="fixed inset-0 z-[-1]">
        <Image src="/images/home-bg.jpg" alt="Fond Deco Mohammedia" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Banner Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">BIENVENUE CHEZ DECO MOHAMMEDIA</h1>
          <p className="text-white text-lg mb-8">
            Bienvenue chez DECO MOHAMMEDIA Maroc, votre magasin de mobilier et décoration. Découvrez des meubles
            abordables et des idées d'aménagement intérieur pour des logements et portefeuilles de toutes tailles et
            toutes styles moderne...
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-all hover:tracking-wider">
              Notre menu
            </Button>
            <Link href="/commande">
              <Button
                variant="outline"
                className="bg-blue-800 text-white border-blue-800 hover:bg-blue-900 px-6 py-2 rounded-md transition-all hover:tracking-wider"
              >
                Commande
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-orange-500">A</span> propos de nous
              </h2>
              <p className="text-gray-700">
                Chez deco mohammedia, nous concevons et fabriquons des meubles modernes, fonctionnels et accessibles
                pour tous les espaces de vie. Spécialisés dans l'ameublement sur mesure, nous proposons une large gamme
                de cuisines, chambres, dressings, placards, et meubles TV adaptés à tous les styles. Notre mission est
                de transformer votre intérieur en un lieu pratique, esthétique et chaleureux, avec des solutions
                innovantes et personnalisées.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="À propos de Deco Mohammedia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-orange-500">M</span>enu
            </h2>
            <p className="max-w-3xl mx-auto text-gray-700">
              Nous vous proposons une large gamme de meubles modernes, fonctionnels et sur mesure pour répondre à tous
              vos besoins d'aménagement intérieur. Cliquez sur chaque catégorie pour découvrir nos réalisations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "cuisines",
                title: "Cuisines",
                href: "/cuisines",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=350&h=300&fit=crop",
                description: "Cuisines modernes et fonctionnelles sur mesure",
                price: 15000,
              },
              {
                id: "chambres",
                title: "Chambre à coucher",
                href: "/chambres",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=350&h=300&fit=crop",
                description: "Chambres élégantes et confortables",
                price: 12000,
              },
              {
                id: "dressings",
                title: "Dressing",
                href: "/dressings",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=350&h=300&fit=crop",
                description: "Dressings organisés et stylés",
                price: 8000,
              },
              {
                id: "meubles-tv",
                title: "Meuble TV",
                href: "/meubles-tv",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=350&h=300&fit=crop",
                description: "Meubles TV design et pratiques",
                price: 3500,
              },
              {
                id: "bibliotheques",
                title: "Bibliothèque",
                href: "/bibliotheques",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=350&h=300&fit=crop",
                description: "Bibliothèques élégantes et fonctionnelles",
                price: 4500,
              },
              {
                id: "placards",
                title: "Placard",
                href: "/placards",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=350&h=300&fit=crop",
                description: "Placards sur mesure et optimisés",
                price: 6000,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-gray-200 transition-transform hover:scale-105"
              >
                <div className="relative h-64">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute top-2 right-2">
                    <FavoriteButton
                      item={{
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        description: item.description,
                        href: item.href,
                      }}
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-orange-600">À partir de {item.price} DH</span>
                  </div>
                  <div className="flex gap-2">
                    <Link href={item.href} className="flex-1">
                      <Button variant="outline" className="w-full text-orange-600 border-orange-600 hover:bg-orange-50">
                        Voir détails
                      </Button>
                    </Link>
                    <CartButton
                      item={{
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        description: item.description,
                        price: item.price,
                        href: item.href,
                      }}
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-all hover:tracking-wider">
              Voir notre catalogue complet
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Carousel Section */}
      <section id="advantages" className="py-20 px-4 bg-white/85 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              <span className="text-orange-500">Nos</span> Avantages
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Découvrez ce qui fait la différence chez Deco Mohammedia à travers notre galerie interactive
            </p>
          </div>
          <AdvantagesCarousel />
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-20 px-4 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-orange-500">D</span>écouvrez Notre Univers
            </h2>
            <p className="max-w-3xl mx-auto text-gray-700">
              Plongez dans l'univers Deco Mohammedia et découvrez nos espaces, notre savoir-faire et nos réalisations
            </p>
          </div>
          <ImageCarousel />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Que disent nos <span className="text-orange-500">c</span>lients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "J'ai commandé une cuisine sur mesure chez vous et le résultat a dépassé mes attentes. Finitions impeccables, matériaux de qualité et service très professionnel. Merci pour ce beau travail !",
                name: "Samira B.",
              },
              {
                text: "Le dressing que j'ai reçu est à la fois pratique et élégant. Tout a été parfaitement installé, et le rendu est exactement comme je l'imaginais. Je recommande vivement.",
                name: "Yassine M.",
              },
              {
                text: "Nous avons aménagé toute notre chambre avec vos meubles. Qualité top, design moderne et surtout un excellent rapport qualité-prix. On est vraiment satisfaits !",
                name: "Khadija E.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=80&width=80`}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <h3 className="text-orange-500 font-semibold text-center">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white/85 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-orange-500">C</span>ontact
            </h2>
          </div>

          <div className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Envoyer un message</h3>
            <form className="space-y-4">
              <div>
                <Input type="text" placeholder="Nom" className="w-full" />
              </div>
              <div>
                <Input type="email" placeholder="Email" className="w-full" />
              </div>
              <div>
                <Textarea placeholder="Message" className="w-full min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-200 text-center bg-white/90 backdrop-blur-sm">
        <p className="text-gray-600">
          © 2025{" "}
          <Link href="/" className="text-orange-500 font-semibold">
            Deco Mohammedia
          </Link>
        </p>
      </footer>
    </main>
  )
}
