module.exports={
    name:"skip",
    description:"Skip a song thats in queue",
    execute(client, message, args){
        const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
    try {
      const song = await queue.skip()
      message.channel.send(`Skipped! Now playing:\n${song.name}`)
    } catch (e) {
      message.channel.send(`${e}`)
    }
    }
}