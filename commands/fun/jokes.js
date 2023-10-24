const { SlashCommandBuilder } = require('discord.js');
const oneLinerJoke = require('one-liner-joke');

module.exports =  {
    data: new SlashCommandBuilder().setName('joke').setDescription('Tells a joke'),
    async execute(interaction) {
        const joke = await oneLinerJoke.getRandomJoke();
        await interaction.reply(joke.body)
    }
}