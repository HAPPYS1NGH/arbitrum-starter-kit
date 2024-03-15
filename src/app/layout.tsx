import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@rainbow-me/rainbowkit/styles.css"
import "./globals.css"
import Web3Provider from "@/providers/Web3Provider"
import Layout from "@/providers/Layout"

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
          <Layout>{children}</Layout>
        </Web3Provider>
      </body>
    </html>
  )
}
