const {EmbedBuilder} = require("discord.js")
module.exports={
    name:"music",
    description:"see the music commands",
    execute(client, message, args){
        const embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setTitle("Music commands")
        .setDescription("See the commands for the music features of this bot")
        .addFields(
            {name:"`p!play <song name>`", value:"play any song you want (make sure to join a vc first)"},
            {name:"`p!stop`", value:"Stop currently playing music"},
            {name:"`p!pause`", value:"Pause currently playing music"},
            {name:"`p!resume`", value:"Resume paused music"},
            {name:"`p!queue`", value:"See the current queue of music"},
            {name:"`p!shuffle`", value:"Shuffle the queue of music"},
            {name:"`p!seek`", value:"Fast forward the song thats currently playing"},
            {name:"`p!loop`", value:"Loop the current playing song"},
            {name:"`p!leave`", value:"Force the bot to leave the vc"},
            {name:"`p!nowplaying`", value:"See the name and progress of the currently playing song"},
            {name:"`p!skip`", value:"Skip the current song for the next one in queue"},
        )
        .setTimestamp()
        message.channel.send({embeds:[embed]})
    }
}