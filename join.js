
module.exoports = class JoinCommand extends BaseCommand {
    constructor (){
        super('join','music', []);
    }

    async run (client, message, args){
        const { channel } = message.member.voice;
        if(channel){
            const player = client.music.players.spawn({
                guild: message.guild,
                voiceChannel: voiceChannel,
                textChannel: message.channel,

            });
        } 
        else{
            message.channel.send('Please join a voice channel');
        }
    }
}