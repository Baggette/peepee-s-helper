const {MessageEmbed} = require('discord.js')
module.exports ={
    name:'link',
    description:'How to link your account',
    execute(message,args){
    const embed = new MessageEmbed()
    .setColor('#FF0000')
    .setAuthor({name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80"})
    .setTitle("How to link your account")
    .setDescription("Did you join the server and was asked to 'link your account'? and are wondering what to do?")
    .addFields(
        {name: "Step one", value: "Join the server (if you don't know the ip refer to p!ip)"},
        {name: 'Step two', value: "You should be greeted with a screen that tells you to dm a 4 digit code to <@875352108696748032>"},
        {name: 'Step three', value: "Rejoin the smp and you should be set"},
        {name: 'Toubleshooting', value:"Are you unable to dm the bot? Make sure you have DMs turned on in The PepiOnLine SMP discord server."}
        )
    .setTimestamp()
    message.channel.send({embeds: [embed]})
    }
}