const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Serveur Arcanite WL')
            .setDescription('Voici le serveur ArcaniteRP / FiveM !\nUn serveur WL et serious RP nous sommes en recherche de plusieurs personnes qui voudrait faire du RP [ LSPD/EMS/Civil/Gang/Organisations ].\nAlors si tu veux faire du bon RP vient donc sur notre serveur puis créer un ticket si vous voulez faire un projet quelconque !')
            .setColor('#ff0000')
            .addField('Comment nous rejoindre ?', 'Pour nous rejoindre vous devez cliquer sur le titre de ce message.')
            .addField('Comment ce WL sur le serveur ?', 'Pour ce WL sur notre serveur vous devez vous connecter sur le channel dédier pour passer votre WL.')
            .setAuthor('Arcanite', 'https://media.discordapp.net/attachments/814092340880736256/814804879015936050/Arcanite.png.gif', 'https://discord.gg/DM2aurcvNt')
            .setImage('https://media.discordapp.net/attachments/814092340880736256/814805704581578762/baniereAcr.png')
            .setThumbnail('https://media.discordapp.net/attachments/814092340880736256/814804879015936050/Arcanite.png.gif')
            .setFooter('Rejoins nous !', 'https://media.discordapp.net/attachments/814092340880736256/814804879015936050/Arcanite.png.gif')
            .setTimestamp()
            .setURL('https://discord.gg/DM2aurcvNt'))

    },
    name: "embed"
}