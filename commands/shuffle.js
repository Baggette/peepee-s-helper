module.exports={
    name:"shuffle",
    description:"Shuffle the queue",
    execute(client, message, args){
        const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
    queue.shuffle()
    message.channel.send('Shuffled songs in the queue')
    }
}
