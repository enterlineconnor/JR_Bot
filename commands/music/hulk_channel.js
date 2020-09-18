
const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');

class HulkChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'hulk',
            group: 'music',
            memberName: 'hulk',
            description: 'join channel of commander'
        });
    }

    async run(message, args) {
        if (message.member.voice.channel.join()) {

            if (!message.guild.voiceConnection) {

                message.member.voice.channel.join()
                    .then(connection => {
                        message.reply("HULKAMANIA IS RUNNIN WILD!!!");
                        connection.play(ytdl('https://www.youtube.com/watch?v=dWpeOSlOTtc', { filter: 'audioonly' }));
                    })
            }
        }
        else {
            message.reply("you must be in a voice channel to summon me!");
        }

    }
}

module.exports = HulkChannelCommand;