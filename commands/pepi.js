const {EmbedBuilder} = require("discord.js")

module.exports={
    name:"pepi",
    description:"pepionline",
    async execute(client, message){
        const guild = await client.guilds.fetch(message.guildId)
        const pepi = await guild.presences.resolve("316986390120235018")
        const status = pepi.status
        const custom_status = pepi.activities[0]?.state ?? "`No status`"
        const activity_name = pepi.activities[1]?.name ?? "`No activity name`"
        const activity_details = pepi.activities[1]?.details ?? "`No activity details`"
        console.log(pepi)
        if(status == "online"){
            const embed = new EmbedBuilder()
            .setTitle("PepiOnLine")
            .setDescription("Pepi is online")
            .addFields(
                {name:"Custom status", value:`${custom_status}`, inline: true},
                {name:"Activity", value:`${activity_name}`, inline: true},
                {name:"Activity details", value:`${activity_details}`, inline: true}
            )
            .setColor("#287e29")
            .setTimestamp()
            message.channel.send({embeds:[embed]})
        }else if(status == "offline"){
            const embed = new EmbedBuilder()
            .setTitle("PepiOffline")
            .setDescription("Pepi is Offline")
            .setColor("#808080")
            .setTimestamp()
            message.channel.send({embeds:[embed]})
        }else if(status == "dnd"){
            const embed = new EmbedBuilder()
            .setTitle("PepiDnD")
            .setDescription("Pepi is DnD")
            .addFields(
                {name:"Custom status", value:`${custom_status}`, inline: true},
                {name:"Activity", value:`${activity_name}`, inline: true},
                {name:"Activity details", value:`${activity_details}`, inline: true}
            )
            .setColor("#f04747")
            .setTimestamp()
            message.channel.send({embeds:[embed]})
        }else if(status == "idle"){
            const embed = new EmbedBuilder()
            .setTitle("PepiIdle")
            .setDescription("Pepi is idle")
            .addFields(
                {name:"Custom status", value:`${custom_status}`, inline: true},
                {name:"Activity", value:`${activity_name}`, inline: true},
                {name:"Activity details", value:`${activity_details}`, inline: true}
            )
            .setColor("#faa61a")
            .setTimestamp()
            message.channel.send({embeds:[embed]})
        }
    }
}