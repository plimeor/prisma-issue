import { PrismaClient } from 'prisma-client'

async function getPrisma(){
  const prisma = new PrismaClient()
  await prisma.$connect()
  return prisma
}

getPrisma().then(console.log)
