import { defineConfig } from "prisma/config";

try {
  process.loadEnvFile();
} catch {
  // In production or CI environments, environment variables are provided directly
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    seed: "node --env-file=.env prisma/seed.ts",
  },
  datasource: {
    url: process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL ?? "",
  },
});
