import {
    getDefaultConfig,
    Chain
  } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
  const lisk = {
    id: 4202,
    name: 'Lisk Sepolia Testnet',
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: { http: ['https://rpc.sepolia-api.lisk.com/'] },
    },
    blockExplorers: {
      default: { name: 'Blockscout', url: 'https://sepolia-blockscout.lisk.com/' },
    },
    contracts: {
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
      },
    },
    testnet: true
  } as const satisfies Chain;  
  
 export const config = getDefaultConfig({
    appName: 'Lemon Protocol',
    projectId: 'f45df3980321bc25ba5c9563f91923e6',
    chains: [lisk],
    transports: {
      [lisk.id]: http(),
    },
  });