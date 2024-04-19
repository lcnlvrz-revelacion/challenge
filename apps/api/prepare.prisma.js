const fs = require('fs');

fs.writeFileSync(
  './src/prisma.service.ts',
  `
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

`,
);

fs.writeFileSync(
  './src/prisma.module.ts',
  `
import { Global, Module } from "@nestjs/common";

@Global()
@Module({
  providers:[
    PrismaService
  ],
  exports:[
    PrismaService
  ]
})
export class PrismaModule {}

`,
);
