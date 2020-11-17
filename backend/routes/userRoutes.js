import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
import { authUser, getUserProfile, registerUser, updateUserProfile, getAllUsers } from '../controllers/userController.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

//register
router.route('/').post(registerUser).get(protect, admin, getAllUsers)

//Authenticate
router.post('/login', authUser)

//Authorize
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

export default router
