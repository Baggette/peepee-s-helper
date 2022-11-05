const {SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder} = require("discord.js")
const wait = require('node:timers/promises').setTimeout;

module.exports={
    data: new SlashCommandBuilder()
    .setName("timeout")
    .setDescription("Timeout a member")
    .addUserOption(option =>
        option
            .setName("target")
            .setDescription("User to timeout")
            .setRequired(true)
    )
    .addIntegerOption(option => 
        option
            .setName("time")
            .setDescription("The amount of time in minutes to timeout someone")
            .setRequired(true)
    )
    .addStringOption(option =>
        option
            .setName("reason")
            .setDescription("the reason for the timeout")
        )
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .setDMPermission(false),
    async execute(interaction, client){
        await interaction.deferReply()
        try {
            const target = interaction.options.getMember("target")
            const time = interaction.options.getInteger("time")
            const reason = interaction.options.getString("reason") ?? "no reason provided"
            await target.timeout(time * 60_000)
            const embed = new EmbedBuilder()
            .setTitle("user was muted")
            .setColor("#ff0000")
            .setDescription(`The user ${target} was muted for ${time * 60_000} minutes because of ${reason}`)
            .setTimestamp()
            client.channels.cache.get("872196978010882109").send({embeds:[embed]})
            await interaction.editReply(`Successfully timed out ${target} for ${time} minutes`)
        }
        catch(err){
            const target = interaction.options.getUser("target")
            await interaction.editReply(`I was unable to timeout ${target} \n ${err}`)
        }
        
    }

}