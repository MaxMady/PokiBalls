
const { Client, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const client = new Client({ intents: 7753 })

const disboard = require('./disboard.js')
const anigame = require('./anigame.js')

console.log(`Logging in...`)

client.on('ready', async () => {
  console.log(`${client.user.tag} is ready to roll!`)
  
  disboard()
});

client.on('messageCreate', async message => {
  anigame(message);
})
client.login(`token`)
