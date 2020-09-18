
const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');

class JRChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'jr',
            group: 'music',
            memberName: 'jr',
            description: 'join channel of commander'
        });
    }

    async run(message, args) {
        if (message.member.voice.channel.join()) {

            if (!message.guild.voiceConnection) {

                message.member.voice.channel.join()
                    .then(connection => {
                        message.reply("AS GOD AS MY WITNESS HE IS BROKEN IN HALF");
                        connection.play(ytdl('https://www.youtube.com/watch?v=ypot3CYECwE', { filter: 'audioonly' }));
                    })
            }
        }
        else {
            message.reply("you must be in a voice channel to summon me!");
        }

    }
}

module.exports = JRChannelCommand;