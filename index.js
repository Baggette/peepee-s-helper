const {Client, Intents, MessageEmbed} = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const Discord = require('discord.js')
const fs = require('fs')
const Prefix = "p!"
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
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
client.on('messageCreate', (message) => { 
    if (!message.content.startsWith(Prefix) || message.author.bot || message.channelId === "872185514885791796") return;
    const args = message.content.slice(Prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (message.mentions.users.has(client.user.id) && !message.author.bot) {
  message.reply(`my prefix here is ${Prefix}`)
  return
};
    
    if (!client.commands.get(command)) {
        return
    }
    

    client.commands.get(command).execute(message, args, client)

});
/*client.on('guildMemberAdd', member => {
    const welcomeEmbed = new MessageEmbed()

    welcomeEmbed.setColor('#5cf000')
    welcomeEmbed.setTitle('**' + member.user.username + '** is now apart of The PepiOnLine SMP with **' + member.guild.memberCount + '** other people')
    welcomeEmbed.setImage('https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80')

    member.guild.channels.cache.get("957079331102933074").send({embeds:[welcomeEmbed]})
})

client.on('guildMemberRemove', member => {
    const goodbyeEmbed = new MessageEmbed()

    goodbyeEmbed.setColor('#f00000')
    goodbyeEmbed.setTitle('**' + member.user.username + '** Left The PepiOnLine SMP, There is now **' + member.guild.memberCount + '** Members left')
    goodbyeEmbed.setImage('https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80')

    member.guild.channels.cache.get("957079331102933074").send({embeds:[goodbyeEmbed]})
})*/
client.login(process.env.TOKEN)
