import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
import { deleteProduct, getProductById, getProducts } from '../controllers/productController.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

//all products
router.route('/').get(getProducts)

//id product
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)

export default router
