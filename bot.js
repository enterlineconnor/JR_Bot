const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroup('simple','Simple');
bot.registry.registerGroup('music','Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('ready',function(){
    console.log("Ready");
})

var isReady = true;

bot.on('message', function(message){
    if(isReady && message.content == '!hulk')
    {
        // message.channel.reply('Hello '+ message.author + ', how are you?');
      

    }
}).listen(process.env.PORT || 5000);

bot.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret