
const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');

class KurtChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'kurt',
            group: 'music',
            memberName: 'kurt',
            description: 'Play Kurt Angle theme'
        });
    }

    async run(message, args) {
        if (message.member.voice.channel.join()) {

            if (!message.guild.voiceConnection) {

                message.member.voice.channel.join()
                    .then(connection => {
                        message.reply("OH GOD NOT THIS ASS@*&$!");
                        connection.play(ytdl('https://www.youtube.com/watch?v=jYRKvdEJSJc&t=1s', { filter: 'audioonly' }));
                    })
            }
        }
        else {
            message.reply("you must be in a voice channel to summon me!");
        }

    }
}

module.exports = KurtChannelCommand;