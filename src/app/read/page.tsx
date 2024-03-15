"use client"
import { ReadContract } from "@/containers/read/ReadContract"
import { useAccount } from "wagmi"
function ReadExample() {
  const { isConnected } = useAccount()
  return (
    <div>
      {isConnected ? (
        <ReadContract />
      ) : (
        <div className="text-center text-2xl my-8">
          Please Connect the Wallet
        </div>
      )}
    </div>
  )
}

export default ReadExample
