import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

 
const keypair = getKeypairFromEnvironment("SECRET_KEY");

const connection = new Connection(clusterApiUrl("devnet"));

const my_address = new PublicKey(keypair.publicKey)
const my_balance = await connection.getBalance(my_address);

const address = new PublicKey("9j9MQ8dan2hvC8T6JKiLrUV7NAD2KzEopWAX2jyheX57");
const balance = await connection.getBalance(address);
 
console.log(`The balance of the account at my adress ${my_address} is ${my_balance} lamports`);
console.log(`✅ Finished!`);

console.log(`The balance of the account at ${address} is ${balance} lamports`);
console.log(`✅ Finished!`);
