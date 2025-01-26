import { Connection, clusterApiUrl, LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";
import "dotenv/config"
import fs from 'fs';
import { airdropIfRequired, getKeypairFromEnvironment } from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"));

const filename = "solana-keys.json";
const fileContent = fs.readFileSync(filename);
const jsonContent = JSON.parse(fileContent, 'utf-8');

const keypair = jsonContent[0];
const pk = new PublicKey(keypair.publicKey);

const old_balance = await connection.getBalance(pk); 
console.log("Old balance: ", old_balance / LAMPORTS_PER_SOL);

const airdrop = await airdropIfRequired(
    connection,
    pk,
    1 * LAMPORTS_PER_SOL,
    0.5 * LAMPORTS_PER_SOL,
  );

const new_balance = await connection.getBalance(pk); 
console.log("Airdrop Log", airdrop)
console.log("New balance: ", new_balance / LAMPORTS_PER_SOL);


