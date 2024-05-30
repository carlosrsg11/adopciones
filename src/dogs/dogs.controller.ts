import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { DogsService } from './dogs.service';
import CreateDogDto from './dtos/create-dog.dto';

@Controller('dogs')
export class DogsController {
    constructor(
        private readonly dogsService: DogsService
    ) {}
    @Get()
    findAll() {
        const records = this.dogsService.findAll();
        return records;
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.dogsService.findOne(id)
    }
    

    @Post()
    create(@Body() body: CreateDogDto) {
        return this.dogsService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return this.dogsService.update(+id, body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    destroy(@Param('id') id: number) {
        return this.dogsService.remove(id)
    }
}