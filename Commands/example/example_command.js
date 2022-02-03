const { MessageEmbed } = require('discord.js');
const config = require('../../../config.json');

module.exports = {
    name: 'example',
    aliases: [''],
    permissions: [],
    cooldown: 0,

    async execute(message, args, commandName, client, Discord) {
        
            const response = new MessageEmbed()
                .setColor(config.embed_color)
                .setTitle(`Example.`)
                .setDescription(`This is an example command.`)
              
            
            message.reply({ embeds: [response] })
        
            
        
    }
};