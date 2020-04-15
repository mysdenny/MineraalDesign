const discord = require("discord.js");

module.exports.run = async(bot, message, arguments) => {

    var botIcon = bot.user.displayAvatarURL

    var botEmbed = new discord.RichEmbed()
        .setDescription("Mineraalwater bot info")
        .setColor("#42f5aa")
        .setThumbnail(botIcon)
        .addField("Bot naam", bot.user.username);

    return message.channel.send(botEmbed);
        
       

}

module.exports.help ={
    name: "info"
}