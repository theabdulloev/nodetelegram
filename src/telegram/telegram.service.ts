import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class TelegramService {
  private bot: TelegramBot;

  constructor() {
    this.bot = new TelegramBot(
      '6914168476:AAEyNpmUF1TkDf6E-I5m4eccVbvZ23T94Kw',
      { polling: false },
    );

    this.bot.on('message', (msg) => {
      const chatId = msg.chat.id;
      this.bot.sendMessage(chatId, 'Привет, я бот!');
    });
  }
}
