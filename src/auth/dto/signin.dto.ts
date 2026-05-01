export class SigninDto {
  email!: string;
  password!: string;
  role!: 'admin' | 'teacher' | 'student';
}
