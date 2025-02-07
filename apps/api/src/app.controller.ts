import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseService } from './modules/database/database.service';

@Controller()
export class AppController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  async getHello() {
    await this.databaseService.user.findFirst();
    // return this.appService.getHello();
  }
}
