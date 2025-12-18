import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventsModule } from './events/events.module';
import { EventsController } from './events/events.controller';

@Module({
  imports: [EventsModule],
  controllers: [AppController, EventsController],
  providers: [],
})
export class AppModule {}
