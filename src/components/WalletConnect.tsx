import { useAccount, useDisconnect } from 'wagmi';
import { useWeb3Modal } from '@web3modal/react'; 
import { Wallet } from 'lucide-react';

export const WalletConnect = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();

  if (isConnected && address) {
    return (
      <button
        onClick={() => disconnect()}
        className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors"
      >
        <Wallet className="w-5 h-5" />
        <span>{`${address.slice(0, 6)}...${address.slice(-4)}`}</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => open()}
      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      <Wallet className="w-5 h-5" />
      <span>Connect Wallet</span>
    </button>
  );
};
