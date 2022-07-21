const Economy = require('discord-economy-super');
const {EmbedBuilder} = require('discord.js');
const { execute } = require('./work');
const eco = new Economy({
    storagePath: './storage.json', // Full path to a JSON File. Default: './storage.json'.
    checkStorage: true, // Checks the if database file exists and if it has errors. Default: true.
    dailyCooldown: 60000 * 60 * 24, // Daily Cooldown, ms (24 Hours = 1 Day). Default: 24 Hours (60000 * 60 * 24) ms.
    workCooldown: 60000 * 60, // Work Cooldown, ms (1 Hour). Default: 1 Hour (60000 * 60) ms.
    weeklyCooldown: 60000 * 60 * 24 * 7, // Cooldown for Weekly Command (in ms). Default: 7 Days (60000 * 60 * 24 * 7) ms
    dailyAmount: 100, // Daily Amount. Default: 100.
    workAmount: [0, 100], // Work Amount: first element is min value, second is max value (It also can be a Number). Default: [10, 50].
    weeklyAmount: 1000, // Amount of money for Weekly Command. Default: 1000.
    updateCountdown: 1000, // Checks for if storage file exists in specified time (in ms). Default: 1000.
    dateLocale: 'en', // The region (example: ru; en) to format date and time. Default: 'ru'.
    updater: {
          checkUpdates: true, // Sends the update state message in console on start. Default: true.
          upToDateMessage: true // Sends the message in console on start if module is up to date. Default: true.
      },
      errorHandler: {
          handleErrors: true, // Handles all errors on start. Default: true.
          attempts: 5, // Amount of attempts to load the module. Use 'null' for infinity attempts. Default: 5.
          time: 3000 // Time between every attempt to start the module. Default: 3000.
      },
      optionsChecker: {
          ignoreInvalidTypes: false, // Allows the method to ignore the options with invalid types. Default: false.
          ignoreUnspecifiedOptions: false, // Allows the method to ignore the unspecified options. Default: false.
          ignoreInvalidOptions: false, // Allows the method to ignore the unexisting options. Default: false.
          showProblems: false, // Allows the method to show all the problems in the console. Default: false.
          sendLog: false, // Allows the method to send the result in the console. Default: false.
          sendSuccessLog: false // Allows the method to send the result if no problems were found. Default: false.
      }
  });
  module.exports={
    name:"shop",
    description:"shop",
    execute(message, args, client, member){
        if(args[0] === "help"){
            const help_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(`Shop help and command list`)
            .addFields(
                {name:"`p!shop add <item name> <price> <message(optional)> <description(optional)> <amount of items to stock(optional)> <role(optional)>`", value:"adds an item to the shop"},
                {name:"`p!shop remove <item name>`", value:"remove an item from the shop"},
                {name:"`p!shop buy <item name>`", value:"Buy a desired item from the shop"},
                {name:"`p!shop search <item name>`", value:"Search for an item in the shop"},
                {name:"`p!shop clear`", value:"Clear the entire shop (remove all items)"},
                {name:"`p!shop inventory`", value:"See all items in your inventory"},
                {name:"`p!shop use <item name>", value:"Use a specfied item in your inventory"},
                {name:"`p!shop clear inventory`", value:"Removes all items in your inventory **run this command at your own risk, items will not be restored**"},
                {name:"`p!shop history`", value:"See your purchase history"},
                {name:"`p!shop clear history", value:"Clear your purchase history"},
            )
            .setTimestamp()
        }
        if(!args[0]){    
        const shop = eco.shop.list(message.guild.id)
        const embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setTitle("The shop is empty :(")
        .setTimestamp()
            if (!shop.length) return message.channel.send({embeds:[embed]})
            const shop_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setTitle("The pepsi coin shop")
            .setDescription(shop.map(item => `ID: **${item.id}** - **${item.itemName}** (**${item.price}** coins), description: **${item.description}**, max amount in inventory: **${item.maxAmount || Infinity}**. Role: ${item.role || '**This item don\'t give you a role.**'}`).join('\n'))
            .setTimestamp()
            message.channel.send({embeds:[shop_embed]})
        }
        if (args[0] === "add" && message.channel.id === "872195719082160198") {
            const item_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription('You need an item name (eg: `p!shop add <name> <price> <message(optional)> <description(optional)> <amount of items to stock(optional)> <role(optional)>`')
            .setTimestamp()
            if (!args[1]) return message.channel.send({embeds:[item_embed]})
            const price_specify_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription("Please spcify a price")
            .setTimestamp()
            if (!args[2]) return message.channel.send({embeds:[price_specify_embed]})
            eco.shop.addItem(message.guild.id, {
                itemName: args[1],
                price: args[2],
                message: args[3],
                description: args[4],
                maxAmount: args[5],
                role: args[6]
            })
            const success_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(`**${args[1]}** with a price of **${args[2]} pepsi's** was sucessfully added`)
            .setTimestamp()
            message.channel.send({embeds:[success_embed]})
        }
    
        if (args[0] === "remove" && message.channel.id === "872195719082160198") {
            const item_specify_embed = new EmbedBuilder
            .setColor("#FF0000")
            .setDescription("You did not specify a valid item ID or name.")
            .setTimestamp()
            if (!args[1]) return message.channel.send({embeds:[item_specify_embed]})
            const item = eco.shop.searchItem(args[1], message.guild.id)
            const item_not_found_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(`hmmmm I was unable to find ${args[1]} in the shop`)
            .setTimestamp()
            if (!item) return message.channel.send({embeds:[item_not_found_embed]})
            eco.shop.removeItem(args[1], message.guild.id)
            const item_removed_success_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(`${args[1]} was successfully removed from the shop`)
            .setTimestamp()
            return message.channel.send({embeds:[item_removed_success_embed]})
        }
    
        if (args[0] === "buy") {
            const balance = eco.balance.fetch(message.author.id, message.guild.id)
            const specify_item_name_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription("You have to specify an item name")
            .setTimestamp()
            if (!args[1]) return message.channel.send({embeds:[specify_item_name_embed]})
            const item = eco.shop.searchItem(args[1], message.guild.id)
            const could_not_find_item_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(`I could not find the item ${args[1]}`)
            .setTimestamp()
            if (!item) return message.channel.send({embeds:[could_not_find_item_embed]})
            const poor_man_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(`You do not have enough pepsi's (${balance}) to buy this item for ${item.price}`)
            .setTimestamp()
            if (item.price > balance) return message.channel.send({embeds:[poor_man_embed]})
            const purchase = eco.shop.buy(args[1], message.author.id, message.guild.id)
            const max_item_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(`You cannot have more than **${item.maxAmount}** of item **${item.itemName}**`)
            .setTimestamp()
            if (purchase == 'max') return message.channel.send({embeds:[max_item_embed]})
            const purchase_success = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(`You got item "**${item.itemName}**" for **${item.price}** pepsi's (tip use p!shop inventory to see your inventory and p!shop use <item> to use it)`)
            .setTimestamp()
            return message.channel.send({embeds:[purchase_success]})
        }
    
        if (args[0] === 'search') {
            const specify_item_to_search_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription('Specify an item ID or name to search.')
            .setTimestamp()
            if (!args[1]) return message.channel.send({embeds:[specify_item_to_search_embed]})
            const item = eco.shop.searchItem(args[1], message.guild.id)
            const item_not_found_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(`Unable to find item ${args[1]}`)
            .setTimestamp()
            if (!item) return message.channel.send({embeds:[item_not_found_embed]})
            const item_search_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(`Item info:\nID: **${item.id}**\nName: **${item.itemName}**\nPrice: **${item.price}** coins\nDesciption: **${item.description}**\nMessage on use: **${item.message}**\nMax amount in inventory: **${item.maxAmount || Infinity}**. Role: ${item.role || '**This item don\'t give you a role.**'}`)
            .setTimestamp()
            return message.channel.send({embeds:[item_search_embed]})
        }
    
        if (args[0] === "clear" && message.channel.id === "872195719082160198") {
            eco.shop.clear(message.guild.id)
            const shop_cleared_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription("The shop was cleared successfully")
            .setTimestamp()
            return message.channel.send({embeds:[shop_cleared_embed]})
        }
    
        if (args[0] === "inventory") {
            const inv = eco.inventory.fetch(message.author.id, message.guild.id)
            const no_inventory_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(`You do not have any items currently in your inventory`)
            .setTimestamp()
            if (!inv.length) return message.channel.send({embeds:[no_inventory_embed]})
            const inverntory_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(inv.map((x, i) => `ID: ${i + 1}: ${x.itemName} - ${x.price} coins (${x.date})`).join('\n'))
            .setTimestamp()
            return message.channel.send({embeds:[inverntory_embed]})
        }
    
        if (args[0] === "use") {
            const no_item_specified_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription('Specify an name or ID of item you have in your inventory.')
            .setTimestamp()
            if (!args[1]) return message.channel.send({embeds:[no_item_specified_embed]})
            const itemMessage = eco.inventory.useItem(args[1], message.author.id, message.guild.id, bot)
            const no_item_specified_in_inv_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(`Cannot find item ${args[1]} in your inventory.`)
            .setTimestamp()
            if (!itemMessage) return message.channel.send({embeds:[no_item_specified_in_inv_embed]})
            const item_message_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(itemMessage)
            .setTimestamp()
            return message.channel.send({embeds:[item_message_embed]})
        }
    
        if (args[0] === "clear" && args[1] === "inventory") {
            eco.inventory.clear(message.author.id, message.guild.id)
            const inv_cleared_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription('Your inventory was successfully cleared!')
            .setTimestamp()
            return message.channel.send({embeds:[inv_cleared_embed]})
        }
    
        if (args[0] === "history") {
            const history = eco.shop.history(message.author.id, message.guild.id)
            const no_purchases_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription("Your purchase history is empty")
            .setTimestamp()
            if (!history.length) return message.channel.send({embeds:[no_purchases_embed]})
            const purchase_history_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(history.map(x => `ID: ${x.id}: ${x.itemName} - ${x.price} coins (${x.date})`).join('\n'))
            .setTimestamp()
            return message.channel.send({embeds:[purchase_history_embed]})
        }
    
        if (args[0] === "clear" && args[1] === "history") {
            const cleared = eco.shop.clearHistory(message.author.id, message.guild.id)
            const unable_to_clear_history_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription('Couldn\'t clear your purchases history: Your history is already empty!')
            .setTimestamp()
            if (!cleared) return message.channel.send({embeds:[unable_to_clear_history_embed]})
            const purchase_history_cleared_embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription('Your purchases history was successfully cleared!')
            .setTimestamp()
            return message.channel.send({embeds:[purchase_history_cleared_embed]})
        }
    }
  }