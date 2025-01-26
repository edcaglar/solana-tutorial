import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

 
const keypair = getKeypairFromEnvironment("SECRET_KEY");

const connection = new Connection(clusterApiUrl("devnet"));

const my_address = new PublicKey(keypair.publicKey)
const my_balance = await connection.getBalance(my_address);

console.log(`The balance of the account at my adress ${my_address} is ${my_balance / LAMPORTS_PER_SOL} sols`);
console.log(`✅ Finished!`);

