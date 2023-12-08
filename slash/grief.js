const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("grief")
        .setDescription("Report a grief")
        .addStringOption(option => 
            option
                .setName("report")
                .setDescription("Report someone")
                .setRequired(true),
        )
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("the user to report? (not required)"),
        ),
    async execute(interaction, client) {
        await interaction.deferReply({ ephemeral: true });
        const report = interaction.options.getString("report");
        const user = interaction.options.getUser("user") ?? "No user provided";
        const embed = new EmbedBuilder()
            .setColor("#ff0000")
            .setTitle("Grief Report")
            .setDescription(`Report submitted by: ${interaction.user} \n User reported: ${user} \n Report: ${report}`)
            .setTimestamp();
        client.channels.cache.get("872196978010882109").send({ embeds:[embed] });
        await interaction.editReply({ content: "Report successfully submitted, a staff member will look it over momentarily", ephemeral: true });
    },
};
