import { useState } from 'react'
import { useWriteContract } from 'wagmi'
import { simpleStorageAbi } from '../contracts/simpleStorage'

const abi = simpleStorageAbi

export default function SetNumber() {

  const [inputNumber, setNumber] = useState('0')

  const {
    writeContract,
    data: hash,
    isPending,
    isSuccess,
    error,
  } = useWriteContract()

  const handleClick = () => {
    writeContract({
      address: "0xeD62F27e9e886A27510Dc491F5530996719cEd3d",
      abi,
      functionName: 'set',
      args: [BigInt(inputNumber)],
    })
  }

  return (
    <div>
      <h2>Update Smart Contract</h2>

      <div>
        <input
          type="number"
          min="0"
          value={inputNumber}
          onChange={(e) => setNumber(e.target.value)}
        />
      
        <br />
      
        <button
          onClick={handleClick}
          disabled={isPending}
          className="button buttonHighContrast"
        >
        {isPending ? 'Submitting...' : 'Set Number'}
        </button>
      </div>

      {isSuccess && <p>Transaction submitted!</p>}

      {hash && <p>Transaction Hash: {hash}</p>}

      {error && <p>Error: {error.message}</p>}

      <style>{`
        input[type="number"] {
          appearance: textfield;
          -moz-appearance: textfield;
        }
      
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `}</style>
      
    </div>
  )
}