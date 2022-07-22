module.exports={
    name:"pause",
    description:"Pause currently playing music",
    execute(client, message, args){
        const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
    if (queue.paused) {
      queue.resume()
      return message.channel.send('Music resumed :)')
    }
    queue.pause()
    message.channel.send('Music paused :)')
    }
}
