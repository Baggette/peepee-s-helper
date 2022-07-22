module.exports={
    name:"loop",
    description:"loop a desired song",
    execute(client, message, args){
        const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`There is nothing playing!`)
    let mode = 1
    switch (args[0]) {
      case 'off':
        mode = 0
        break
      case 'song':
        mode = 1
        break
      case 'queue':
        mode = 2
        break
    }
    mode = queue.setRepeatMode(mode)
    mode = mode ? (mode === 2 ? 'Repeat queue' : 'Repeat song') : 'Off'
    message.channel.send(`Set repeat mode to \`${mode}\``)
    }
}