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
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
  
`,
);

fs.writeFileSync(
  '.env',
  `
DATABASE_URL="mysql://admin:admin@localhost:3306/admin"
`,
);

fs.writeFileSync(
  './prisma/schema.prisma',
  `
  generator client {
    provider = "prisma-client-js"
  }
  
  datasource db {
    provider = "mysql"
    url      = env("DATABASE_URL")
  }
`,
);
