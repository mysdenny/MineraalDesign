const discord = require("discord.js");

module.exports.run = async(bot, message, arguments) => {


    var serverEmbed = new discord.RichEmbed()
    .setDescription("Mineraalwater info")
    .setColor("#42f5aa")
    .addField("Bot naam", bot.user.username)
    .addField("Je bent gejoint op", message.member.joinedAt)
    .addField("Totaal leden", message.guild.memberCount)
return message.channel.send(serverEmbed);
        
       

}

module.exports.help ={
    name: "serverinfo"
}