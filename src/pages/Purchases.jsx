import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

    const dispatch = useDispatch()

    const purchases = useSelector(state => state.purchases)

    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [])

    return (
        <div>
            Purchases
            <ul>
                {
                    purchases.map(purchase => (
                      <li key={purchase.id}>
                        {purchase.cart.products.map(product => (
                            <li>
                                <Link to={`/detail/${product.id}`}>
                                    <h2 ><b>Product:</b> {product.title}</h2>
                                    <h3><b>Price:</b> {product.price} </h3>
                                </Link>
                            </li>
                        ))}
                      </li>  
                    ))
                }
            </ul>
        </div>
    );
};

export default Purchases;