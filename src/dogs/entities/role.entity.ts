import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Dog from "./dogs.entity";

@Entity('roles')
class Role {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'varchar', length: 255})
    name: string;

    @OneToMany(() => Dog, (dog) => dog.role)
    dogs: Dog[]
}

export default Role;