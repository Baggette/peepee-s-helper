const {EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits} = require('discord.js')
const wait = require('node:timers/promises').setTimeout;
module.exports={
    data: new SlashCommandBuilder()
  .setName("ban")
  .setDescription("bans a mentioned user")
  .addUserOption(option =>
    option
        .setName("user")
        .setDescription("User to ban")
        .setRequired(true)
    )
   .addStringOption(option =>
    option
        .setName("reason")
        .setDescription("The reasion for the ban")
    )
   .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  execute: async(interaction, client) =>{
            await interaction.deferReply()
            const guild = await client.guilds.fetch(interaction.guildId)
            const id = interaction.options.getMember("user")
               const reason = interaction.options.getString("reason") ?? "No reason provided"
              console.log(id)
              const mod_log = new EmbedBuilder()
              .setTitle(`User was banned`)
              .setColor("#ff0000")
              .setDescription(`${id} was banned because of ${reason} \n Responsible Moderator: ${interaction.user}`)
              .setTimestamp()
              client.channels.cache.get("872196978010882109").send({embeds:[mod_log]})
              try{
                const embed = new EmbedBuilder()
                .setTitle("You were banned from The PepiOnLine SMP")
                .setColor("#ff0000")
                .setDescription(`You were banned because of ${reason}`)
                .setTimestamp()
                await client.users.send(id, {embeds:[embed]})
              }
              catch (error){
                console.log("unable to dm")
              }
              await interaction.editReply(`<@${id}> was successfully banned \n Because of \`${reason}\``)
              guild.members.kick(id)
       }
  }