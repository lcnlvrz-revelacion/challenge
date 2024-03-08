import { Injectable } from '@nestjs/common';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

@Injectable()
export class MailerService {
  async sendEmail() {
    //10 seconds...
    await sleep(10000);

    return {
      emailId: '1234',
    };
  }
}
