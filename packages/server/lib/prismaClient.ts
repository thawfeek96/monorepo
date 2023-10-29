import {PrismaClient} from '@prisma/client'


const globalForPrisma = globalThis as unknown as {prisma: PrismaClient}
export const prisma = globalForPrisma.prisma || new PrismaClient()

if(process.env.Node_env !== "production") globalForPrisma.prisma = prisma


