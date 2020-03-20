import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(

    @InjectRepository(User)
    private readonly userRepository: Repository<User>

  ) { }

  find(): Promise<User[]> {
    return this.userRepository.find({ select: ['name', 'age', 'email'] });
  }

  getUserById(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  getUser(name: string): Promise<User[]> {
    return this.userRepository.find({ name });
  }

  persisitUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async removeUser(id: string): Promise<User> {
    let user = await this.userRepository.findOne(id);
    return this.userRepository.remove(user);
  }

}