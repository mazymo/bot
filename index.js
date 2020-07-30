var Discord = require('discord.io');
var bot = new Discord.Client
({
    token: 'NzM3NTIxNTgwOTUwODE0NzYx.Xx-kfw.o_ND4BHotRBP51sryF4cI5H11Ro',
    autorun: true
});
bot.on('ready', function (evt)
{
   console.log('Bot Encendido');
});
bot.on('message', function (user, userID, channelID, message, evt)
{
	if (message.substring(0, 1) == '-')
    {
        var args = message.substring(1).split(' ');

        // Get CMD and arguments, if applicable
        var cmd = args[0];
        args = args.splice(1);

        switch (cmd)
        {
            case 'test':
			{
				bot.sendMessage
				({
					to: channelID,
					message: 'Mensaje de prueba'
				});
				break;
			}
			case 'ayuda':
			{
				bot.sendMessage
				({
					to: channelID,
					"embed": 
					{
						"title": "Estos son los comandos disponibles para que uses.",
						"description": "```\nTe recuerdo que estoy aprendiendo todavía.```",
						"thumbnail": {
						"url": "https://i.imgur.com/PAEuOY9.png"
					},
						"image": {
							"url": "https://i.imgur.com/PAEuOY9.png"
						},
						"author": {
							"name": "San Andreas",
							"url": "",
							"icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
						},
						"fields": [
						{
							"name": "-Foro",
							"value": "Te mostraré la dirección de nuestro foro."
						},
						{
							"name": "-Discord",
							"value": "Te mostraré el link de invitación del servidor DS."
						},
						{
							"name": "-IP",
							"value": "Te mostraré la dirección IP del servidor SAMP."
						},
						{
							"name": "-Estado",
							"value": "Te mostraré la información del servidor SAMP (jugadores, ping, etc).",
						}
					]
					}
				});
				break;
			}
			case 'ip':
			{
				bot.sendMessage
				({
					to: channelID,
					message: 'Esta es la Dirección IP del servidor SAMP: 144.217.19.107:7778 Espero verte en el servidor.'
				});
				break;
			}
			case 'foro':
			{
				bot.sendMessage
				({
					to: channelID,
					message: 'Aquí tienes el link del foro: http://sa-roleplay.ml'
				});
				break;
			}
			case 'discord':
			{
				bot.sendMessage
				({
					to: channelID,
					message: 'Aquí tienes el link de invitación: https://discord.gg/hPRGAAz'
				});
				break;
			}
			case 'estado':
			{
				bot.sendMessage
				({
					to: channelID,
					message: 'Estoy aprendiendo esta caracteristica, te pido paciencia :D'
				});
				break;
			}
		}
    }
});

