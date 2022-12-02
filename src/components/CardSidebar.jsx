import React, { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { chekoutCartThunk, getCartThunk } from '../store/slices/cart.slice';

const CardSidebar = ({ show, handleClose}) => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCartThunk())
    },[])

    const cart= useSelector(state => state.cart)

    return (
        <div className='container-cart' >
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{color: "#515151", fontSize: "20px"}} >Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cart.map(cartProducts =>(
                        <div className='div-cart' key={cartProducts.id}>
                            <p style={{margin: "0"}}>{cartProducts.brand}</p>
                            <h4 className='h4-cart'>{cartProducts.title}</h4>
                            <div className='quantity-cart'>{cartProducts.productsInCart.quantity}</div>
                            <div>
                                <p style={{margin: "0"}}>Price by unit:</p>
                                <h5 style={{marginLeft: "10px"}}>$ {cartProducts.price}</h5>
                            </div>
                        </div>
                    ))}
            <Button onClick={() => dispatch(chekoutCartThunk())}>checkout</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default CardSidebar;