const discord = require("discord.js");

module.exports.run = async(bot, message, arguments) => {

    var serverEmbed = new discord.RichEmbed()
    .setDescription("Alle commands")
    .setColor("#42f5aa")
    .addField("Staff commands", "Dit zijn de commands die staff kan gebruiken")
    .addField("!clear", "Haalt berichten weg")
    .addField("!giveaway", "Maak een giveaway aan")
    .addField("!kick", "Kick een speler")    
    .addField("!sluit", "Voor een ticket te sluiten")
    .addField("!warn", "Geef spelers een waarschuwing")
return message.channel.send(serverEmbed);

}

module.exports.help ={
    name: "staffhelp"
}