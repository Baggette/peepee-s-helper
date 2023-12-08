const { EmbedBuilder, SlashCommandBuilder } =  require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("copper")
        .setDescription("Idk why this is a thing"),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle("Copper")
            .setDescription("Copper was first used by man over 10,000 years ago. A copper pendant discovered in what is now northern Iraq has been dated about 8700 B.C. For nearly five millennia copper was the only metal known to man, and thus had all the metal applications. \n \
    Early copper artifacts, first decorative, then utilitarian, were undoubtedly hammered out from \"native copper,\" pure copper found in conjunction with copper-bearing ores in a few places around the world. By 5000 BC, the dawn of metallurgy had arrived, as evidence exists of the smelting of simple copper oxide ores such as malachite and azurite.\n \
    Not until about 4000 BC did gold appear on the scene as man's second metal. By 3000 B.C., silver and lead were being used and the alloying of copper had begun, first with arsenic and then with tin. For many centuries, bronze reigned supreme, being used for plows, tools of all kinds, weapons, armor, and decorative objects. Though copper came from the island of Cyprus-from whence its name-and numerous other sites in the Middle East, the origin of the tin in the bronze is still a mystery.\n \
    The Bronze Age suddenly ended at about 1200 BC, with the general collapse of the ancient world and the interruption of international trade routes. The supply of tin in particular dried up and the Iron Age was ushered in, not because iron was a superior material, but because it was widely available. The deliberate alloying of iron with carbon to form the first steels did not occur for centuries.\n \
    Economy in the use of copper and its alloys was necessitated by these early trade interruptions, and this efficiency in use and re-use has continued from that day to this.")
            .setColor("#ff0000")
            .setTimestamp();
        await interaction.reply({ embeds:[embed] });    
    },
};