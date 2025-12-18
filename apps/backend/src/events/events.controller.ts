import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { EventsService } from './events.service';
import * as core from 'core';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async getEvents() {
    return await this.eventsService.getAll();
  }

  @Get(':id')
  async getEventById(@Param('id') id: string) {
    return await this.eventsService.getById(id);
  }

  @Get('/exists/:alias')
  async getEventByAlias(@Param('alias') alias: string) {
    const event = await this.eventsService.getByAlias(alias);
    return event ? { exists: true } : { exists: false };
  }

  @Post('/login')
  async login(@Body() data: { id: string; password: string }) {
    const event = await this.eventsService.getLogin(data.id, data.password);
    if (!event) return { error: 'Event not found' };
    return event;
  }

  @Post('/register/:alias')
  async register(
    @Param('alias') alias: string,
    @Body() data: { attendee: core.Attendee },
  ) {
    const event = await this.eventsService.getByAlias(alias);
    if (!event) return { error: 'Event not found' };

    await this.eventsService.addAttendee(event as core.Event, data.attendee);
    return { success: 'Attendee registered' };
  }

  @Post('/create')
  async createEvent(@Body() event: core.Event) {
    try {
      await this.eventsService.save(event);
      return { success: 'Event created' };
    } catch (e) {
      return { error: 'Event already exists' };
    }
  }
}
