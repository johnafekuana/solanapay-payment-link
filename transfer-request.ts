import { clusterApiUrl, Connection, PublicKey, Keypair } from '@solana/web3.js';
import { encodeURL } from '@solana/pay';
import BigNumber from 'bignumber.js';

const createPaymentLink = async () => {
    // Create connection to devnet
    console.log('✅ Connection to network established');
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    // Customer details upon checkout
    const recipient = new PublicKey('4hvFcm1EHpn5zgM9ZU59dYd1sucjGPgGGNWdunHMnYYa');
    const amount = new BigNumber(20);
    const reference = new Keypair().publicKey;
    const label = 'Naija Jollof';
    const message = 'Naija Jollof Restaurant - your order - #001234';
    const memo = 'NJ#000';

    // Create a payment request link
    console.log('💰 Creating a payment request link');
    const url = encodeURL({ recipient, amount, reference, label, message, memo });

    console.log(`Payment Link: ${url}`);
    return url;
};

//calling createPaymentLink() to generate new payment link
createPaymentLink();




// createPaymentLink().then((paymentLink) => {
    
// });
