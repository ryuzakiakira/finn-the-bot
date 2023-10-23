const { SlashCommandBuilder } = require("discord.js");

const waifuFetcher = async () => {
  const waifuList = [
    "waifu",
    "neko",
    "shinobu",
    "megumin",
    "bully",
    "cuddle",
    "cry",
    "hug",
    "awoo",
    "kiss",
    "lick",
    "pat",
    "smug",
    "bonk",
    "yeet",
    "blush",
    "smile",
    "wave",
    "highfive",
    "handhold",
    "nom",
    "bite",
    "glomp",
    "slap",
    "kill",
    "kick",
    "happy",
    "wink",
    "poke",
    "dance",
    "cringe",
  ];

  const waifuType = waifuList[Math.floor(Math.random() * waifuList.length)];

  try {
    const response = await fetch(`https://api.waifu.pics/sfw/${waifuType}`);
    const data = await response.json();
    return data.url;
  } catch (error) {
    console.log("Error fetching data", error);
  }
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName("waifu")
    .setDescription("Gets a random image of a waifu."),
  async execute(interaction) {
    const waifu = await waifuFetcher();
    await interaction.reply(waifu);
  },
};
