import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL} from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

 

const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");

const address = new PublicKey("")
const balance_in_lamports = await connection.getBalance(address);
const sol_balance = balance_in_lamports / LAMPORTS_PER_SOL

console.log(`The balance of the account at ${address} is ${sol_balance} sols`);
console.log(`✅ Finished!`);