import express from 'express'
import path from 'path'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import morgan from 'morgan'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()

const app = express()

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())

connectDB()


app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) =>
    res.send(process.env.PAYPAL_CLIENT_ID)
 )
 
 const __dirname = path.resolve()

 app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

 if (process.env.NODE_ENV === 'production') {
     app.use(express.static(path.join(__dirname, '/e-commerce/build')))

     app.get('*', (req, res) =>
         res.sendFile(path.resolve(__dirname, 'e-commerce', 'build', 'index.html')))
 } else {
    app.get('/', (req,res) => {
        res.send("Hello World")
    })
 }

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta.bold))