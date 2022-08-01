const game = require('@sinisterdev/rock-paper-scissor')
const {EmbedBuilder, Message} = require("discord.js")
module.exports={
    name:"rps",
    description:"rock paper scissors",
    execute(client, message, args){
        if(!args[0]){
        const embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setDescription("You did not specify rock, paper or scissors")
        .setTimestamp()

        message.channel.send({embeds:[embed]})
        }else if(!args[0].includes("rock" || "paper" || "scissors")){
            const embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription("That wasn't rock, paper or scissors")
            .setTimestamp()

            message.channel.send({embeds:[embed]})
        }else if(args[0].includes("rock" || "paper" || "scissors")){
            const result = game.play(args[0])
            const result1 = JSON.stringify(result)
            const result2 = JSON.parse(result1)
            if(result2.winner == "tie"){
                const embed = new EmbedBuilder()
                .setColor("#FF0000")
                .setTitle("Its a tie")
                .setDescription(`I played: \`${result2.computer}\` \n You played: \`${args[0]}\``)
                .setTimestamp()
                message.channel.send({embeds:[embed]})
            }else if(result2.winner == "player"){
                const embed = new EmbedBuilder()
                .setColor("#FF0000")
                .setTitle("You won")
                .setDescription(`I played: \`${result2.computer}\` \n You played: \`${args[0]}\``)
                .setTimestamp()
                message.channel.send({embeds:[embed]})
            }if(result2.winner == "computer"){
                const embed = new EmbedBuilder()
                .setColor("#FF0000")
                .setTitle("I won")
                .setDescription(`I played: \`${result2.computer}\` \n You played: \`${args[0]}\``)
                .setTimestamp()
                message.channel.send({embeds:[embed]})
            }
        }
    }
}