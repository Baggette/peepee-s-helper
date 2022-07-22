module.exports={
    name:"play",
    description:"Play a song",
    execute(client, message, args){
        const string = args.join(' ')
        if (!message.member.voice.channel) {
          return message.channel.send(`You must be in a voice channel!`)
        }
    if (!string) return message.channel.send(`Please enter a song URL or query to search.`)
    client.distube.play(message.member.voice.channel, string, {
      member: message.member,
      textChannel: message.channel,
      message
    })
    }
}
