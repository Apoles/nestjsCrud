import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './prismaServer/prisma.module';
/*import { PostModule } from '../src/post/post.module';
import { UserModule } from '../src/user/user.module';*/
import { UserModule } from 'src/user/user.module';
import { PostModule } from 'src/post/post.module';
@Module({
  imports: [PrismaModule, PostModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
