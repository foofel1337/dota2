require("dotenv").config();
const telebot = require('telebot');
const fs = require('fs');
const bot = new telebot(process.env.TOKEN);

bot.on('/start', (msg) => msg.reply.text('че надо гремлин'));

bot.on('/collections', (msg) => {
	msg.reply.photo('col1.png'); 
	msg.reply.text('Лабиринт Аганима 2021: Ageless Heirlooms');
});

bot.on('start', (msg) => {
	loadCollections();	
});


// opening

bot.on('/openaghanim1', (msg) =>
	let drop = 0;
	msg.reply.text("you got " + drop);
});

bot.start();
