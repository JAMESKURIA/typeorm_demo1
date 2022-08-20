import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("books")
export class Book {
  @PrimaryGeneratedColumn({ name: "book_id" })
  id!: number;

  @Column({ name: "book_name" })
  title!: string;

  @Column({ name: "book_year_published" })
  yearPublished!: string;

  @CreateDateColumn({ name: "date_created" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "date_updated" })
  updatedAt!: Date;
}
