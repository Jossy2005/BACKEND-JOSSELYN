import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';



@Module({
  imports:[
    JwtModule.register({
      secret: "MI NUEVO CÓDIGO BEBÉ",
      signOptions:{expiresIn:'605'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
