export class SignupDto {
  email!: string;
  password!: string;
  firstName?: string;
  lastName?: string;
  role?: 'admin' | 'teacher' | 'student';
}
