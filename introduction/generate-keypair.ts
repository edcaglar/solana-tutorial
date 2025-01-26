import { Keypair } from "@solana/web3.js";
import fs from 'fs';
import path from 'path';

// Generate a new Solana keypair
const keypair = Keypair.generate();

const newKeyData = {
  publicKey: keypair.publicKey,
  secretKey: Buffer.from(keypair.secretKey).toString('base64')
};

const filename = 'solana-keys.json';

// Check if the file exists
if (!fs.existsSync(filename)) {
  // If the file does not exist, create it with an empty array
  fs.writeFileSync(filename, JSON.stringify([], null, 2));
}

// Read the file content
const fileContent = fs.readFileSync(filename, 'utf-8');

// Parse the file content to JSON
const contentJson = JSON.parse(fileContent);

// Add the new key data to the array
contentJson.push(newKeyData);

// Write the updated content back to the file
fs.writeFileSync(filename, JSON.stringify(contentJson, null, 2));

console.log('New keypair added successfully:');
console.log(`Public Key: ${newKeyData.publicKey}`);