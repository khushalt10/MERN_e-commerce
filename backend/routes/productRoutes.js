import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
import { createProduct, createProductReview, deleteProduct, getProductById, getProducts, getTopProducts, updateProduct } from '../controllers/productController.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

//all products
router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/top').get(getTopProducts)
//id product
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)

router.route('/:id/reviews').post(protect, createProductReview)



export default router
