import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() // sql table === coffees
export class Coffee {
    @PrimaryGeneratedColumn() // 主键
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column('json', {nullable: true})
    flavors: string[];
}