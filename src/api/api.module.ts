import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from 'src/subjects/subject.entity';
import { UserSubjectRelation } from 'src/subjects/user_subject_relation.entity';
import { User } from 'src/users/user.entity';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';

@Module({
    controllers: [StudentController],
    providers: [StudentService],
    imports: [
        TypeOrmModule.forFeature([User, Subject, UserSubjectRelation]),
    ]
})
export class ApiModule {}
