import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';

@Module({
  imports: [DbModule],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
