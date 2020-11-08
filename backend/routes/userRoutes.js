import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
import { authUser } from '../controllers/userController.js'

const router = express.Router()

//all products
router.post('/login', authUser)

//id product

export default router
