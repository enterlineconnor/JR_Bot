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
    if(isReady && message.content == '!hulk')
    {
        // message.channel.reply('Hello '+ message.author + ', how are you?');
      

    }
}).listen(process.env.PORT, '0.0.0.0');

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret