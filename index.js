const {Client, Intents, EmbedBuilder} = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const Discord = require('discord.js')
const fs = require('fs')
const Prefix = "p!"
const { DisTube } = require('distube')
const client = new Client({
    intents: [
        "Guilds",
        "GuildMessages",
        "MessageContent",
        "GuildVoiceStates"
    ]
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
    if (message.content.startsWith(Prefix) && message.channel.id === "872185514885791796" || message.channelId === "875353517387292682" && !commandWhitelist.includes(command)){
          message.reply("Please do not use bot commands in general, use <#873623280177799198> instead.") 
          .then(msg => {
            setTimeout(() => msg.delete(), 5000)
          })
      }
    if (message.content.startsWith(Prefix) && message.channel.id === "875353517387292682" && !commandWhitelist.includes(command)){
          message.reply("Please do not use bot commands in in game chat, use <#873623280177799198> instead.") 
          .then(msg => {
            setTimeout(() => msg.delete(), 5000)
          })
      }
      if (message.mentions.users.has(client.user.id) && !message.author.bot) {
        message.reply(`my prefix here is ${Prefix}`)
       .then(msg => {
           setTimeout(() => msg.delete(), 5000)
         })

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
      if(message.channelId === "872185514885791796" || message.channelId === "875353517387292682" && !commandWhitelist.includes(command))return
    
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
