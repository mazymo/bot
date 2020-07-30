var Discord = require(‘discord.io’);
var logger = require(‘winston’);
var auth = require(‘./auth.json’);
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
colorize: true
});
logger.level = ‘debug’;
// Initialize Discord Bot
var bot = new Discord.Client({
token: auth.token,
autorun: true
});
bot.on(‘ready’, function (evt) {
logger.info(‘Connected’);
logger.info(‘Logged in as: ‘);
logger.info(bot.username + ‘ – (‘ + bot.id + ‘)’);
});
bot.on(‘message’, function (user, userID, channelID, message, evt) {
// Nuestro bot necesita saber si ejecutará un
// Escuchará los mensajes que empiecen con ‘¡’
if (message.substring(0, 1) == ‘<’) {
var args = message.substring(1).split(‘ ‘);
var cmd = args[0];
args = args.splice(1);
switch(cmd) {
// !ping
case ‘ping’:
bot.sendMessage({
to: channelID,
message: ‘“¡Saludos! ¡Bienvenido al servidor!’
});
break;
// Agrega cualquier comando si lo deseas
}
}
});