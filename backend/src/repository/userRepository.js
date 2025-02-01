import prisma from '../config/dbConnect/prisma'

const userRepository = {

    async create(data) {
        return prisma.user.create({
            data
        })
    },

    async update(id, data) {
        return prisma.user.update({
            where: { id },
            data
        })
    },

    async delete(id) {
        return prisma.user.delete({
            where: { id }
        })
    },

    async findById(id) {
        return prisma.user.findUnique({
            where: { id }
        })
    },

    async findAll(filters = {}) {
        return prisma.user.findMany({
            where: filters
        })
    },

}

export default userRepository