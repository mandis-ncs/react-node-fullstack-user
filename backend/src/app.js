import express from 'express'
import cors from 'cors'
import routes from './routes/index.js'
import errorHandler from './middlewares/errorHandler.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(errorHandler)

routes(app)

export default app