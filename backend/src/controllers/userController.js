import userService from '../services/userService.js'

const userController = {

    async createUser(req, res, next) {
        try {
            const user = await userService.createUser(req.body)
            res.status(201).json(user)
        } catch (error) {
            next(error)
        }
    },

    async updateUser(req, res, next) {
        try {
            const updated = await userService.updateUser(req.params.id, req.body)
            res.status(200).json(updated)
        } catch (error) {
            next(error)
        }
    },

    async deleteUser(req, res, next) {
        try {
            await userService.deleteUser(req.params.id)
            res.status(204).json({ message: "User deleted" })
        } catch (error) {
            next(error)
        }
    },

    async findUser(req, res, next) {
        try {
            const user = await userService.findUser(req.params.id)
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    },

    async findAllUsers(req, res, next) {
        try {
            const users = await userService.findAllUsers(req.query)
            res.status(200).json(users)
        } catch (error) {
            next(error)
        }
    }
}

export default userController