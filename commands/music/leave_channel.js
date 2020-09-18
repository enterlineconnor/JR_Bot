const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'music',
            memberName: 'leave',
            description: 'leaves channel of commander'
        });
    }

    async run(message, args) {
    const conn = message.guild.voiceConnection;
    message.reply(conn);
 
        if (conn) {
            conn.disconnect();
        }
        else {
            message.reply("I must be in a voice channel to kick me dumbass");
        }

    }
}

module.exports = LeaveChannelCommand;