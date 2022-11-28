import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';

const ProductsDetail = () => {
    const {id} = useParams()

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getProductsThunk())
    },[])

    const productsList = useSelector( state => state.products)

    const products = productsList.find(productsItem => productsItem.id === Number(id))
    const relatedProducts = productsList.filter((productsItem) =>
        productsItem.category.id === products.category.id
    )
    console.log(relatedProducts)
    return (
        <div>
            <h1>{products?.title}</h1>
            <img src={products?.productImgs[0]} alt="" />
            <p>{products?.description}</p>
            <h3>Related Products</h3>
            {relatedProducts.map((productsItem)=>(
                <li>
                    <Link to={`/detail/${productsItem.id}`}>
                        {productsItem?.title}
                    </Link>
                </li>
            ))}
        </div>
    );
};

export default ProductsDetail;