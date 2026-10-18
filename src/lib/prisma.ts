import { PrismaClient } from "@prisma/client";

/**
 * Serverless DB Safety (Guardrail 3)
 * Prevents multiple instances of Prisma Client in development (HMR)
 * and ensures safe connection management across serverless functions on Vercel/Neon.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
