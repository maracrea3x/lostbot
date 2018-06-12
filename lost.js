const Discord = require('https://discordapp.com/api/guilds/446488093890052099/widget.json');
const client = new Discord.Client('https://discordapp.com/api/guilds/456117918888099852/widget.json');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
