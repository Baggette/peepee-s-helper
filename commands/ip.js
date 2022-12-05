const {EmbedBuilder} = require('discord.js')
module.exports ={
    name:"ip",
    description:"The server ip",
    execute(client, message, args){
        const embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setAuthor({name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80"})
        .setTitle('The server IP')
        .setDescription('Did you forgor the IP?')
        .addFields(
            {name:"Java", value:"pepionline.dimitrodam.com"},
            {name:"Bedrock", value:"pepionline.mc.dimitrodam.com"},
            {name:"Port", value:"19132"},
            {name:"Are you on console?", value:"Refer to `p!console`"}
        )
        .setTimestamp()
        message.channel.send({embeds: [embed]})
    }
}
