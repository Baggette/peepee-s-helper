const {MessageEmbed} = require('discord.js')
module.exports ={
    name:"ip",
    description:"The server ip",
    execute(message, args){
        const embed = new MessageEmbed()
        .setColor("#FF0000")
        .setAuthor({name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80"})
        .setTitle('The server IP')
        .setDescription('Did you forget the IP?')
        .addFields(
            {name:"Java", value:"pepionline.dimitrodam.com"},
            {name:"Bedrock", value:"54.39.250.160"},
            {name:"Port", value:"25581"},
            {name:"Are you on console?", value:"Refer to `p!console`"}
        )
        .setTimestamp()
        message.channel.send({embeds: [embed]})
    }
}
