import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Gender } from "../dtos/create-dog.dto";
import Role from "./role.entity";

@Entity('dogs')
class Dog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255})
    name: string; //nombre

    @Column({ type: 'varchar'})
    breed: string; //Raza

    @Column({type: 'int', nullable: true})
    age: number;  // Edad

    @Column({type: 'float'})
    weight: number; //Peso

   // @Column({type: 'enum'})
    //gender: string; //Genero

    @Column({
        type: 'enum', 
        enum: Gender, // Usar el enum Gender como tipo de datos para el campo gender
        default: Gender.Male // Valor predeterminado, si es necesario
    })
    gender: Gender; //Genero
    role: any;

    @ManyToOne(() => Role, (role) => role.dogs)
    roles: Role;
}

export default Dog;