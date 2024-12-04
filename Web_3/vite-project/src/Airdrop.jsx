import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React from 'react'

export default function Airdrop() {

    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendAirDropToUser(){
        const amount = document.getElementById("publicKey").value;
        await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
        alert("airdropped sol")
    }
    
  return (
    <div>
      <input id='publicKey' type="text" placeholder='Amount'/>
      <button onClick={sendAirDropToUser}>Send Airdrops</button>
    </div>
  )
}
