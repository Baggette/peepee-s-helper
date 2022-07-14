const {MessageEmbed} = require('discord.js')
module.exports ={
    name:"grief",
    description:"Report a grief",
    execute(message,args){
        const embed = new MessageEmbed()
        .setColor('#FF0000')
        .setAuthor({name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80"})
        .setTitle('Did you see a grief and want to report it?')
        .setDescription('If you happen to be a victim of griefing, you can open a ticket by going to <#929802645982572564> and clicking the button on the message provided. This will let you speak with a Staff member directly.')
        .setTimestamp()
        message.channel.send({embeds: [embed]})
    }
}
