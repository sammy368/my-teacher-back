import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getUserCount() {
    const data = {
      student: await this.userRepository.count({ where: { role: 'student' } }),
      teacher: await this.userRepository.count({ where: { role: 'teacher' } }),
    };
    return data;
  }
}
