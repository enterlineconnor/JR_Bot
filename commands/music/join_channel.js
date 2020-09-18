
const commando = require('discord.js-commando');

class JoinChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'join channel of commander'
        });
    }

    async run(message, args) {
        if (message.member.voice.channel.join()) {

            if (!message.guild.voiceConnection) {

                message.member.voice.channel.join()
                    .then(connection => {
                        message.reply("HOLY SHIT KING!");
                        const dispatcher = connection.play('https://www.youtube.com/watch?v=dWpeOSlOTtc');
                    })
            }
        }
        else {
            message.reply("you must be in a voice channel to summon me!");
        }

    }
}

module.exports = JoinChannelCommand;