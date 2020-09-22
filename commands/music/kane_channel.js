
const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');

class KaneChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'kane',
            group: 'music',
            memberName: 'kane',
            description: 'Play Kane theme'
        });
    }

    async run(message, args) {
        if (message.member.voice.channel.join()) {

            if (!message.guild.voiceConnection) {

                message.member.voice.channel.join()
                    .then(connection => {
                        message.reply("*falls out of chair*");
                        connection.play(ytdl('https://www.youtube.com/watch?v=vlpLYBuTN04', { filter: 'audioonly' }));
                    })
            }
        }
        else {
            message.reply("you must be in a voice channel to summon me!");
        }

    }
}

module.exports = KaneChannelCommand;