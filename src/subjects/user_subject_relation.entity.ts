import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Subject } from './subject.entity';

@Entity('user_subject_relation')
export class UserSubjectRelation {
  @PrimaryGeneratedColumn('uuid')
  relationId!: string;

  @Column('uuid')
  userId!: string;

  @Column('int4')
  subjectId!: number;

  @ManyToOne(() => Subject, (subject) => subject.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'subjectId' })
  subject!: Subject;

  @CreateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt!: Date;

  @Column({ type: 'int4' })
  created_by_id!: number;
}
