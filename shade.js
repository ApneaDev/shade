const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	}
	// other commands...
});

client.login(config.token);
// https://discord.com/oauth2/authorize?client_id=769642777314328638&scope=bot
