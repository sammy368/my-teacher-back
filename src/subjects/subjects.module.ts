import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './subject.entity';
import { UserSubjectRelation } from './user_subject_relation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subject, UserSubjectRelation])],
})
export class SubjectsModule {}
