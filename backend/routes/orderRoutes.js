import express from 'express'
import asyncHandler from 'express-async-handler'
import { addOrderItems } from '../controllers/orderController.js'

import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, addOrderItems)

export default router
