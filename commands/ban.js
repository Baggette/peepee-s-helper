const {EmbedBuilder} = require('discord.js')
const wait = require('node:timers/promises').setTimeout;
module.exports={
  name:"ban",
  description:"Bans a mentioned user",
  execute: async(client, message, args) =>{
      const guild = await client.guilds.fetch(message.guildId)
       if(!args[0]){
           message.channel.send("Please mention someone to ban, or provide their ID")
      }else if(args[0]){
           if(!guild.members.me.permissions.has('BanMembers')){
              message.channel.send('I cannot ban this person!')
          return 
      }else if(!message.member.permissions.has("BanMembers")){
          message.channel.send(`You do not have perms to ban \```${args[0]}\````)
      } 
               const rawid1 =  args[0].replace("@", "")
               const rawdid2 = rawid1.replace("<", "")
               const id = rawdid2.replace(">", "")
               const reason = args?.slice(1).join(" ") ?? "No reason provided"
              console.log(id)
              const mod_log = new EmbedBuilder()
              .setTitle(`User was banned`)
              .setColor("#ff0000")
              .setDescription(`<@${id}> was banned because of ${reason} \n Responsible Moderator: ${message.author}`)
              .setTimestamp()
              client.channels.cache.get("872196978010882109").send({embeds:[mod_log]})
              try{
                const embed = new EmbedBuilder()
                .setTitle("You were banned from The PepiOnLine SMP")
                .setColor("#ff0000")
                .setDescription(`You were banned because of ${reason}`)
                .setTimestamp()
                client.user.send(id, {embeds:[embed]})
              }
              catch (error){
                console.log("unable to dm")
              }
              wait(4000)
              guild.members.kick(id)
              .then(user => message.channel.send(`<@${id}> was successfully banned \n Because of ${reason}`))
              .catch((err) =>{
                message.channel.send(`An error occorred: ${err}`)
              })
       }
  }
}
