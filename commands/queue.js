module.exports={
    name:"queue",
    description:"Shows the current queue for songs",
    execute(client, message, agrs){
        const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`There is nothing playing!`)
    const q = queue.songs
      .map((song, i) => `${i === 0 ? 'Playing:' : `${i}.`} ${song.name} - \`${song.formattedDuration}\``)
      .join('\n')
    message.channel.send(`**Server Queue**\n${q}`)
    }
}