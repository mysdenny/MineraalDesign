const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const fs = require("fs");

const active = new Map();

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        bot.commands.set(fileGet.help.name, fileGet);

    })


})


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)

    bot.user.setActivity("MineraalDesign", { type: "PLAYING" });

});

bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);



    var commands = bot.commands.get(command.slice(prefix.length));


    var options = {

        active: active


    }


        
    //if (command === `${prefix}ip`) {

    //    return message.channel.send("Realtopia.serv.nu");
   // }

  // if (command === `${prefix}serverinfo`) {


  //     var serverEmbed = new discord.RichEmbed()
  //         .setDescription("Realtopia info")
  //         .setColor("#42f5aa")
  //         .addField("Bot naam", bot.user.username)
  //         .addField("Je bent gejoint op", message.member.joinedAt)
  //         .addField("Totaal leden", message.guild.memberCount)
  //     

  //     return message.channel.send(serverEmbed);

    
   // }


  //  if (command === `${prefix}info`) {

  //    var botIcon = bot.user.displayAvatarURL

  //    var botEmbed = new discord.RichEmbed()
  //        .setDescription("Realtopia bot info")
  //        .setColor("#42f5aa")
  //        .setThumbnail(botIcon)
  //        .addField("Bot naam", bot.user.username);

  //    return message.channel.send(botEmbed);


 //   }

   // if (command === `${prefix}help`) {

   //     return message.channel.send("Realtopia bot\nCommands:\nrt/ip                       (geeft het ip)\nrt/help                   (command lijst)"); 
 //   }

   //if (command === `${prefix}kick`) {

   //    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

   //    if(!kickUser) return message.channel.send("Gebruiker niet gevonden")

   //    var reason = arguments.join(" ").slice(22);

   //    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Dat kun je niet");

   //    if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kun je niet kicken");
   //    
   //    var kick = new discord.RichEmbed()
   //    .setDescription("Kick")
   //    .setColor("#ff0011")
   //    .addField("Gekickte geruiker", kickUser)
   //    .addField("Gekickt door", message.author)
   //    .addField("Reden", reason);

   //    var kickChannel = message.guild.channels.find(`name`, "straffen");
   //    if(!kickChannel) return message.guild.send("Kan het kanaal niet vinden")

   //    message.guild.member(kickUser).kick(reason);
   //    
   //    kickChannel.send(kick);

   //    return;

   // }
   

});


bot.login(botConfig.token);