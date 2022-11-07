const {EmbedBuilder} = require("discord.js")

module.exports={
    name:"pepi",
    description:"pepionline",
    async execute(client, message){
        const guild = await client.guilds.fetch(message.guildId)
        const pepi = await guild.presences.resolve("316986390120235018")
        if(pepi.status == "online"){
            const embed = new EmbedBuilder()
            .setTitle("PepiOnLine")
            .setDescription("Pepi is online")
            .setColor("#287e29")
            .setTimestamp()
            message.channel.send({embeds:[embed]})
        }else if(pepi.status == "offline"){
            const embed = new EmbedBuilder()
            .setTitle("PepiOffline")
            .setDescription("Pepi is Offline")
            .setColor("#808080")
            .setTimestamp()
            message.channel.send({embeds:[embed]})
        }else if(pepi.status == "dnd"){
            const embed = new EmbedBuilder()
            .setTitle("PepiDnD")
            .setDescription("Pepi is DnD")
            .setColor("#f04747")
            .setTimestamp()
            message.channel.send({embeds:[embed]})
        }else if(pepi.status == "idle"){
            const embed = new EmbedBuilder()
            .setTitle("PepiIdle")
            .setDescription("Pepi is idle")
            .setColor("#faa61a")
            .setTimestamp()
            message.channel.send({embeds:[embed]})
        }
    }
}