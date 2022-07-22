module.exports={
    name:"leave",
    description:"make the bot leave the vc",
    execute(client, message, args){
        client.distube.voices.leave(message)
    }
}