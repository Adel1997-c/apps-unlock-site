const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot's token
const token = '7797765570:AAG8PvlbSWQQxbogDL4vJgH0kqi5jMWZF-8';
const bot = new TelegramBot(token, { polling: true });

console.log('Bot is starting...');

// /start command - Sends a welcome message and inline buttons
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Inline button options
  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Change Language', callback_data: 'change_language' }],
        [{ text: 'Help', callback_data: 'help' }],
      ],
    },
  };

  // Send welcome message with inline buttons
  bot.sendMessage(chatId, 'Welcome to N3XUS Bot! Choose an option:', options);

  // Send notification when a user starts the bot
  sendNotification(chatId, 'You have successfully started the N3XUS Bot!');
});

// /info command - Sends bot information
bot.onText(/\/info/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'This is the N3XUS Bot. I help with unlocking apps and much more!');
});

// /settings command - Sends available settings options
bot.onText(/\/settings/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Here are your settings:\n1. Notifications: Enabled\n2. Language: English');
});

// /feedback command - Collect user feedback
let feedbacks = [];
bot.onText(/\/feedback/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Please provide your feedback:');

  bot.on('message', (message) => {
    if (message.chat.id === chatId && message.text !== '/feedback') {
      feedbacks.push({ user: chatId, feedback: message.text });
      bot.sendMessage(chatId, `Thank you for your feedback: "${message.text}"`);
    }
  });
});

// /help command - List available commands
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Here are the available commands:\n/start - Start the bot\n/info - Get info about the bot\n/feedback - Send feedback');
});

// Handle inline button clicks
bot.on('callback_query', (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  if (data === 'change_language') {
    bot.sendMessage(chatId, 'You can change language settings here.');
  } else if (data === 'help') {
    bot.sendMessage(chatId, 'Send /start to restart or /help for more options.');
  }
});

// Send notifications to users
const sendNotification = (chatId, message) => {
  bot.sendMessage(chatId, message);
};

// General message handler (responds to regular messages)
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.text && !msg.text.startsWith('/')) { // If it's not a command
    console.log('Received message:', msg.text);  // Debugging log
    bot.sendMessage(chatId, `You said: ${msg.text}`);
  }
});

// Log polling errors
bot.on('polling_error', (error) => {
  console.log('Polling error:', error);
});
