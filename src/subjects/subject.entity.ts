import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('subject')
export class Subject {
  @PrimaryGeneratedColumn('identity')
  id!: number;

  @Column({ unique: true, nullable: false, type: 'text' })
  name!: string;

  @Column({ nullable: false, type: 'text' })
  description!: string;

  @CreateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt!: Date;

  @Column({ type: 'int4' })
  created_by_id!: number;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
  })
  updatedAt!: Date;

  @Column({ type: 'int4' })
  updated_by_id!: number;
}
