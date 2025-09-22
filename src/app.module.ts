import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { appConfig } from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
       load:[appConfig]
      }
    ), 
    UserModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
