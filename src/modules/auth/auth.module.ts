import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    JwtModule.register({
      secret: "MI NUEVO CÓIGO BEBÉ",
      signOptions:{expiresIn:'605'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}