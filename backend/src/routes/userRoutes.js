import express from 'express'
import userController from '../controllers/userController.js'

const routes = express.Router()

routes.get('/users', userController.findAllUsers)
routes.get('/users/:id', userController.findUser)
routes.post('/users', userController.createUser)
routes.put('/users/:id', userController.updateUser)
routes.delete('/users/:id', userController.deleteUser)

export default routes