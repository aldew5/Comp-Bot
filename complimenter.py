import discord
import os
from dotenv import load_dotenv
import random

load_dotenv()
client = discord.Client()

compliments = ["You look slighly better than subpar today", 
"You're not as short as you think"]

@client.event
async def on_ready():
    print("Logged in as {0.user}".format(client))


@client.event
async def on_message(message):
    if (message.author == client.user):
        return

    if (message.content.startswith("!compliment")):
        await message.channel.send(compliments[random.randint(0, 1)])

client.run(os.getenv("TOKEN"))

