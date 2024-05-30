import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./user.entity";

@Entity('roles')
class Role {
    @PrimaryGeneratedColumn('uuid')
    id:number;

    @Column({ type: 'varchar', length: 255})
    name: string;

    @OneToMany(() => User, (user) => user.role)
    users: User[]
}

export default Role;