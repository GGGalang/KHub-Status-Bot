const { MessageEmbed } = require('discord.js');
const config = require('../../../config.json');

module.exports = {
    name: 'unban',
    aliases: [''],
    permissions: ['BAN_MEMBERS'],
    cooldown: 0,

    async execute(message, args, commandName, client, Discord) {

        let userID = args[0];
        const noUser = new Discord.MessageEmbed()
            .setTitle('Error!')
            .setDescription(`I couldnt find a banned user with the id: \`${userID}\``)
            .setColor(config.color)
            



        message.guild.bans.fetch().then(bans => {
            if (bans.size == 0) return
            let bUser = bans.find(b => b.user.id == userID)
            if (!bUser) return message.reply({ embeds: [noUser] })

            const unbanned = new Discord.MessageEmbed()
                .setTitle('Disguard')
                .setDescription(`Successfully unbanned \`${bUser.user.tag}\`.`)
                .setColor(config.color)
                

            message.guild.members.unban(bUser.user)

            message.reply({ embeds: [unbanned] })
        })
    
    }
};