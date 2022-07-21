const {Client, Intents, MessageEmbed} = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const Discord = require('discord.js')
const fs = require('fs')
const Prefix = "p!"
const client = new Client({
    intents: [
        "Guilds",
        "GuildMessages",
        "MessageContent"
    ]
});
const commandWhitelist = ["kick", "ban", "status", "appeal", "ip", "console"]
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}
client.on('ready', () => {
    console.log('Peepee is online')
    client.user.setPresence({ activities: [{ name: 'the PepiOnLine SMP', type: 'WATCHING' }], status: 'active' });
});

client.on("messageCreate", (message) => {
    const args = message.content.slice(Prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
    if (message.content.startsWith(Prefix) && message.channelId === "872185514885791796" && !commandWhitelist.includes(command)){
          message.reply("Please do not use bot commands in general, use <#873623280177799198> instead.") 
          .then(msg => {
            setTimeout(() => msg.delete(), 5000)
          })
      }
    if (message.mentions.users.has(client.user.id) && !message.author.bot) {
         message.reply(`my prefix here is ${Prefix}`)

       };
      
   //RUN COMMANDS

});

client.on('messageCreate', (message) => { 
      if (!message.content.startsWith(Prefix) || message.author.bot) return;
      const args = message.content.slice(Prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
      if (message.mentions.users.has(client.user.id) && !message.author.bot) {
        message.reply(`my prefix here is ${Prefix}`)
        .then(msg => {
            setTimeout(() => msg.delete(), 5000)
          })
      };
      if(message.channelId === "872185514885791796" && !commandWhitelist.includes(command))return
    
      if (!client.commands.get(command)) {
          return
      }
    
      client.commands.get(command).execute(message, args, client)
 
});
client.login(process.env.TOKEN)
