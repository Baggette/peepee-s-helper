const {EmbedBuilder} = require('discord.js')
module.exports={
    name:"choose",
    description:"make the bot choose from 2 items",
    execute: async(client, message, args) =>{
        if(!args[0]){
            const no_args = new EmbedBuilder()
            .setTitle("No options provided.")
            .setDescription("Example: ```p!choose thing1 thing2```")
            .setColor("#FF0000")
            .setTimestamp()
            message.channel.send({embeds:[no_args]}); return
        }
        const guild = await client.guilds.fetch(message.guildId)
        const id = message.author.id
        const target = await guild.members.fetch(id)
            let num = Math.floor(Math.random() * 3)
            if(num == 1){
                const embed = new EmbedBuilder()
                .setTitle("Im thinking...")
                .setColor("#ff0000")
                .setTimestamp()
                const msg1 = await message.channel.send({embeds:[embed]})
                const newembed = new EmbedBuilder()
                .setTitle("I choose...")
                .setColor("#ff0000")
                .setDescription(`${args[0]} \n requested by: ${target.user.tag}`)
                .setTimestamp()
                setTimeout(() => { msg1.edit({embeds:[newembed]}) }, 4000);
                clearTimeout
            }else if(num == 2){
                const embed = new EmbedBuilder()
                .setTitle("Im thinking...")
                .setColor("#ff0000")
                .setTimestamp()
                const msg2 = await message.channel.send({embeds:[embed]})
                const newembed = new EmbedBuilder()
                .setTitle("I choose...")
                .setColor("#ff0000")
                .setDescription(`${args[1]} \n requested by: ${target.user.tag}`)
                .setTimestamp()
                setTimeout(() => { msg2.edit({embeds:[newembed]}) }, 4000);
                clearTimeout
        }
    }
}