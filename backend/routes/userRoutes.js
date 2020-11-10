import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
import { authUser, getUserProfile, registerUser } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

//register
router.route('/').post(registerUser)

//Authenticate
router.post('/login', authUser)

//Authorize
router.route('/profile').get(protect, getUserProfile)

export default router
