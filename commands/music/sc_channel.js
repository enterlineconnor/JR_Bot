
const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');

class StoneColdChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'sc',
            group: 'music',
            memberName: 'sc',
            description: 'Play Stone Cold Steve Austin theme'
        });
    }

    async run(message, args) {
        if (message.member.voice.channel.join()) {

            if (!message.guild.voiceConnection) {

                message.member.voice.channel.join()
                    .then(connection => {
                        message.reply("STONE COLD, STONE COLD!!!");
                        connection.play(ytdl('https://www.youtube.com/watch?v=0xrSH0G8kBo', { filter: 'audioonly' }));
                    })
            }
        }
        else {
            message.reply("you must be in a voice channel to summon me!");
        }

    }
}

module.exports = StoneColdChannelCommand;