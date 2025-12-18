import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import * as core from 'core';

@Controller('events')
export class EventsController {
  @Get()
  getEvents() {
    return core.events;
  }
  @Get(':id')
  getEventById(@Param('id') id: string) {
    return core.events.find((event) => event.id === id);
  }
  @Get('/exists/:alias')
  getEventByAlias(@Param('alias') alias: string) {
    const event = core.events.find((event) => event.alias === alias);
    return event ? { exists: true } : { exists: false };
  }

  @Post('/login')
  login(@Body() data: { id: string; password: string }) {
    const event = core.events.find(
      (event) => event.id === data.id && event.password === data.password,
    );
    if (!event) return { error: 'Event not found' };
    return event;
  }

  @Post('/register/:alias')
  register(
    @Param('alias') alias: string,
    @Body() data: { attendee: core.Attendee },
  ) {
    const event = core.events.find((event) => event.alias === alias);
    if (event) return { error: 'Event not found' };
    event!.attendees.push(data.attendee);
    return { success: 'Attendee registered' };
  }
  @Post('/create')
  createEvent(@Body() event: core.Event) {
    const eventExists = core.events.find(
      (e) => e.alias === event.alias && e.id === event.id,
    );
    if (eventExists) return { error: 'Event already exists' };
    core.events.push(event);
    return { success: 'Event created' };
  }
}
