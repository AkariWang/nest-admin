import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.29.1.55',
      port: 3306,
      username: 'root',
      password: 'Newcon@fna2019',
      database: 'fna_translate',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
