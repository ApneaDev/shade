const Discord = require('discord.js');
const config = require('./config.json');
const wordlist = require('./wordlist.js').definitions();
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.author.bot) return;

	for (const regex in wordlist) {
		if (message.content.match(new RegExp(regex, 'i'))) {
			wordlist[regex](message);
			return;
		}
	}
})

client.login(config.token);
// https://discord.com/oauth2/authorize?client_id=769642777314328638&scope=bot
