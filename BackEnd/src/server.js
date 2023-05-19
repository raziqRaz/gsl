import express from 'express'
import connectDb from './config/noSql/connect.js'
import dotenv from 'dotenv'


import morgan from 'morgan'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import cors from 'cors'
import sanitizedConfig from './config.js'

// dotenv Configration
dotenv.config()

// db Connectig
connectDb()

const app = express()

if (sanitizedConfig.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use(cors())

// redirect api to router
app.use();


// app.use('/uploads', express.static(path.join(process.cwd(), '/uploads')))

app.use(notFound)
app.use(errorHandler)

const PORT = sanitizedConfig.PORT || 5000

const server = app.listen(PORT, () =>
  console.log(
    `🟢 Server running in ${sanitizedConfig.NODE_ENV} mode on port ${PORT}`,
  ),
)