import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationExceptions extends HttpException {
  messages;
  constructor(responce) {
    super(responce, HttpStatus.BAD_REQUEST);
    this.messages = responce;
  }
}
