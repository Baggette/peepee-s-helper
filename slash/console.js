const {EmbedBuilder, SlashCommandBuilder} = require('discord.js')
module.exports ={
    data: new SlashCommandBuilder()
    .setName("console")
    .setDescription("Displays instuctions for how to join on console"),
    async execute(interaction){
        const embed = new EmbedBuilder()
        .setAuthor({name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80"})
        .setColor("#FF0000")
        .setTitle("How to Join on a Console")
        .setDescription("This page should provide all of the information necessary to join via console (Xbox, PlayStation, Nintendo Switch, etc), \n https://wiki.geysermc.org/geyser/using-geyser-with-consoles/")
        .setTimestamp()
        await interaction.reply({embeds:[embed]})
    }
}
