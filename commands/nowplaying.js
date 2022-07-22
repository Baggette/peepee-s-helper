module.exports={
    name:"nowplaying",
    description:"See what song is currently playing",
    execute(client, message, args){
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
        const song = queue.songs[0]
        message.channel.send(`I'm playing **\`${song.name}\`**, by ${song.user}`)
    }
}