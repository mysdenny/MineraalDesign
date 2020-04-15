const discord = require("discord.js");

module.exports.run = async(bot, message, arguments) => {

    var serverEmbed = new discord.RichEmbed()
    .setDescription("Alle commands")
    .setColor("#42f5aa")
    .addField("Bezoeker commands", "Dit zijn de commands die bezoekers kunnen gebruiken")
    .addField("!help", "Geeft commando lijst")
    .addField("!mineraalwater", "Geeft de mineraalwater discord")  
    .addField("!serverinfo", "Geeft info over de server")
    .addField("!ticket", "Maakt een ticket")    
    .addField("!review", "Geef een beoordeling")
return message.channel.send(serverEmbed);


}

module.exports.help ={
    name: "help"
}