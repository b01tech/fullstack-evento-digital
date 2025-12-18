import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { EventsService } from './events.service';

@Module({
  imports: [DbModule],
  providers: [EventsService],
})
export class EventsModule {}
