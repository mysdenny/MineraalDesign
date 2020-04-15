const discord = require("discord.js");

module.exports.run = async(bot, message, arguments) => {

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

    if(!kickUser) return message.channel.send("Gebruiker niet gevonden")

    var reason = arguments.join(" ").slice(22);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Dat kun je niet");

    if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kun je niet kicken");
    
    var kick = new discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#ff0011")
    .addField("Gekickte geruiker", kickUser)
    .addField("Gekickt door", message.author)
    .addField("Reden", reason);

    var kickChannel = message.guild.channels.find(`name`, "log");
    if(!kickChannel) return message.guild.send("Kan het kanaal niet vinden")

    message.guild.member(kickUser).kick(reason);
    
    kickChannel.send(kick);

    return;
        
       

}

module.exports.help ={
    name: "kick"
}