import { clusterApiUrl, Connection, PublicKey, Keypair } from '@solana/web3.js';
import { encodeURL } from '@solana/pay';
import BigNumber from 'bignumber.js';

const createPaymentLink = async () => {
    // Create connection to devnet
    console.log('✅ Connection to network established');
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    // Customer details upon checkout
    const recipient = new PublicKey('4hvFcm1EHpn5zgM9ZU59dYd1sucjGPgGGNWdunHMnYYa');
    const amount =  new BigNumber(100);
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

//invoking createPaymentLink function to generate new payment link
createPaymentLink();

//example of link generated based on the recipient/merchant public address and
//the customer details upon checkout

//Payment Link: solana:4hvFcm1EHpn5zgM9ZU59dYd1sucjGPgGGNWdunHMnYYa?amount=100&reference=BhtjregtXxdv6KZ7ZRQtRhkfjLHRfbq2Dc5EzjxZxuXD&label=Naija+Jollof&message=Naija+Jollof+Restaurant+-+your+order+-+%23001234&memo=NJ%23000




// createPaymentLink().then((paymentLink) => {
    
// });
