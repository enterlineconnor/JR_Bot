
const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');

class UndertakerChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'taker',
            group: 'music',
            memberName: 'taker',
            description: 'join channel of commander'
        });
    }

    async run(message, args) {
        if (message.member.voice.channel.join()) {

            if (!message.guild.voiceConnection) {

                message.member.voice.channel.join()
                    .then(connection => {
                        message.reply("OH GOD, HE'S SUPPOSED TO BE DEAD!!!");
                        connection.play(ytdl('https://www.youtube.com/watch?v=jya2eBCDcW0&t=2s', { filter: 'audioonly' }));
                    })
            }
        }
        else {
            message.reply("you must be in a voice channel to summon me!");
        }

    }
}

module.exports = UndertakerChannelCommand;