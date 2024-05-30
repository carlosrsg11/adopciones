import { IsEnum, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export enum Gender {
    Male = 'Male',
    Female = 'Female'
}

export default  class CreateDogDto {
    @IsString()
    @MinLength(1)
    @MaxLength(255)
    name: string;

    @IsString()
    @MinLength(1)
    @MaxLength(255)
    breed: string; //Raza

    @IsNumber()
    age: number;  // Edad

    @IsNumber()
    weight: number; //Peso

    @IsEnum(Gender)
    gender: Gender; //Genero

}