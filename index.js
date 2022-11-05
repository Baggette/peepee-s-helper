const {Client, Intents, EmbedBuilder, Events, GatewayIntentBits, Partials } = require('discord.js');
const { Manager } = require('modmail.djs');
const dotenv = require('dotenv');
dotenv.config();
const Discord = require('discord.js')
const fs = require('fs')
const Prefix = "p!"
const { DisTube } = require('distube')
const path = require('node:path');
const client = new Client({
  intents: Object.keys(GatewayIntentBits), // all intents
  partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});
const manager = new Manager(client, {
  guildId: '872185514193735751',
  categoryId: '1038511128692658186',
  role: '1038511576363311134'
});
const { YtDlpPlugin } = require('@distube/yt-dlp')
client.distube = new DisTube(client, {
  leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  plugins: [
    new YtDlpPlugin()
  ]
})
const phrases = require("./phrases.json")
const commandWhitelist = ["kick", "ban", "status", "appeal", "ip", "console", "ping", "userinfo",]
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}
client.slashcommands = new Discord.Collection();

const slashcommandsPath = path.join(__dirname, 'slash');
const slashcommandFiles = fs.readdirSync(slashcommandsPath).filter(file => file.endsWith('.js'));

for (const file of slashcommandFiles) {
	const filePath = path.join(slashcommandsPath, file);
	const slashcommand = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in slashcommand && 'execute' in slashcommand) {
		client.slashcommands.set(slashcommand.data.name, slashcommand);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}
client.on('ready', () => {
    console.log('Peepee is online')
    client.user.setPresence({ activities: [{ name: 'the PepiOnLine SMP', type: 'WATCHING' }], status: 'active' });
    manager.setModmail();
});
client.on("messageCreate", (message) => {
    const args = message.content.slice(Prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
    if (message.content.startsWith(Prefix) && message.channel.id === "872185514885791796" && !commandWhitelist.includes(command)){
          message.reply("Please do not use bot commands in general, use <#873623280177799198> instead.") 
          .then(msg => {
            setTimeout(() => msg.delete(), 5000)
          }) 
          return;
      }
    if(phrases.phrases.includes(message.content)){
      const embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setAuthor({name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80"})
        .setTitle('The server IP')
        .setDescription('Did you forget the IP?')
        .addFields(
            {name:"Java", value:"pepionline.dimitrodam.com"},
            {name:"Bedrock", value:"51.91.164.41"},
            {name:"Port", value:"25591"},
            {name:"Are you on console?", value:"Refer to `p!console`"}
        )
        .setTimestamp()
        message.reply({embeds: [embed]})
    }
    if (message.content.startsWith(Prefix) && message.channel.id === "875353517387292682" && !commandWhitelist.includes(command)){
          message.reply("Please do not use bot commands in in game chat, use <#873623280177799198> instead.") 
          .then(msg => {
            setTimeout(() => msg.delete(), 5000)
          })
          return;
      }
      if (message.mentions.users.has(client.user.id) && !message.author.bot) {
        message.reply(`my prefix here is ${Prefix}`)
       .then(msg => {
           setTimeout(() => msg.delete(), 5000)
         })

      };
      
   //RUN COMMANDS

});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const slash = interaction.client.slashcommands.get(interaction.commandName);

	if (!slash) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await slash.execute(interaction, client);
	} catch (error) {
		console.error(`Error executing ${interaction.commandName}`);
		console.error(error);
	}
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
      if(message.channelId === "872185514885791796" && !commandWhitelist.includes(command) || message.channelId === "875353517387292682" && !commandWhitelist.includes(command))return
    
      if (!client.commands.get(command)) {
          return
      }
    client.commands.get(command).execute(client, message, args)
    
});     
const status = queue =>
  `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.names.join(', ') || 'Off'}\` | Loop: \`${
    queue.repeatMode ? (queue.repeatMode === 2 ? 'All Queue' : 'This Song') : 'Off'
  }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``
client.distube

  .on('playSong', (queue, song) =>{
  const playsong_embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setDescription(`Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`)
        .setTimestamp()
    queue.textChannel.send({embeds:[playsong_embed]})
  })
  .on('addSong', (queue, song) =>{
  const addsong_embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setDescription(`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`)
        .setTimestamp()
    queue.textChannel.send({embeds:[addsong_embed]})}
  )
  .on('addList', (queue, playlist) =>{
   const addlist_embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setDescription(`Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`)
        .setTimestamp()
    queue.textChannel.send({embeds:[addlist_embed]})}
  )
  .on('error', (channel, e) => {
    const error_embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setDescription(`An error encountered: ${e.toString().slice(0, 1974)}`)
        .setTimestamp()
    if (channel) channel.send({embeds:[error_embed]})
    else console.error(e)
  })
  .on('empty', channel =>{
  const empty_embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setDescription('Voice channel is empty! Leaving the channel...')
        .setTimestamp() 
        channel.send({embeds:[empty_embed]})})
  .on('searchNoResult', (message, query) =>{
  const no_result_embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setDescription(`No result found for \`${query}\`!`)
        .setTimestamp()
    message.channel.send({embeds:[no_result_embed]})}
  )
  .on('finish', queue => {
  const finished_embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setDescription("Finished!")
        .setTimestamp()
        queue.textChannel.send({embeds:[finished_embed]})})
client.distube.on('error', (channel, error) => {
  console.error(error)
  channel.send(`An error encoutered: ${error.slice(0, 1979)}`) // Discord limits 2000 characters in a message
      })
client.login(process.env.TOKEN)

