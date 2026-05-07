import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from 'src/subjects/subject.entity';
import { UserSubjectRelation } from 'src/subjects/user_subject_relation.entity';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

export class StudentService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
    @InjectRepository(UserSubjectRelation)
    private userSubjectRelationRepository: Repository<UserSubjectRelation>,
  ) {}

  getMySubjects(userId: string) {
    // Logic to fetch subjects for the student based on userId
    return this.userSubjectRelationRepository.find({
      where: { userId },
      relations: ['subject'],
      select: ['subjectId'],
    });
  }
}
