const {EmbedBuilder } = require('discord.js');
const { send } = require('node:process');
const prettyMilliseconds = require('pretty-ms')
const wait = require('node:timers/promises').setTimeout;
module.exports = {
	name:'ping',
	description:'Shows bot latency',
	async execute(client, message, args) {
		const sent = await message.channel.send({ content: 'Pinging...', fetchReply: true });
		wait(4000)
		const embed = new EmbedBuilder()
        .setColor("#ff0000")
        .setTitle("Peepee's helper latency and uptime ")
        .addFields(
            {name:"Bot latency", value:`${client.ws.ping}` + 'ms'},
            {name:"Bot uptime", value:`${prettyMilliseconds(client.uptime)}`},
			{name:"Round trip latency", value: `${sent.createdTimestamp - message.createdTimestamp}ms`}
            )
        .setTimestamp()
		await sent.edit({embeds:[embed]});
	},
};