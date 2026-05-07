import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { StudentService } from './student.service';

@Controller('student')
@UseGuards(JwtAuthGuard)
export class StudentController {
  constructor(private studentService: StudentService) {}
  @Get('/my-subjects/:userId')
  getMySubjects(@Param('userId') userId: string) {
    return this.studentService.getMySubjects(userId);
  }
}
