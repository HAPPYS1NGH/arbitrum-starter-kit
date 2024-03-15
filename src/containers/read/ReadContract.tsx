"use client"
import { useReadContract, useAccount } from "wagmi"

export function ReadContract() {
  const { address } = useAccount()
  const {
    data: balance,
    status,
    isLoading,
    error,
  } = useReadContract({
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
    address: "0x3e9C748E9DBB864Ee4dE65FA16343Cde878DF7D0",
    functionName: "retrieve",
  })
  console.log(balance, status, isLoading, error)

  return (
    <div>
      {isLoading ? <div>Loading</div> : <p>Balance: {balance?.toString()}</p>}
    </div>
  )
}
