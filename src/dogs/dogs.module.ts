import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Dog from './entities/dogs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dog])],
  providers: [DogsService],
  controllers: [DogsController]
})
export class DogsModule {}