"use client"

import { WriteContract } from "@/containers/write/WriteContract"
import { useAccount } from "wagmi"
function WriteExample() {
  const { isConnected } = useAccount()
  return (
    <div>
      {isConnected ? (
        <WriteContract />
      ) : (
        <div className="text-center text-2xl my-8">
          Please Connect the Wallet
        </div>
      )}
    </div>
  )
}

export default WriteExample
