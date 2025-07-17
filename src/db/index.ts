import { drizzle } from 'drizzle-orm/neon-http';
import { env } from '@/lib/env';

export const db = drizzle(env.DATABASE_URL, {
    logger: env.NODE_ENV === 'development' || env.NODE_ENV === 'debug'
});

