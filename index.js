const { Telegraf } = require("telegraf");
const inventoryManager = require('./inventory.js');
require("dotenv").config();
const fs = require("fs");

let inventory = []

const bot = new Telegraf(process.env.TOKEN);

bot.command("start", (ctx) => {
	ctx.reply("здароу")
}) 


bot.command("openaghanim1", (ctx) => {
	fs.readFile("./drops.json", (err, jsonString) => {
		if (err) {
			console.log(err);
		}

		try {
			let drops = JSON.parse(jsonString)
			let drop = drops[Math.floor(Math.random() * 7)]
			ctx.reply("ты получил " + drop.name + "\n/inv");
			inventoryManager.writeToInv(inventory, drop.name);
		} catch (err) {
			console.log(err);
		}
	})
})

bot.command("inv", (ctx) => {
	ctx.reply(inventory);
})

bot.launch()
console.log("poehali")