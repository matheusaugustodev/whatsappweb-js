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
    if(message.from === '556299105013@c.us' || message.from === '5562986306799@c.us' || message.from === '556286306799@c.us' 
    || message.from === '556292671567@c.us'
    || message.from === '5562992671567@c.us') {
		// client.sendMessage(message.from, 'Eae Pedro');
        message.reply(`Fala chefe! Você me enviou isso: ${message.body}`);
	}
});

 
client.initialize();
