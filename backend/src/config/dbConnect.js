import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function connectToDatabase() {
    try {
        await prisma.$connect()
        console.log('Succesfully connected to database')
    } catch (error) {
        console.error('Error connecting to database:', error)
        process.exit(1)
    }
}

connectToDatabase()

export default prisma