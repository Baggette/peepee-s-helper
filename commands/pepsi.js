const {EmbedBuilder} = require("discord.js")
module.exports={
    name:"pepsi",
    description:"Get info about the pepsi economy",
    execute(message, args, client){
        const embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setTitle("The pepsi's coin")
        .setDescription("some info about the built in economy for this bot")
        .addFields(
            {name:"`p!work`", value:"Work for more pepsi coin"},
            {name:"`p!daily`", value:"Claim a set amount of pepsi coin each day"},
            {name:"`p!weekly`", value:"Claim a fairly decent amout of pepsi coin weekly"},
            {name:"`p!balance`", value:"See your current balance"},
            {name:"`p!deposit`", value:"Deposit pepsi coin into your bank account"},
            {name:"`p!withdraw`", value:"Withdraw money from your bank"},
            {name:"`p!shop`", value:"If unsure what to do run `p!shop help`"},
            {name:"`p!lb`", value:"See a leaderboard for pepsi coin"}     
        )
        .setTimestamp()
        message.channel.send({embeds:[embed]})
    }
}