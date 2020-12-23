const StellarSdk = require('stellar-sdk')

const pair = StellarSdk.Keypair.random()
const s = pair.secret()
const p = pair.publicKey()

console.log('s', s)
console.log('p', p)

