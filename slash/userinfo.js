const { EmbedBuilder, SlashCommandBuilder} = require("discord.js")
module.exports={
    data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("shows the info of a user")
    .addUserOption(option =>
        option
            .setName("user")
            .setDescription("The user to get the info from")
        ),
    async execute(interaction, client){
        await interaction.deferReply()
        const guild = await client.guilds.fetch(interaction.guildId)
        const id = interaction.options.getUser("user")
         if(!id){
                 const id = interaction.user
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
                    {name:"Roles: ", value:`${target.roles.cache.map(r => r).join(" ")}`}
                    
                )
                .setTimestamp()
                await interaction.editReply({embeds:[embed]})
         }else{
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
                    {name:"Roles: ", value:`${target.roles.cache.map(r => r).join(" ")}`}
                    
                    
                )
                .setTimestamp()
                await interaction.editReply({embeds:[embed]})
         } 
            
    }
}