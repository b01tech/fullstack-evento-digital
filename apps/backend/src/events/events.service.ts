import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaProvider) {}
}
