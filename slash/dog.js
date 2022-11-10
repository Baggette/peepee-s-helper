const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")
import get from "node-fetch"
module.exports={
    data: new SlashCommandBuilder()
    .setName("dog")
    .setDescription("see a doggo"),
    async execute(interaction){
        await interaction.deferReply()
        get("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(async (response) => {
            const embed = new EmbedBuilder()
            .setTitle("Doggos")
            .setColor('#ff0000')
            .setURL(`${response.message}`)
            .setImage(`${response.message}`)
            .setTimestamp()
            await interaction.editReply({embeds:[embed]})
        })
        .catch(async (err) =>{
            await interaction.editReply(`An error occorred whilst running the command \n ${err}`)
        })
    }
}