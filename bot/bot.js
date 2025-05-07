const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot's token
const token = 'YOUR_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

// Start command handler
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome to the N3XUS Bot! How can I assist you today?');
});

// Command to get a list of options
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Use the following commands:\n/start - Start the bot\n/help - List of commands');
});

// Example: handling any incoming message
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `You said: ${msg.text}`);
});
