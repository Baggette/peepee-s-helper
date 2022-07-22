const {EmbedBuilder} = require('discord.js')
module.exports ={
    name:"commands",
    description:"Lists in game commands",
    execute(client, message, args){
        const embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setAuthor({name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80"})
        .setTitle('In Game Command List for The PepiOnLine SMP')
        .addFields(
            {name:"Homes", value:"Commands for setting and teleporting to homes \n You have 3 'homes', which are basically teleportation points that you can tp to at any time. \n `/sethome <homename>` to set a home at your current position. \n `/delhome <homename>` to remove a home \n `/home <homename>` to teleport to your home"},
            {name:"Teleportation", value:"Commands for teleportation around The PepiOnLine SMP \n `/tpa <user>` sends a teleportation request asking to teleport to them \n `/tpahere <user>` sends a request to have someone teleported to you \n `/tpaccept`, `/tpyes` to accept a request that was sent to you \n `/tpdeny`, `/tpno` to reject or cancel a teleportation request \n `/spawn` to teleport to spawn at any time \n `/warps` to view the warp list \n `/warp <warpname>` to teleport directly to that warp"},
            {name:"Economy and Quickshop", value:"Commands for the creation of shops and usage of the in game economy system \n `/balance`, `/bal` shows the amount of in-game currency you currently have \n `/balancetop`, `/baltop` displays a leaderboard of who has the most money on the SMP \n `/qs create <price> <item in your main hand>` to create a shop (costs 10$ of in game currency) \n `/qs remove` to remove a shop that you created \n `/qs price <price>` to change your shop's price \n `/worth` to see how much the item in your mainhand is worth \n `/sell hand` sells the item in your hand for in game currency (assuming it has a worth) \n `/pay <user> <amount>` to give a player money"},
            {name:"Dynmap", value:"Commands related to Dynmap \n Dynmap is a plugin that allows you to view the server's map from your browser \n The map can be found here: \n http://pepionline.mc.dimitrodam.com:8079/ \n `/dynmap hide` to hide your player from being viewed from the map \n `/dynmap show` to show your player on the map (on by default)"},
            {name:"Others", value:"Commands that don't fit into the other sections \n `/msg <user>` to send a message to a player \n `/r` to reply to the last message you received"}
        )
        .setTimestamp()
        message.channel.send({embeds:[embed]})
    }
}
