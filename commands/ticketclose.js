const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Id van category van tickets.
    const categoryId = "683342933126021173";
 
    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("Gelieve dit commando in een ticket kanaal te doen.");
 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Hoi, " + message.channel.name , "zijn ticket is gesloten")
        .setDescription("De ticket is gemarkeerd als **compleet**. Was het perongelijk vraag hem een nieuwe te maken met !ticket")
        .setFooter("ticket gesloten");
 
    // Vind kanaal voor de logs.
    var logChannel = message.guild.channels.find("name", "log");
    if (!logChannel) return message.channel.send("Kanaal bestaat niet");
 
    logChannel.send(embedCloseTicket);
 
}
 
module.exports.help = {
    name: "sluit",
    description: "Sluit een ticket af"
}