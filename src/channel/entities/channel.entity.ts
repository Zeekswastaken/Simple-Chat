import {Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, Collection, ManyToMany} from "typeorm";

@Entity()
export class Channel {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    Name: string;
    @Column()
    Type:string;
    @Column({nullable: true})
    Password:string;
    @ManyToMany()
}
