const {EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits} = require('discord.js')
module.exports={
    data: new SlashCommandBuilder()
  .setName("kick")
  .setDescription("kicks a mentioned user")
  .addUserOption(option =>
    option
        .setName("user")
        .setDescription("User to kick")
        .setRequired(true)
    )
   .addStringOption(option =>
    option
        .setName("reason")
        .setDescription("The reasion for the kick")
    )
   .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  execute: async(interaction, client) =>{
            await interaction.deferReply()
            const guild = await client.guilds.fetch(interaction.guildId)
            const id = interaction.options.getUser("user")
               const reason = interaction.options.getString("reason") ?? "No reason provided"
              console.log(id)
              const mod_log = new EmbedBuilder()
              .setTitle(`User was kicked`)
              .setColor("#ff0000")
              .setDescription(`${id} was kicked because of ${reason} \n Responsible Moderator: ${interaction.user}`)
              .setTimestamp()
              client.channels.cache.get("872196978010882109").send({embeds:[mod_log]})
              try{
                const embed = new EmbedBuilder()
                .setTitle("You were kicked from The PepiOnLine SMP")
                .setColor("#ff0000")
                .setDescription(`You were kicked because of ${reason}`)
                .setTimestamp()
                client.user.send(id, {embed})
              }
              catch (error){
                console.log("unable to dm")
              }
              guild.members.kick(id)
              .then(async user => await interaction.editReply(`${id} was successfully kicked \n Because of ${reason}`))
              .catch((err) =>{
                message.channel.send(`An error occorred: ${err}`)
              })
       }
  }