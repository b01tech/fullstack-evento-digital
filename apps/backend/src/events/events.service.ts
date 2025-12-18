import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';
import { Attendee, Event } from 'core';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaProvider) {}

  async getAll() {
    return await this.prisma.event.findMany({
      include: {
        attendees: true,
      },
    });
  }

  async save(event: Event) {
    const { attendees, ...eventData } = event;
    return await this.prisma.event.create({
      data: {
        ...eventData,
        attendees: {
          create: attendees?.map((attendee) => ({
            id: attendee.id,
            name: attendee.name,
            email: attendee.email,
            isConfirmed: attendee.isConfirmed,
            hasPlusOne: attendee.hasPlusOne,
            plusOneQuantity: attendee.plusOneQuantity,
          })),
        },
      },
    });
  }

  async addAttendee(event: Event, attendee: Attendee) {
    return await this.prisma.attendee.create({
      data: {
        id: attendee.id,
        name: attendee.name,
        email: attendee.email,
        isConfirmed: attendee.isConfirmed,
        hasPlusOne: attendee.hasPlusOne,
        plusOneQuantity: attendee.plusOneQuantity,
        event: {
          connect: {
            id: event.id,
          },
        },
      },
    });
  }

  async getById(id: string) {
    return await this.prisma.event.findUnique({
      where: {
        id,
      },
      include: {
        attendees: true,
      },
    });
  }

  async getByAlias(alias: string) {
    return await this.prisma.event.findUnique({
      where: {
        alias,
      },
      include: {
        attendees: true,
      },
    });
  }

  async getLogin(id: string, password: string) {
    return await this.prisma.event.findUnique({
      where: {
        id,
        password,
      },
    });
  }
}
