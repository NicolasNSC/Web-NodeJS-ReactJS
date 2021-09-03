import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class Alunos {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    ra: string;

    @Column()
    birth_date: Date;

    @Column()
    address: string;

    @Column({
        default: true
    })
    registration: boolean;

    @Column()
    age: number;

    @CreateDateColumn()
    create_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;
}