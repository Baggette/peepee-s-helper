const {EmbedBuilder, SlashCommandBuilder} = require('discord.js')
module.exports ={
    data: new SlashCommandBuilder()
    .setName("ip")
    .setDescription("The server ip"),
    async execute(interaction){
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
        await interaction.reply({embeds: [embed]})
    }
}
