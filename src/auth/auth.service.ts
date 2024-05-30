import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
import User from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {

    }
    async singIn(email: string, password: string): Promise<User> {
        //console.log('AuthService.singIn');
        //console.log('email:', email);
        //console.log('password:', password);
        const user = await this.usersService.findOneByEmail(email);
        //console.log('user:', user);

        if (user === undefined) {
            throw new UnauthorizedException();
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
