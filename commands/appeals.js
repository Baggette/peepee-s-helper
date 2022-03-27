const {MessageEmbed} = require('discord.js')
module.exports ={
    name:"appeal",
    description:'Get information on appeals',
    execute(message, args){
    const embed = new MessageEmbed()
    .setColor('#FF0000')
    .setAuthor({name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80"})
    .setTitle('How do I appeal a ban?')
    .setDescription("You want to know how to appeal a ban, well you're in luck, theres a google forum you can fill out")
    .addField('The google forum', 'https://forms.gle/PkjPkjLatiZ6Df9z6', true)
    .setTimestamp()
    message.channel.send({embeds: [embed]})
    }
}