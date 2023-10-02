import { Module } from '@nestjs/common';
import { UsersController } from '@src/users/controllers/users.controller';
import { ThrottlerProvider } from '@src/shared/providers/throttler/throttler.provider';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [ThrottlerProvider],
})
export class UserModule {}
