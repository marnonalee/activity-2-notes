import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
  ) {}

  async findByEmail(email: string) {
    return this.usersRepo.findOne({ where: { email } });
  }

  async create(email: string, password: string) {
    const hashed = await bcrypt.hash(password, 10);
    const user = this.usersRepo.create({ email, password: hashed });
    return this.usersRepo.save(user);
  }
}
