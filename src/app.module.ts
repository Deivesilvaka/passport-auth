import { Module } from '@nestjs/common';
import { AppController } from '@src/app.controller';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '@src/config/dataSource';
import { ThrottlerProvider } from '@src/shared/providers/throttler/throttler.provider';
import { UserModule } from '@src/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        dataSourceOptions(configService),
      inject: [ConfigService],
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 20,
      },
    ]),
    UserModule,
  ],
  controllers: [AppController],
  providers: [ThrottlerProvider],
})
export class AppModule {}
