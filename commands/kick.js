const { EmbedBuilder } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;
module.exports = {
    name:"kick",
    description:"Kicks a mentioned user",
    execute: async (client, message, args) => {
        const guild = await client.guilds.fetch(message.guildId);
        if (!args[0]) {
            message.channel.send("Please mention someone to kick or provide their id");
        } else if (args[0]) {
            if (!guild.members.me.permissions.has("KickMembers")) {
                message.channel.send("I cannot kick this person");
                return; 
            } else if (!message.member.permissions.has("KickMembers")) {
                message.channel.send("You do not have perms to kick `"`${args[0]}\````);
            } 
            const rawid1 =  args[0].replace("@", "");
            const rawdid2 = rawid1.replace("<", "");
            const id = rawdid2.replace(">", "");
            const reason = args?.slice(1).join(" ") ?? "No reason provided";
            console.log(id);
            const mod_log = new EmbedBuilder()
                .setTitle("User was kicked")
                .setColor("#ff0000")
                .setDescription(`<@${id}> was kicked because of ${reason} \n Responsible Moderator: ${message.author}`)
                .setTimestamp();
            client.channels.cache.get("872196978010882109").send({ embeds:[mod_log] });
            try {
                const embed = new EmbedBuilder()
                    .setTitle("You were kicked from The PepiOnLine SMP")
                    .setColor("#ff0000")
                    .setDescription(`You were kicked because of ${reason}`)
                    .setTimestamp();
                client.users.send(id, { embeds:[embed] });
            }
            catch (error) {
                console.log("unable to dm");
            }
            wait(4000);
            guild.members.kick(id)
                .then(user => message.channel.send(`<@${id}> was successfully kicked \n Because of ${reason}`))
                .catch((err) => {
                    message.channel.send(`An error occorred: ${err}`);
                });
        }
    },
};