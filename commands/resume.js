module.exports={
    name:"resume",
    description:"resume a paused song",
    execute(client, message, args){
        const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
    if (queue.paused) {
      queue.resume()
      message.channel.send('Resumed the song for you :)')
    } else {
      message.channel.send('The queue is not paused!')
    }
    }
}