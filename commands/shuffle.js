const {EmbedBuilder} = require("discord.js")
module.exports={
    name:"shuffle",
    description:"Shuffle the queue",
    execute(client, message, args){
        const queue = client.distube.getQueue(message)
        const no_queue_embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setDescription(`There is nothing in the queue right now!`)
        .setTimestamp()
    if (!queue) return message.channel.send({embeds:[no_queue_embed]})
    queue.shuffle()
    const shuffled_music_embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setDescription('Shuffled songs in the queue')
        .setTimestamp()
    message.channel.send({embeds:[shuffled_music_embed]})
    }
}
