import { env } from "prisma/config";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg"

const adapter = new PrismaPg({
    connectionString: env('DATABASE_URL')
})

export const prismClient = new PrismaClient({ adapter });