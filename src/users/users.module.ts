import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './entities/user.entity';
import Role from './entities/role.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { RolesController } from './roles/roles.controller';
import { RolesService } from './roles/roles.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from 'src/auth/jwt.guard';


@Module({
    imports: [TypeOrmModule.forFeature([User, Role])],
    controllers: [UsersController, RolesController],
    providers: [
        UsersService,
        RolesService,
        {                           //Esto para que use el guardian en todo el módulo sin necesidad de ponerle el
            provide: APP_GUARD,     //guardián a cada clase
            useClass: JwtGuard,
        }],
    exports: [UsersService]
})
export class UsersModule { }
