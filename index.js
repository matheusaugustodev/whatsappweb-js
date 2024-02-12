const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client();

// client.on('qr', (qr) => {
//     console.log('QR RECEIVED', qr);
// });

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});
client.on('message', message => {
	console.log(`${message.from}: ${message.body}`);
	
        message.reply(`Fala chefe! Você me enviou isso: ${message.body}`);
});

 
client.initialize();
