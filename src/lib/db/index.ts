import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

export const sql = process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : null;
// @ts-ignore
export const db = sql ? drizzle({ client: sql }) : null;
