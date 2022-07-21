const {EmbedBuilder} = require('discord.js')
module.exports ={
    name:"economy",
    description:"Displays infomation about the in game economy",
    execute(message,args){
        const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setAuthor({name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80"})
        .setTitle("General economy prices")
        .setDescription("*This may not be a complete list. For more information run `/worth` with an item in your mainhand. Refer to `p!commands` for economy commands")
        .addFields(
            {name:"Crops and Food", value:"Bread - $0.06 \n Baked Potato - $0.03 \n Wheat - $0.02 \n Potato - $0.02 \n Carrot - $0.02 \n Beetroot - $0.02 \n Melon Slice - $0.02"},
            {name:"Items", value:"Enchanted Golden Apple - $500 \n Nether Star - $300 \n Prismarine Shard - $0.10 \n Lead - $0.10 \n Wither Skeleton Skull - $25 \n Blaze Rod - $0.10"},
            {name:"Ores", value:"Netherite Ingot - $25 \n Netherite Scrap - $5 \n Amethyst Shard - $0.10 \n Diamond - $2"},
            {name:"Blocks", value:"Glass - $0.05 \n Obsidian - $0.10"}
        )
        .setTimestamp()
        message.channel.send({embeds:[embed]})
    }
}
