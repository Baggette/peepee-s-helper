const util = require('minecraft-server-util');
const {MessageEmbed, MessageSelectMenu} = require('discord.js');
const options = {
    timeout: 1000 * 5, // timeout in milliseconds
    enableSRV: true // SRV record lookup
};
module.exports ={
    name:"status",
    description:"Minecraft server status",
    execute(message, args, client){
        
        util.status('pepionline.dimitrodam.com ', 25581, options)
    .then((result) => {
        
        const string1 = JSON.stringify(result);
        const string = JSON.parse(string1);
        const embed = new MessageEmbed()
    .setColor("#FF0000")
    .setAuthor({name: "Peepee's Helper", iconURL: "https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80"})
    .setTitle("PepiOnLine SMP Server Status")
    .setDescription("This displays the status and info about the Minecraft server")
    .addFields(
        {name:"Server Version", value: `${string.version.name}`},
        {name:"Server Protocol Version", value:`${string.version.protocol}`},
        {name:"Players Online", value:`${string.players.online}`},
        {name:"Max Players", value:`${string.players.max}`},
        {name:"MOTD (May Not Display Accurately)", value:`${string.motd.clean}`},
        {name:"Latency", value:`${string.roundTripLatency}`},
    )
    .setTimestamp()
    message.channel.send({embeds: [embed]})
    })
    
    .catch((error) => console.error(error));
    
    
    
}
    
}
