const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
	msg.delete();
	msg.channel.send(
		"TROLLL"
	);
};

module.exports.help = {
	name: "vote",
	description:
		"TRollll",
	usage: "d!vote",
	accessableby: "Everyone",
	aliases: [],
};
