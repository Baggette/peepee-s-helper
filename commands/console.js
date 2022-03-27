const {MessageEmbed} = require('discord.js')
module.exports ={
    name:"console",
    description:"Displays instuctions for how to join on console",
    execute(message,args){
        const embed = new MessageEmbed()
        .setColor("#FF0000")
        .setAuthor({name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80"})
        .setTitle("How to join on console")
        .addField("This link provides all the information necessary for joining on console(xbox, ps4, switch...etc)", "https://wiki.geysermc.org/geyser/using-geyser-with-consoles/")
        .setTimestamp()
        message.channel.send({embeds:[embed]})
    }
}