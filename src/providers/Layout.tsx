import React from "react"
import Navbar from "@/components/shared/Navbar"
import { Toaster } from "@/components/ui/sonner"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mx-12 my-8 ">{children}</main>
      <Toaster richColors />
    </>
  )
}

export default Layout
