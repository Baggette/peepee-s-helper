module.exports={
    name:"stop",
    description:"Stop currently playing music",
    execute(client, message){
        const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
    queue.stop()
    message.channel.send(`Stopped!`)
    }
}
