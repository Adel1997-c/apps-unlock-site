// telegram-bot.js
import TelegramBot from 'node-telegram-bot-api';

// Replace with your actual token
const bot = new TelegramBot('7797765570:AAG8PvlbSWQQxbogDL4vJgH0kqi5jMWZF-8', { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '🤖 Welcome to N3XUS Bot!\nUse /unlock to get the unlock link.\nUse /help if needed.');
});

bot.onText(/\/unlock/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '🔓 Click the link below to unlock:\nhttps://apps-unlock-site.vercel.app/unlock');
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '💡 Commands:\n/start - Welcome message\n/unlock - Get unlock link\n/help - Show help');
});

console.log('✅ N3XUS Bot is running...');
