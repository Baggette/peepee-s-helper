const {EmbedBuilder} =  require("discord.js")
module.exports={
    name:"gayrate",
    description:"How gay are you",
    execute(client, message, args){
        const number = Math.floor(Math.random () * 101)
        if(!args[0]){
            const embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(`You are ${number}% gay`)
            .setTimestamp()
            message.channel.send({embeds:[embed]})
        }else if(args[0]){
            const embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(`${args.slice(0).join(" ")} is ${number}% gay`)
            .setTimestamp()
            message.channel.send({embeds:[embed]})
        }
    }
}