import React from "react"
import Link from "next/link"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const Navbar = () => {
  return (
    <nav className="flex items-center mx-12 my-8">
      <div className="flex space-x-4 ">
        <Link href="/" className="text-gray-900 hover:text-gray-700">
          Home
        </Link>
        <Link href="/read" className="text-gray-900 hover:text-gray-700">
          Read Contract
        </Link>
        <Link href="/write" className="text-gray-900 hover:text-gray-700">
          Write Contract
        </Link>
      </div>
      <div className="ml-auto flex items-center ">
        <ConnectButton />
      </div>
    </nav>
  )
}

export default Navbar
