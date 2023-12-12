import { PrismaClient } from "@prisma/client";
const globalForProsma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}
export const prisma = globalForProsma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForProsma.prisma = prisma;