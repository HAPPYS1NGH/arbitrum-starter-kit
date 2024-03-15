"use client"
import * as React from "react"
import { useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi"
import { toast } from "sonner"

export function WriteContract() {
  const { data: hash, isPending, writeContract } = useWriteContract()

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const tokenId = formData.get("value") as string
    console.log(tokenId)
    writeContract({
      address: "0x3e9C748E9DBB864Ee4dE65FA16343Cde878DF7D0",
      abi: [
        {
          constant: false,
          inputs: [
            {
              name: "num",
              type: "uint256",
            },
          ],
          name: "store",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "retrieve",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
      ],
      functionName: "store",
      args: [BigInt(tokenId)],
    })
  }

  const {
    isLoading: isConfirming,
    error,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    if (isConfirmed) {
      toast.success("Transaction Successful")
    }
    if (error) {
      toast.error("Transaction Failed")
    }
  }, [isConfirmed, error])

  return (
    <form onSubmit={submit}>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input name="value" placeholder="5" required />
        <Button disabled={isPending} type="submit">
          {isPending ? "Confirming..." : "Mint"}
        </Button>
      </div>
    </form>
  )
}
