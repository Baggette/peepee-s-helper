
const {MessageEmbed, MessageSelectMenu} = require('discord.js')
module.exports ={
    name:"source",
    description:"Shows The bot source code",
    execute(message, args, client){
        const embed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle("Peepee's Helper Source code")
        .setURL('https://github.com/Baggette/peepee-s-helper')
        .setAuthor({name: "Peepee's Helper", iconURL:'https://cdn.discordapp.com/avatars/316986390120235018/a_7427cfdfed85a62c25ca36396b215ab0.gif?size=80', url:'https://github.com/Baggette/peepee-s-helper'})
        .setDescription("This is the source code for this bot, if you's like to contribute feel free, Pull Requests and issues are accepted. \n You don't even need to know how to code! \n Even suggesting features of fixing spelling errors are nice \n https://github.com/Baggette/peepee-s-helper")
        .setTimestamp()
        message.channel.send({embeds:[embed]})
    }

}