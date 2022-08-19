import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn({ name: "user_id" })
  id!: number;

  @Column({ name: "user_fname" })
  firstName!: string;

  @Column({ name: "user_lname" })
  lastName!: string;
}
