import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/users/user.entity';
import { SessionService } from './session.service';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';

@Controller('sessions')
export class SessionController {
    constructor(private readonly sessionService: SessionService) {}

    @Get('health')
    @UseGuards(JwtAuthGuard)
    healthCheck() {
        return { status: 'ok' };
    }
    // sessions.controller.ts
    @Get('token')
    @UseGuards(JwtAuthGuard)
    async getToken(
        @Query('room') room: string,
        @Query('role') role: 'teacher' | 'student',
        @CurrentUser() user: User
    ) {
        console.log(`Generating token for user ${user}`)
        // console.log(`Generating token for user ${user.email} with role ${role} for room ${room}`);
        return this.sessionService.getLiveKitToken(room, user.firstName! + ' ' + user.lastName!, role);
    }
}
