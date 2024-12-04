import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletConnectButton, WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import "@solana/wallet-adapter-react-ui/styles.css"
import React from 'react'
import Airdrop from './Airdrop'

export default function App() {
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/A9XLJSRRy8E-CIW1AeJRKIBy_zpeLu8W"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton></WalletMultiButton>
          <WalletDisconnectButton></WalletDisconnectButton>
          <Airdrop />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
