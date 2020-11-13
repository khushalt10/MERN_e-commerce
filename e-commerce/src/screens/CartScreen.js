import React, { useEffect } from 'react'
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/cartActions'
import Message from '../components/Message'

function CartScreen({ match, location, history }) {
    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    console.log(cartItems)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo} = userLogin


    useEffect(() => {
        if (productId){
            dispatch(addToCart(productId, qty))
        }
    },[dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        if (userInfo) {
            history.push('/shipping')
        }else {
            history.push('/login')
        }
    }

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? <Message variant="primary">Your cart is empty <Link to="/">Go To Shop</Link></Message>
                  : (
                      <ListGroup variant="flush">
                          {cartItems.map(item => (
                              <ListGroup.Item key={item.product}>
                                  <Row>
                                      <Col md={2}>
                                          <Image src={item.image} alt={item.name} fluid rounded />
                                      </Col>
                                      <Col md={2}>
                                          <Link to={`/product/${item.product}`}>
                                              {item.name}
                                          </Link>
                                      </Col>
                                      <Col md={2}>
                                          ₹{item.price}
                                      </Col>
                                      <Col md={2}>
                                            <Form.Control as="select" value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                   { [...Array(item.countInStock).keys()].map(x => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))}
                                            </Form.Control>
                                      </Col>
                                      <Col md={2}>
                                          <Button type="button" variant="danger" onClick={() => removeFromCartHandler(item.product)}>
                                              <i className="fas fa-trash"></i>
                                          </Button>
                                      </Col>
                                  </Row>
                              </ListGroup.Item>
                          ))}
                      </ListGroup>
                  )      
            }
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                            ₹{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type="button" className="btn-block btn-light" disabled={cartItems.length === 0} onClick={checkoutHandler}>
                                Procced To Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}

export default CartScreen
