const {EmbedBuilder} = require('discord.js')
module.exports ={
    name:"appeal",
    description:'Get information how to appeal a ban',
    execute(message, args){
    const embed = new EmbedBuilder()
    .setColor('#FF0000')
    .setAuthor({name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80"})
    .setTitle('How do I appeal a ban?')
    .setDescription("If you were banned and believe your ban was unfair or that your punishment was too harsh, you can appeal your ban")
    .addField('Unban Form', 'https://forms.gle/PkjPkjLatiZ6Df9z6', true)
    .setTimestamp()
    message.channel.send({embeds: [embed]})
    }
}
