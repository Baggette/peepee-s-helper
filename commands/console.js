const {EmbedBuilder} = require('discord.js')
module.exports ={
    name:"console",
    description:"Displays instuctions for how to join on console",
    execute(client, message, args){
        const embed = new EmbedBuilder()
        .setAuthor({name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80"})
        .setColor("#FF0000")
        .setTitle("How to Join on a Console")
        .addFields({name:"This page should provide all of the information necessary to join via console (Xbox, PlayStation, Nintendo Switch, etc)", value: "https://wiki.geysermc.org/geyser/using-geyser-with-consoles/"})
        .setTimestamp()
        message.channel.send({embeds:[embed]})
    }
}
