import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from 'database';

function getExtendedClient() {
  const client = () => {
    const prisma = new PrismaClient();

    return prisma;
  };

  return class {
    constructor() {
      return client();
    }
  } as new () => ReturnType<typeof client>;
}

@Injectable()
export class DatabaseService
  extends getExtendedClient()
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    console.log('connected to db');

    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
