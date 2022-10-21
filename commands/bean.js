const {EmbedBuilder} = require("discord.js")

module.exports={
    name:"bean",
    description:"Get beaned",
    execute: async(client, message, args) =>{
        if(!args[0]){
            const embed = new EmbedBuilder()
            .setTitle("Prepare to be beaned...")
            .setColor("#ff0000")
            .setTimestamp()
            const msg1 = await message.channel.send({embeds:[embed]})
            const message2 = new EmbedBuilder()
            .setTitle("5")
            .setColor("#ff0000")
            .setTimestamp()
            setTimeout(() => { msg1.edit({embeds:[message2]}) }, 3995);
            clearTimeout
            const message3 = new EmbedBuilder()
            .setTitle("4")
            .setColor("#ff0000")
            .setTimestamp()
            setTimeout(() => { msg1.edit({embeds:[message3]}) }, 3996);
            clearTimeout
            const message4 = new EmbedBuilder()
            .setTitle("3")
            .setColor("#ff0000")
            .setTimestamp()
            setTimeout(() => { msg1.edit({embeds:[message4]}) }, 3997);
            clearTimeout
            const message5 = new EmbedBuilder()
            .setTitle("2")
            .setColor("#ff0000")
            .setTimestamp()
            setTimeout(() => { msg1.edit({embeds:[message5]}) }, 3998);
            clearTimeout
            const message6 = new EmbedBuilder()
            .setTitle("1")
            .setColor("#ff0000")
            .setTimestamp()
            setTimeout(() => { msg1.edit({embeds:[message6]}) }, 3999);
            clearTimeout
            const message7 = new EmbedBuilder()
            .setTitle("beans")
            .setColor("#ff0000")
            .setImage("https://media.tenor.com/B8DC9uJBDywAAAAC/biins-beans.gif")
            .setTimestamp()
            setTimeout(() => { msg1.edit({embeds:[message7]}) }, 4000);
            clearTimeout

        }
    }
}