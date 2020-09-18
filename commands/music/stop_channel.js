
const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');

class StopChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'stop',
            group: 'music',
            memberName: 'stop',
            description: 'join channel of commander'
        });
    }

    async run(message, args) {
        if (message.member.voice.channel.join()) {

            if (!message.guild.voiceConnection) {

                message.member.voice.channel.leave();
                   
            }
        }
        else {
            message.reply("you must be in a voice channel to summon me!");
        }

    }
}

module.exports = StopChannelCommand;