import userRepository from '../repository/userRepository.js'

const userService = {

    async createUser(data) {
        const existingUser = await userRepository.findAll({
            email: data.email
        })
        if (existingUser.length > 0) {
            throw new Error("User already exists")
        }
        return userRepository.create(data)
    },

    async updateUser(id, data) {
        return userRepository.update(id, data)
    }, 

    async deleteUser(id) {
        return userRepository.delete(id)
    }, 
    
    async findUser(id) {
        return userRepository.findById(id)
    }, 
    
    async findAllUsers(filters) {
        return userRepository.update(filters)
    }

}

export default userService