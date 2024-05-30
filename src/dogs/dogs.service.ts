import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Dog from './entities/dogs.entity';
import { Repository } from 'typeorm';
import UpdateDogDto from './dtos/update-dog.dto';
import CreateDogDto from './dtos/create-dog.dto';

@Injectable()
export class DogsService {

    private recordDosg = [];

    constructor(
    @InjectRepository(Dog)
    private readonly dogsRepository: Repository<Dog>,
    ){}

    findAll() {
        return this.dogsRepository.find();
    }

    async findOne(id: number) {
        const record = await this.dogsRepository.findOne({where: {id}});

        if (record === null){
          throw new NotFoundException('User #${id} not found');
        }

        return record;
    }

    async update(id: number, update_dog: UpdateDogDto){
        const dog = await this.findOne(id);
  
        this.dogsRepository.merge(dog, update_dog)
  
        return this.dogsRepository.save(dog)
      };

    create(new_dog: CreateDogDto){
      const dog = this.dogsRepository.create(new_dog);
      return this.dogsRepository.save(dog);
    }

    async remove(id: number){
      const dog = await this.findOne(id);

      return this.dogsRepository.remove(dog);
    }
}