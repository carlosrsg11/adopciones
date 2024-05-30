import { IsEmail, IsOptional, IsString, IsUrl, MaxLength, MinLength, isString }  from "class-validator";

export default class CreateUserDto{
    @IsString()
    @MinLength(1)
    @MaxLength(255)
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsOptional()
    address: string;

    @IsString()
    lastname: string;

    @IsString() //va a servir para la contraseña
    password: string;
}

   

