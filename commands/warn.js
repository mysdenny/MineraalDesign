const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json"));


module.exports.run = async(bot, message, arguments) => {


    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Sorry jij kan dit niet doen");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[0]));

    if(!user) return message.channel.send("Geef een gebruiker op of we zien de gebruiker niet");

    if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kan je niet warnen")

    var reason = arguments.join(" ").slice(22);

    if (!reason) return message.channel.send("Geef een reden op")

    if(!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if  (err) console.log(err);
    });

    var warnEmbed = new discord.RichEmbed()
    .setDescription("warn")
    .setColor("#ff0011")
    .addField("gewarnde geruiker", user)
    .addField("gewarnd door", message.author)
    .addField("Reden", reason);

    var warnChannel = message.guild.channels.find(`name`, "log");
    if(!warnChannel) return message.guild.send("Kan het kanaal niet vinden");

    warnChannel.send(warnEmbed);
       

}

module.exports.help ={
    name: "warn"
}