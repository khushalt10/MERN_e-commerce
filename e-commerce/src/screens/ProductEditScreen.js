import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { listProductDetails } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'


function ProductEditScreen({ match}) {
    const productId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')

    const history = useHistory()

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, product, error} = productDetails

    useEffect(() => {

            if(!product.name || product._id !== productId) {
                dispatch(listProductDetails(productId))
            } else {
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setCategory(product.category)
                setCountInStock(product.countInStock)
                setBrand(product.brand)
                setDescription(product.description)
            }
    }, [dispatch, productId, product, history])

    const submitHandler = (e) => {
        e.preventDefault()
        
    }

    return (
        <>
            <Link to='/admin/productlist' className="btn btn-light my-3">
                Go Back
            </Link>
       
            <FormContainer>
                <h1>Edit Product</h1>
               {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
                    <form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Name" value={name}
                            onChange={(e) => setName(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='price'>
                            <Form.Label>Price </Form.Label>
                            <Form.Control type="number" placeholder="Enter price" value={price}
                            onChange={(e) => setPrice(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='image'>
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" placeholder="Enter image" value={image}
                            onChange={(e) => setImage(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='brand'>
                            <Form.Label>Brand</Form.Label>
                            <Form.Control type="text" placeholder="Enter brand" value={brand}
                            onChange={(e) => setBrand(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='category'>
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" placeholder="Enter category" value={category}
                            onChange={(e) => setCategory(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='countInStock'>
                            <Form.Label>Count In Stock</Form.Label>
                            <Form.Control type="number" placeholder="Enter countInStock" value={countInStock}
                            onChange={(e) => setCountInStock(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='description'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="description" placeholder="Enter description" value={description}
                            onChange={(e) => setDescription(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Button type="submit" variant="info">
                            Update
                        </Button>
                    </form>
                )}

            </FormContainer>
        </>
    )
}

export default ProductEditScreen
