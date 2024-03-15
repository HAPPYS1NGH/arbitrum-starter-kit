import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@rainbow-me/rainbowkit/styles.css"
import "./globals.css"
import Web3Provider from "@/providers/Providers"
import Navbar from "@/components/shared/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Arbitrum DApp",
  description: "Template for creating a DApp on Arbitrum",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3Provider>
          <Navbar />
          <main className="mx-12 my-8 ">{children}</main>
        </Web3Provider>
      </body>
    </html>
  )
}
