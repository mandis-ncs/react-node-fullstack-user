import express from 'express'
import setupSwagger from './swagger.js'
import cors from 'cors'
import routes from './routes/index.js'
import errorHandler from './middlewares/errorHandler.js'

const app = express()

setupSwagger(app)

app.use(express.json())
app.use(cors())
app.use(errorHandler)

routes(app)

export default app