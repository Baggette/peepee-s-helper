const {MessageEmbed} = require('discord.js')
module.exports ={
    name:"commands",
    description:"Lists in game commands",
    execute(message,args){
        const embed = new MessageEmbed()
        .setColor("#FF0000")
        .setAuthor({name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80"})
        .setTitle('In Game Command List for The PepiOnLine SMP')
        .addFields(
            {name:"Homes", value:"You have 3 'homes', they're basically teleportation points that you can tp to at any time. \n `/sethome <homename>` to set your home where ever you were standing when the command was ran \n `/delhome <homename>` to remove a sethome \n `/home <homename>` to teleport to your set home"},
            {name:"Teleportation", value:"Commands for teleportation around The PepiOnLine SMP \n `/tpa <user>` sends a teleportation request to teleport to them \n `/tpahere <user>` sends a request to have someone teleported to you \n `/tpaccept`, `/tpyes` to accept a request that was sent to you \n `/tpcancel`, `/tpno` to reject or cancel a teleportation request \n `/spawn` to teleport to spawn at any time"},
            {name:"Economy and Quickshop", value:"Commands for the creation of shops and the usage of the in game economy \n `/balance` shows your balance of in game currency on the SMP \n `/balancetop` displays a leaderboard of who has the most money on the SMP \n `/qs create <price> <item in your main hand>` to create a shop (costs 10$ of in game currency) \n `/qs remove` to remove a shop that you created \n `/qs price <price>` to change your shop's price \n `/worth` to see how much an item is worth (item has to be in your mainhand) \n `/sell hand` sells the item in your hand for in game currency (has to be sellable) \n `/pay <user> <amount>` to give a player money"},
            {name:"Dynmap", value:"Dynmap is a thing that allows you to view the server's map from your browser \n The map can be found at this link: \n http://pepionline.mc.dimitrodam.com:8079/ \n `/dynmap hide` to hide your player from being viewed from the map \n `/dynmap show` to show your player on the map (on by default)"}
        )
        .setTimestamp()
        message.channel.send({embeds:[embed]})
    }
}
