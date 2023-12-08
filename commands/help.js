const { EmbedBuilder } = require("discord.js");
module.exports = {
    name:"help",
    description:"Help command",
    execute(client, message, args) {
        if (!args[0] || args[0] == "1") {
            const embed = new EmbedBuilder()
                .setColor("#FF0000")
                .setAuthor({ name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80" })
                .setTitle("Command list for peepee's helper (page 1), run `p!help 2` for page 2")
                .addFields(
                    { name:"`p!about`", value:"Information about the origins of this server" },
                    { name:"`p!appeal`", value:"Get some basic information on how to appeal a ban" },
                    { name:"`p!commands`", value:"Get a list of useful in-game" },
                    { name:"`p!grief`", value:"Some basic information on how to report a grief" },
                    { name:"`p!help`", value:"This command" },
                    { name:"`p!ip`", value:"Displays the server IP" },
                    { name:"`p!link`", value:"Displays instructions on how to link your account" },
                    { name:"`p!ping`", value:"View bot latency and uptime" },
                    { name:"`p!console`", value:"View instructions for joining the server on console" },
                    { name:"`p!source`", value:"View the source code for this bot. Feel free to contribute!" },
                    { name:"`p!status`", value:"Displays server info and status" },
                    { name:"`p!mcping <server ip> <port>`", value:"Pings a desired minecraft server. Currently only supports Java servers" },
                    { name:"`p!pepsi`", value:"Get info about the economy system built into the bot" },
                    { name:"`p!music`", value:"See the music commands for the bot" },
                    { name:"`p!gayrate <something>`", value:"See how gay something is" },
                    { name:"`p!guess`", value:"Play a guessing game" },
                    { name:"`p!rps <rock|paper|scissors>`", value:"Rock, paper and scissors" },
                    { name:"`p!userinfo <user or id>`", value:"Displays user info" },
                    { name:"`p!choose thing1 thing2`", value:"Make me pick things" },
                    { name:"`p!pepi`", value:"See if pepi is online, offline, idle or dnd" },
                    { name:"`p!choose <thing1> <thing2>`", value:"Choose between two options" },
                    { name:"`p!copper`", value:"Copper ig" },
                )
                .setTimestamp();
            message.channel.send({ embeds:[embed] });
        } else if (args[0] == "2") {
            const embed = new EmbedBuilder()
                .setColor("#FF0000")
                .setAuthor({ name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80" })
                .setTitle("Command list for peepee's helper (page 2)")
                .addFields(
                    { name:"`p!dog`", value:"Get a dog image" },
                    { name:"`p!cat`", value:"Get a cat image" },
                )
                .setTimestamp();
            message.channel.send({ embeds:[embed] }); 
        }
        
    },
};
