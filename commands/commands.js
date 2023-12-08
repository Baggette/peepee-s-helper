const { EmbedBuilder } = require("discord.js");
module.exports = {
    name:"commands",
    description:"Lists in game commands",
    execute(client, message, args) {
        const embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setAuthor({ name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80" })
            .setTitle("Ingame command list for the PepiOnLine SMP")
            .addFields(
                { name:"Homes", value:"Commands for setting and teleporting to homes \n You have 3 'homes', which are basically teleportation points that you can tp to at any time. \n `/sethome <homename>` to set a home at your current position. \n `/delhome <homename>` to remove a home \n `/home <homename>` to teleport to your home" },
                { name:"Teleportation", value:"Commands for teleportation around The PepiOnLine SMP \n `/tpa <user>` sends a teleportation request asking to teleport to them \n `/tpahere <user>` sends a request to have someone teleported to you \n `/tpaccept`, `/tpyes` to accept a request that was sent to you \n `/tpdeny`, `/tpno` to reject or cancel a teleportation request \n `/spawn` to teleport to spawn at any time \n `/warps` to view the warp list \n `/warp <warpname>` to teleport directly to that warp" },
                { name:"Others", value:"Commands that don't fit into other sections \n `/msg <user>` to send a message to a player \n `/r` to reply to the last message you received" },
            )
            .setTimestamp();
        message.channel.send({ embeds:[embed] });
    },
};
