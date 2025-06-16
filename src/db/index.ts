import { PrismaClient } from "@/generated/prisma";

declare global {
  var cashedPrisma: PrismaClient | undefined;
}
let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
    if (!global.cashedPrisma) {
        global.cashedPrisma = new PrismaClient();
    }
    prisma = global.cashedPrisma;
}

export const db = prisma;