import express from "express"
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const PORT = 3000

const app = express()
app.use(express.json())
app.use(cors())

app.post("/users", async (req, res) => {
    
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
        }
    })
    
    res.status(201).json(req.body)
})

app.put("/users/:id", async (req, res) => {
    
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
        }
    })
    
    res.status(200).json(req.body)
})

app.delete("/users/:id", async (req, res) => {
    
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    
    res.status(204).json({ message: "deleted" })
})

app.get("/users/:id", async (req, res) => {
    
    const user = await prisma.user.findFirst({
        where: {
            id: req.params.id
        }
    })
    
    res.status(200).json(user)
})

app.get("/users", async (req, res) => {

    let users = []

    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email
            }
        })
    } else {
        users = await prisma.user.findMany()
    }
    
    res.status(200).json(users)
})

app.listen(PORT)