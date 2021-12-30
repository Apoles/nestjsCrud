import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prismaServer';

@Global()
@Module({
  exports: [PrismaService],
  providers: [PrismaService],
})
export class PrismaModule {}
