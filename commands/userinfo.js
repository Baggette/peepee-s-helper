const { EmbedBuilder } = require("discord.js")
module.exports={
    name:"userinfo",
    description:"shows the info of a user",
    execute: async(client, message, args) =>{
        const guild = await client.guilds.fetch(message.guildId)
         if(!args[0]){
            try{
                const id = message.author.id
                const target = await guild.members.fetch(id)
                const status = await guild.presences.resolve(id)
                const custom_status = status.activities[0]?.state ?? "`No status`"
                const activity_name = status.activities[1]?.name ?? "`No activity name`"
                const activity_details = status.activities[1]?.details ?? "`No activity details`"
                const embed = new EmbedBuilder()
                .setTitle(`User info for ${target.user.tag}`)
                .setThumbnail(target.user.avatarURL({dynamic:true, size:512}))
                .setAuthor({name:target.user.tag, iconURL: target.user.avatarURL({dynamic:true, size:512})})
                .setColor("#FF0000")
                .addFields(
                    {name:"User ID:", value: `${target.user.id}`, inline: true},
                    {name:"Account age: ", value:`<t:${parseInt(target.user.createdTimestamp / 1000 )}:R>`,inline:true},
                    {name:"Member since: ", value:`<t:${parseInt(target.joinedTimestamp / 1000)}:R>`, inline: true},
                    {name:"Status: ", value:`${custom_status}`, inline: true},
                    {name:"Activity Name: ", value:`${activity_name}`, inline: true},
                    {name:"Activity Details: ", value:`${activity_details}`, inline: true},
                    {name:"Roles: ", value:`${target.roles.cache.map(r => r).join(" ")}`, inline: true},
                    
                )
                .setTimestamp()
                message.channel.send({embeds:[embed]})
            }
            catch(err){
                message.channel.send(`Either that is not a valid user or id or an error occorred\n error: ${err}`)
                console.log(err)
            }
         }else{
            try{
                 const rawid1 =  args[0].replace("@", "")
                 const rawdid2 = rawid1.replace("<", "")
                 const id = rawdid2.replace(">", "")
                 const target = await guild.members.fetch(id)
                 const status = await guild.presences.resolve(id)
                 const custom_status = status.activities[0]?.state ?? "`No status`"
                 const activity_name = status.activities[1]?.name ?? "`No activity name`"
                 const activity_details = status.activities[1]?.details ?? "`No activity details`"
                 const embed = new EmbedBuilder()
                 .setTitle(`User info for ${target.user.tag}`)
                 .setThumbnail(target.user.avatarURL({dynamic:true, size:512}))
                 .setAuthor({name:target.user.tag, iconURL: target.user.avatarURL({dynamic:true, size:512})})
                 .setColor("#FF0000")
                 .addFields(
                     {name:"User ID:", value: `${target.user.id}`, inline: true},
                     {name:"Account age: ", value:`<t:${parseInt(target.user.createdTimestamp / 1000 )}:R>`,inline:true},
                     {name:"Member since: ", value:`<t:${parseInt(target.joinedTimestamp / 1000)}:R>`, inline: true},
                     {name:"Status: ", value:`${custom_status}`, inline: true},
                     {name:"Activity Name: ", value:`${activity_name}`, inline: true},
                     {name:"Activity Details: ", value:`${activity_details}`, inline: true},
                     {name:"Roles: ", value:`${target.roles.cache.map(r => r).join(" ")}`, inline: true}
                     
                 )
                 .setTimestamp()
                 message.channel.send({embeds:[embed]})
            }
            catch(err){
                message.channel.send(`Either that is not a valid user or id or an error occorred\n error: ${err}`)
                console.log(err)
            }
         } 
            
    }
}