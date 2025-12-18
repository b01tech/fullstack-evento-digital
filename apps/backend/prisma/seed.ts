import 'dotenv/config';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '../src/generated/prisma';
import { events } from 'core';

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaBetterSqlite3({ url: connectionString });
const prisma = new PrismaClient({ adapter });

async function seedDb() {
  console.log('🌱 Seeding database...');

  for (const event of events) {
    await prisma.event.create({
      data: {
        id: event.id,
        alias: event.alias,
        password: event.password,
        name: event.name,
        date: event.date,
        location: event.location,
        description: event.description,
        image: event.image,
        backgroundImage: event.backgroundImage,
        numberOfAttendees: event.numberOfAttendees,
        attendees: {
          create: event.attendees.map((attendee) => ({
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

  console.log('✅ Seed completed');
}

seedDb()
  .catch((e) => {
    console.error('❌ Seed failed', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
