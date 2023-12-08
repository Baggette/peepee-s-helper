const { EmbedBuilder } = require("discord.js");
const fs = require("fs");
module.exports = {
    name:"queue",
    description:"Shows the current queue for songs",
    execute(client, message, args) {
        const play = "▶️";
        const pause = "⏸️";
        const queue = client.distube.getQueue(message);
        const nothing_playing_embed = new EmbedBuilder()
            .setColor("#f5e942")
            .setDescription("There is nothing playing!")
            .setTimestamp();
        if (!queue) return message.channel.send({ embeds:[nothing_playing_embed] });
        if (parseInt(args[0]) <= 1 || parseInt(args[0]) === NaN || !args[0]) {
            const songs = queue.songs
                .map((song, pos) => {
                    return `${
                        pos === 0 ? "Behold, the server queue (max 20 at a time) \n Run p!queue <page number> to see more pages\n Current:" : `#${pos}.`
                    } **${song.name}** \`[${
                        song.formattedDuration
                    }]\``;
                })
                .slice(0, 20)
                .join("\n");

            const embed = new EmbedBuilder()
                .setColor("#FF0000")
                .setDescription(
                    `${(
                        `${
                            queue.songs.length > 20
                                ? `1-20/${queue.songs.length}`
                                : queue.songs.length
                        } songs):`,
                        queue.paused
                            ? pause
                            : play
                    )}\n${songs}`,
                );

            message.channel.send({
                embeds: [embed],
            });
        } else if (parseInt(args[0]) >= 2) {
            try {const songs = queue.songs
                .map((song, pos) => {
                    return `${
                        pos === parseInt(args[0]) * 20 - 20 ? `Behold, the server queue (max 20 at a time) \n Run p!queue <page number> to see more pages\n #${parseInt(args[0]) * 20 - 20}:` : `#${pos}.`
                    } **${song.name}** \`[${
                        song.formattedDuration
                    }]\``;
                })
                .slice(parseInt(args[0]) * 20 - 20, parseInt(args[0]) * 20)
                .join("\n");

            const embed = new EmbedBuilder()
                .setColor("#FF0000")
                .setTitle(`**Page ${parseInt(args[0])}**`)
                .setDescription(
                    `${(
                        `${
                            queue.songs.length > 20
                                ? `${parseInt(args[0]) * 20 - 20}-${parseInt(args[0]) * 20}/${queue.songs.length}`
                                : queue.songs.length
                        } songs):`,
                        queue.paused
                            ? pause
                            : play
                    )}\n${songs}`,
                );

            message.channel.send({
                embeds: [embed],
            });}
            catch (err) {
                const songs = queue.songs
                    .map((song, pos) => {
                        return `${
                            pos === 0 ? `**An error occurred running your command. Is the page number invalid?** \n **${err}**\n Current:` : `#${pos}.`
                        } **${song.name}** \`[${
                            song.formattedDuration
                        }]\``;
                    })
                    .slice(0, 20)
                    .join("\n");

                const embed = new EmbedBuilder()
                    .setColor("#FF0000")
                    .setDescription(
                        `${(
                            `${
                                queue.songs.length > 20
                                    ? `1-20/${queue.songs.length}`
                                    : queue.songs.length
                            } songs):`,
                            queue.paused
                                ? pause
                                : play
                        )}\n${songs}`,
                    );

                message.channel.send({
                    embeds: [embed],
                });
            }
        }
        
    },
};
