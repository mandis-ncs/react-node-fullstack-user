import userRepository from '../repository/userRepository.js'
import { ApiError } from '../middlewares/errorHandler.js'
import { createUserValidation } from '../utils/userValidators.js'

function validateUserData(data) {
    const { error } = createUserValidation.validate(data)
    if (error) {
        throw new ApiError(400, error.details[0].message)
    }
}

const userService = {

    async createUser(data) {
        validateUserData(data)

        const existingUser = await userRepository.findAll({
            email: data.email
        })
        if (existingUser.length > 0) {
            throw new ApiError(409, "User already exists")
        }
        return userRepository.create(data)
    },

    async updateUser(id, data) {
        validateUserData(data)
        return userRepository.update(id, data)
    },

    async deleteUser(id) {
        return userRepository.delete(id)
    },

    async findUser(id) {
        return userRepository.findById(id)
    },

    async findAllUsers(filters) {
        return userRepository.findAll(filters)
    }

}

export default userService