//Encryption

//hash&hmac
// const Crypto = require('crypto');
// const Secret ='abcdefg';

// const hash =Crypto.createHmac('Sha256',Secret)
// .update('Welocome')
// .digest('hex')
// console.log(hash);


// //using cipher
// const Crypto = require('crypto');
// const Cipher =Crypto.createCipher('aes192', 'apassword');
// var encrypted =Cipher.update('Hello','utf8','hex');
// encrypted  =Cipher.final('hex');
// console.log(encrypted);


//Decryption
// const Crypto =require('crypto');
// const dechiper = Crypto.createDecipher('aes192', 'apassword');

// var encrypted ='4ce3b761dd58398aed30d5af898906531743dgc7d7502e781e83c';
// var decrypted = dechiper.update(encrypted,'hex','utf8');
//  decrypted  =dechiper.final('utf8');
//  console.log(decrypted);