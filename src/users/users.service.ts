import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import User from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import CreateUserDto from './dtos/creater-user.dto';
import UpdateUserDto from './dtos/update-user.dto';


@Injectable()
export class UsersService {
  private records = [];

    constructor(
      @InjectRepository(User)
      private readonly usersRepository: Repository<User>,
      ){}

    findAll(){
        return this.usersRepository.find();
    }

    async findOneByEmail(email: string): Promise<User | undefined> {
      return this.usersRepository.findOne({
        where: {
          email,
        },
      });
    }

    async findOne(id: number){
        const record = await this.usersRepository.findOne({
          where:{id},
        });
        
        if (record === null){
          throw new NotFoundException('User #${id} not found');
        }

        return record;
    }

     create(new_user: CreateUserDto){
      const user = this.usersRepository.create(new_user);
      return this.usersRepository.save(user);
    }

    async update(id: number, update_user: UpdateUserDto ){
      const user = await this.findOne(id);

      this.usersRepository.merge(user, update_user);

      return this.usersRepository.save(user);
    }

    async remove(id: number){
      const user= await this.findOne(id);

      return this.usersRepository.remove(user);
    }

}
