const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")

module.exports={
    data: new SlashCommandBuilder()
    .setName("cat")
    .setDescription("see a kitty"),
    async execute(interaction){
        await interaction.deferReply()
        fetch("https://aws.random.cat/meow")
        .then(res => res.json())
        .then(async (response) => {
            const embed = new EmbedBuilder()
            .setTitle("Kitties")
            .setColor('#ff0000')
            .setURL(`${response.file}`)
            .setImage(`${response.file}`)
            .setTimestamp()
            await interaction.editReply({embeds:[embed]})
        })
        .catch(async (err) =>{
            await interaction.editReply(`An error occorred whilst running the command \n ${err}`)
        })
    }
}