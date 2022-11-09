const {EmbedBuilder} = require("discord.js")

module.exports={
    name:"dog",
    description:"See a doggo",
    execute(client, message, args){
        fetch("https://aws.random.cat/meow")
        .then(res => res.json())
        .then((response) => {
            const embed = new EmbedBuilder()
            .setTitle("Doggos")
            .setColor('#ff0000')
            .setURL(`${response.message}`)
            .setImage(`${response.message}`)
            .setTimestamp()
            message.channel.send({embeds:[embed]})
        })
        .catch((err) =>{
            message.channel.send(`An error occorred whilst running the command \n ${err}`)
        })
    }
}