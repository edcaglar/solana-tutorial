import {
    Connection,
    PublicKey,
    clusterApiUrl,
    LAMPORTS_PER_SOL,
  } from "@solana/web3.js";
   
  const connection = new Connection(clusterApiUrl("devnet"));
  const address = new PublicKey("9j9MQ8dan2hvC8T6JKiLrUV7NAD2KzEopWAX2jyheX57");
  const balance = await connection.getBalance(address);
  const balanceInSol = balance / LAMPORTS_PER_SOL;
   
  console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`);
  console.log(`✅ Finished!`);