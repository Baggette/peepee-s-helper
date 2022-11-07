const {EmbedBuilder, SlashCommandBuilder} = require("discord.js")

module.exports={
    data: new SlashCommandBuilder()
    .setName("pepi")
    .setDescription("pepionline"),
    async execute(interaction, client){
        await interaction.deferReply()
        const guild = await client.guilds.fetch(interaction.guildId)
        const pepi = await guild.presences.resolve("316986390120235018")
        if(pepi.status == "online"){
            const embed = new EmbedBuilder()
            .setTitle("PepiOnLine")
            .setDescription("Pepi is online")
            .setColor("#287e29")
            .setTimestamp()
            await interaction.editReply({embeds:[embed]})
        }else if(pepi.status == "offline"){
            const embed = new EmbedBuilder()
            .setTitle("PepiOffline")
            .setDescription("Pepi is Offline")
            .setColor("#808080")
            .setTimestamp()
            await interaction.editReply({embeds:[embed]})
        }else if(pepi.status == "dnd"){
            const embed = new EmbedBuilder()
            .setTitle("PepiDnD")
            .setDescription("Pepi is DnD")
            .setColor("#f04747")
            .setTimestamp()
            await interaction.editReply({embeds:[embed]})
        }else if(pepi.status == "idle"){
            const embed = new EmbedBuilder()
            .setTitle("PepiIdle")
            .setDescription("Pepi is idle")
            .setColor("#faa61a")
            .setTimestamp()
            await interaction.editReply({embeds:[embed]})
        }
    }
}