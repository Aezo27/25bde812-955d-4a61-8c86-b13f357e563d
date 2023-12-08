import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Rama Sullivan - CRUD For Product",
  description:
    "Hello, I'm Rama, I created this project with the aim of completing a task from Ambisius Lab for a job vacancy as a Full-time Software Engineer.",
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
  authors: [
    {
      name: "Rama Sullivan",
      url: "http://localhost:3000",
    },
  ],
  openGraph: {
    title: "CRUD For Product",
    description:
      "Hello, I'm Rama, I created this project with the aim of completing a task from Ambisius Lab for a job vacancy as a Full-time Software Engineer.",
    images: "/thumb.png",
    url: "http://localhost:3000",
  },
  keywords: [
    "CRUD",
    "Ambisus Lab",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
