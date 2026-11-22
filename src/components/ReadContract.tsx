import { useAccount, useReadContract } from 'wagmi'
import { erc20Abi } from '../contracts/erc20'

function ReadContract() {
  const { address } = useAccount()

  // Wagmi hook useReadContract()
  const { data, isLoading } = useReadContract({
    address: "0xE4aB69C077896252FAFBD49EFD26B5D171A32410",
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [address!],
    query: {
      enabled: !!address,
    },
  })

  if (!address) return <p>Connect wallet</p>
  if (isLoading) return <p>Loading...</p>

  return <p>Balance: {data?.toString()}</p>
}

export default ReadContract