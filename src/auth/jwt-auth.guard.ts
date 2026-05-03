import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err: any, user: any, info: any, context: any, status?: any) {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers?.authorization;
    console.log('JwtAuthGuard handleRequest', {
      authorization: authHeader,
      err: err?.message || err,
      info: info?.message || info,
      user: !!user,
      status,
    });

    return super.handleRequest(err, user, info, context, status);
  }
}
