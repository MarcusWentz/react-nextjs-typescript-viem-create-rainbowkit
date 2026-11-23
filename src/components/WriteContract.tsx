
import { useWriteContract } from 'wagmi'
import { simpleStorageAbi } from '../contracts/simpleStorage'

const abi = simpleStorageAbi

export default function SetNumber() {
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
      args: [1n],
    })
  }

  return (
    <div>
      <h2>Update Smart Contract</h2>

      <button
        onClick={handleClick}
        disabled={isPending}
        className="button buttonHighContrast"
      >
        {isPending ? 'Submitting...' : 'Set Number'}
      </button>

      {isSuccess && <p>Transaction submitted!</p>}

      {hash && <p>Transaction Hash: {hash}</p>}

      {error && <p>Error: {error.message}</p>}
    </div>
  )
}