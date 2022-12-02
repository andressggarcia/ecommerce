import React, { useEffect, useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { createCartThunk } from '../store/slices/cart.slice';
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
        productsItem.category.id === products.category.id &&
        productsItem.id !== products.id
    )
    console.log(relatedProducts)

    
    const[quantity, setQuantity] = useState(Number)

    const addToCard = () =>{
        const productsCart ={
            id: products.id,
            quantity: quantity
        }
        dispatch(createCartThunk(productsCart))
    }


    return (
        <div>
            <div className='div-product'>
                <div className='div-carousel'>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                            className="d-block w-80px"
                            src={products?.productImgs[0]}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-80px"
                            src={products?.productImgs[1]}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-80px"
                            src={products?.productImgs[2]}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='div-description'>
                    <h1 className='h1-title'>{products?.title}</h1>
                    <p className='p-description'>{products?.description}</p>
                    <div className='div-priceAndQuantity'>
                    <div className='div-price'>
                        <p className='p-price__detail'>Price:</p>
                        <p className='p-price__date'>$ {products?.price}</p>
                    </div>
                        <div className='container-quantity'>
                            <p className='text-quantity'>Quantity:</p>
                            <div className='div-quantity' >
                                <Button
                                    style={{fontSize: "20px"}}
                                    className='"me-1'
                                    onClick={()=> setQuantity(quantity-1)}
                                >
                                    -
                                </Button>   
                                <div className='quantity' >{quantity}</div>  
                                <Button
                                    style={{fontSize: "20px"}}
                                    className='me-1'
                                    onClick={()=> setQuantity(quantity+1)}
                                >
                                    +
                                </Button>                       
                            </div>
                        </div>
                    </div>
                        <Button onClick={addToCard}>Add to cart</Button>
                </div>
            </div>
            
            <h3 className='h3-similar__products'>Discover similar items</h3>
            <ul className='ul-related' style={{width: "80%", margin: "auto"}}>
                {relatedProducts.map((productsItem)=>(
                    <li className='li-home' key={products.id} >
                        <Link to={`/detail/${productsItem.id}`}>
                            <img className='img-related' src={productsItem.productImgs[0]} alt="" />
                            <div className='br'></div>
                            <h6 className='h6-related'>{productsItem?.title}</h6>
                            <div className='div-price__related'>
                                <p className='p-price__text' >Price:</p>
                                <p className='p-price__related'>$ {productsItem.price}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default ProductsDetail;