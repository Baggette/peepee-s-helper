const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("about")
        .setDescription("Displays some server info"),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setAuthor({ name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80" })
            .setTitle("Some history and general info about the server")
            .setDescription("*I started this SMP on the 11th of August 2021, as an unofficial continuation of the defunct Boffy SMP. I didn't really have anything in mind when I first began it, but I came to realize how difficult, expensive, and time consuming it is hosting something like this. Since the beginning, I've strived to create a friendly environment for all who join our server and so far, I've had tremendous success! I strive to provide a professional, fun, & inclusive space that everyone can enjoy! I actively update it, host events, add your suggestions, all to better the experience! I provide anti X-Ray, Economy, EssentialsX and much, and more! Thank you to everyone who's helped and played, and enjoy your time here.* \n \n -PepiOnLine, **owner**")
            .setFooter({ text:"Bot developed by Baggette#4777", iconURL:"https://cdn.discordapp.com/avatars/887756464020672523/5261d8f56ece38a54d1e88d3316310b6.webp?size=80" })
            .setTimestamp();
        await interaction.reply({ embeds:[embed] });
    },
};
