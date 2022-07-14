const {MessageEmbed} = require('discord.js')
module.exports ={
    name:'help',
    description:'Help command',
    execute(message, args){
        const embed = new MessageEmbed()
        .setColor('#FF0000')
        .setAuthor({name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80"})
        .setTitle("Command list for peepee's helper")
        .addFields(
            {name:"`p!about`", value:"Information about the origins of this server"},
            {name:"`p!appeals`", value:'Some basic information on how to appeal a ban'},
            {name:"`p!commands`", value:"Get a list of useful in-game commands"},
            {name:"`p!economy`", value:"View basic prices for the in-game sellable items"},
            {name:"`p!grief`", value:"Some basic information on how to report a grief"},
            {name:"`p!help`", value:"This command"},
            {name:"`p!ip`", value:"Displays the server IP"},
            {name:"`p!link`", value:"Displays instructions on how to link your account"},
            {name:"`p!ping`", value:"View bot latency and uptime"},
            {name:"`p!console`", value:"How to join the server on console"}
        )
        .setTimestamp()
        message.channel.send({embeds:[embed]})
    }
}
