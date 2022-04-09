const { Client, Intents } = require('discord.js');
require("dotenv").config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const compliments = ["Your hair doesn't look as bad as usual today", 
"Being short is not as bad as you think it is", "Having friends is overrated"]

client.on('ready', () => {
    console.log(`Logged in...`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) {
        return;
    }
    const { commandName } = interaction;

    if (commandName === 'compliment') {
        await interaction.reply(compliments[Math.floor(Math.random() * compliments.length)]);
    }
});

client.login(process.env.TOKEN);