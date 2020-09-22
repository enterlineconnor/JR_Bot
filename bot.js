const Commando = require('discord.js-commando');
const client = new Commando.Client();
client.registry.registerGroup('simple','Simple');
client.registry.registerGroup('music','Music');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + '/commands');

client.on('ready',function(){
    console.log("Ready");
})

var isReady = true;

client.on('message', function(message){
    //Example of simple message/reponse to bot
    if(isReady && message.content == '!Hello')
    {
         message.channel.reply('Hello '+ message.author + ', how are you?');
    
    }
});

client.login(process.env.BOT_TOKEN);