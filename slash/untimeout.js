const {SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder} = require("discord.js")
const wait = require('node:timers/promises').setTimeout;

module.exports={
    data: new SlashCommandBuilder()
    .setName("untimeout")
    .setDescription("Untimeout a member")
    .addUserOption(option =>
        option
            .setName("target")
            .setDescription("User to timeout")
            .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .setDMPermission(false),
    async execute(interaction, client){
        await interaction.deferReply()
        try{
        const target = interaction.options.getMember("target")
        await target.timeout(null)
        const embed = new EmbedBuilder()
        .setTitle("User unmuted")
        .setColor("#ff0000")
        .setDescription(`The user ${target} was unmuted by ${interaction.user}`)
        client.channels.cache.get("872196978010882109").send({embeds:[embed]})
        await wait(3000)
        await interaction.editReply(`Successfully removed the timeout on ${target}!`)
        }
        catch(err){
        const target = interaction.options.getUser("target")
        await interaction.editReply(`I was unable to remove the timeout on ${target} \n ${err}`)
        }
        
    }

}