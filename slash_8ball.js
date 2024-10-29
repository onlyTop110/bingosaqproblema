const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');
const hafex_api = require("hafex_api");


module.exports = {
    data: new SlashCommandBuilder()

   .setName("8ball")

  .setDescription("Ask the magic 8-ball a question")

.addStringOption(option =>

option

-setName("question")

.setDescription("Ask a yes-or-no question")

.setRequired(true)

),


async execute(interaction) {

   await interaction.deferReply({ ephemeral: false });

   const question = interaction.option.getString("question");
   
   const embed = new EmbedBuilder()
   .setColor("#0095FF")
   .setTitle("8-ball")
   .setDescription(`Your question: ${question}\nMagic 8-Ball says: ${hafex_api.magicball}`)
   .setFooter({ text: "8-Ball slash command using HafeX_API"});
   await interaction.editReply({Embed: [embed]});

},
};