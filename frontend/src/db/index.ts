import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://postgres:Founder,bi,Aur168@db.rmgmfkixtbulmzxhsrgr.supabase.co:5432/postgres";

// Disable prefetch for serverless environment compatibility
const client = postgres(connectionString, { prepare: false });

export const db = drizzle(client, { schema });
