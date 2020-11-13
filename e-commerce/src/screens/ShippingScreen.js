import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'


function ShippingScreen({ history}) {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postal, setPostal] = useState(shippingAddress.postal)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postal, country}))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Shipping</h1>
            <form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control required type="address" placeholder="Enter Address" value={address}
                    onChange={(e) => setAddress(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control required type="city" placeholder="Enter City" value={city}
                    onChange={(e) => setCity(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='postal'>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control required type="postal" placeholder="Enter postal code" value={postal}
                    onChange={(e) => setPostal(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control required type="country" placeholder="Enter country" value={country}
                    onChange={(e) => setCountry(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type="submit" variant="info">
                    Continue
                </Button>
            </form>
        </FormContainer>
    )
}

export default ShippingScreen
