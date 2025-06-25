import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Deco Mohammedia - Meubles et Décoration",
  description:
    "Votre magasin de mobilier et décoration au Maroc. Découvrez des meubles abordables et des idées d'aménagement intérieur.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <div className="pt-20">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
