const {EmbedBuilder} = require("discord.js")
const get = require("node-fetch")
module.exports={
    name:"cat",
    description:"See a kitty",
    execute(client, message, args){
        get("https://aws.random.cat/meow")
        .then(res => res.json())
        .then((response) => {
            const embed = new EmbedBuilder()
            .setTitle("Kitties")
            .setColor('#ff0000')
            .setURL(`${response.file}`)
            .setImage(`${response.file}`)
            .setTimestamp()
            message.channel.send({embeds:[embed]})
        })
        .catch((err) =>{
            message.channel.send(`An error occorred whilst running the command \n ${err}`)
        })
    }
}