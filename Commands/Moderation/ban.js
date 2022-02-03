const { MessageEmbed } = require('discord.js');
const config = require('../../../config.json');

module.exports = {
    name: 'ban',
    aliases: [''],
    permissions: ['BAN_MEMBERS'],
    cooldown: 0,

    async execute(message, args, commandName, client, Discord) {
    
        let reason = args.slice(1).join(' ');
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let guilddd = message.guild
        const noMember = new Discord.MessageEmbed()
            .setTitle('Error!')
            .setDescription(`Please mention a valid member! Make sure the member is in the guild.`)
            .setColor(config.color)
         

        if (!member) return message.reply({ embeds: [noMember] })

        if (!reason) {
            reason = "No reason provided!"
        }
        const moderatorTag = message.author.tag
        const dmEmbed = new Discord.MessageEmbed()
            .setTitle('Warning!')
            .setDescription(`You were banned from \`${guilddd.name}\`!`)
            .addField('Moderator', `\`${moderatorTag}\``)
            .addField('Reason', `\`${reason}\``)
            .setColor(config.color)

        const actionEmbed = new Discord.MessageEmbed()
            .setTitle('Disguard')
            .setDescription(`Successfully banned \`${member.user.tag}\` for the reason: \`${reason}\``)
            .addField('Sent message to user', '\`true\`')
            .setColor(config.color)
           
        const actionEmbedNoDm = new Discord.MessageEmbed()
            .setTitle('Disguard')
            .setDescription(`Successfully banned \`${member.user.tag}\` for the reason: \`${reason}\``)
            .addField('Sent message to user', '\`false\`')
            .setColor(config.color)
           

        member.send({ embeds: [dmEmbed] }).then(function () {

            message.guild.members.ban(member, { reason: reason })
            message.reply({ embeds: [actionEmbed] })

        }).catch(function () {

            message.guild.members.ban(member, { reason: reason })
            message.reply({ embeds: [actionEmbedNoDm] })

        });
    
    }
};