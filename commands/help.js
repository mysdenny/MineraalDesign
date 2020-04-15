const discord = require("discord.js");

module.exports.run = async(bot, message, arguments) => {

    var serverEmbed = new discord.RichEmbed()
    .setDescription("Alle commands")
    .setColor("#42f5aa")
    .addField("Speler commands", "Dit zijn de commands die spelers kunnen gebruiken")
    .addField("!help", "Geeft commando lijst")
    .addField("!ip", "Geeft het ip")
    .addField("!cijferip", "Geeft het ip")    
    .addField("!idee", "Geef je idee aan ons")
    .addField("!level", "Geeft je level")
    .addField("!serverinfo", "Geeft info over de server")
    .addField("!ticket", "Maakt een ticket")    
    .addField("!idee", "Geef je idee aan ons")
return message.channel.send(serverEmbed);


}

module.exports.help ={
    name: "help"
}