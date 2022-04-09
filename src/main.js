const { Client, Intents } = require('discord.js');
require("dotenv").config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const compliments = ["Your hair doesn't look as bad as usual today",
    "Being short is not as bad as you think it is", "Having friends is overrated",
    "Maggie is kind of cool sometimes", "Today is going to be a great day",
    "You have really nice teeth", "Your breath doesn't smell as bad as it usually does",
    "You don't look nearly as badly as normal after you shower",
    "Maggie is kind of decent at baking"];

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