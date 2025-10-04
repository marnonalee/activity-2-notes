import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(email: string, password: string) {
    const existing = await this.usersService.findByEmail(email);
    if (existing) throw new UnauthorizedException('Email already exists');
    const user = await this.usersService.create(email, password);
    return { message: 'User registered', userId: user.id, email: user.email };
  }

  async login(email: string, password: string) {
  const user = await this.usersService.findByEmail(email);
  if (!user) throw new UnauthorizedException('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new UnauthorizedException('Invalid credentials');

  const payload = { sub: user.id, email: user.email };
  const accessToken = await this.jwtService.signAsync(payload);

  return { access_token: accessToken }; 
}

}
