import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SessionController } from './session/session.controller';
import { SessionService } from './session/session.service';
import { Subject } from './subjects/subject.entity';
import { UserSubjectRelation } from './subjects/user_subject_relation.entity';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT || '5432'),
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      entities: [User, Subject, UserSubjectRelation],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([User, Subject, UserSubjectRelation]),
    ApiModule,
  ],
  controllers: [AppController, SessionController],
  providers: [AppService, SessionService],
})
export class AppModule {}
