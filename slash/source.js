const {EmbedBuilder, SlashCommandBuilder} = require('discord.js')
module.exports ={
    data: new SlashCommandBuilder()
    .setName("source")
    .setDescription("Shows The bot source code"),
    async execute(interaction){
        const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle("Peepee's Helper Source code")
        .setURL('https://github.com/Baggette/peepee-s-helper')
        .setAuthor({name: "Peepee's Helper", iconURL:'https://cdn.discordapp.com/avatars/316986390120235018/a_7427cfdfed85a62c25ca36396b215ab0.gif?size=80', url:'https://github.com/Baggette/peepee-s-helper'})
        .setDescription("This is the source code for the bot. If you'd like to contribute, feel free! Pull requests and issues are accepted. \n You don't even need to know how to code! \n Even suggesting features or fixing spelling errors is very helpful \n https://github.com/Baggette/peepee-s-helper")
        .setTimestamp()
        await interaction.reply({embeds:[embed]})
    }

}
