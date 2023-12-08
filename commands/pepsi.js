const { EmbedBuilder } = require("discord.js");
module.exports = {
    name:"pepsi",
    description:"Get info about the pepsi economy",
    execute(client, message, args) {
        const embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setTitle("The pepsi's coin")
            .setDescription("some info about the built in economy for this bot")
            .addFields(
                { name:"`p!work`", value:"Work for more pepsi coin" },
                { name:"`p!daily`", value:"Claim some free pepsi coin each day" },
                { name:"`p!weekly`", value:"Claim a bunch of pepsi coin weekly" },
                { name:"`p!balance`", value:"View your current balance" },
                { name:"`p!deposit`", value:"Deposit pepsi coin into your bank account" },
                { name:"`p!withdraw`", value:"Withdraw pepsi coin from your bank account" },
                { name:"`p!shop`", value:"If unsure what to do run `p!shop help`" },
                { name:"`p!lb`", value:"See the pepsi coin leaderboard for this server" },     
            )
            .setTimestamp();
        message.channel.send({ embeds:[embed] });
    },
};
