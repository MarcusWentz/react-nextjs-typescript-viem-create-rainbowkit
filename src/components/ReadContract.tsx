import { useAccount, useReadContract } from 'wagmi'
import { simpleStorageAbi } from '../contracts/simpleStorage'

function ReadContract() {
  const { address } = useAccount()

  // Wagmi hook useReadContract()
  const { data, isLoading } = useReadContract({
    address: "0xeD62F27e9e886A27510Dc491F5530996719cEd3d",
    abi: simpleStorageAbi,
    functionName: 'storedData',
    // args: [address!],
    // query: {
    //   enabled: !!address,
    // },
  })

  if (!address) return <p>Connect wallet</p>
  if (isLoading) return <p>Loading...</p>

  // return <p>Balance: {data?.toString()}</p>
  return <p>{data?.toString()}</p>
}

export default ReadContract