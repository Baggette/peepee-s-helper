const {EmbedBuilder} = require('discord.js')
const prettyMilliseconds = require('pretty-ms')
module.exports ={
    name:"ping",
    description:"The PeePee's helper ping",
    execute(client, message, args){
        const embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setAuthor({name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80"})
        .setTitle("The Peepee's Helper bot latency and uptime ")
        .addField("Bot latency", `${client.ws.ping}` + 'ms')
        .addField("Bot uptime", `${prettyMilliseconds(client.uptime)}`)
        .setTimestamp()
        message.channel.send({embeds:[embed]})
    }
}
