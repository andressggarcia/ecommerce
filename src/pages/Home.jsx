import axios from 'axios';
import React, { createFactory, useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterProductNameThunk, filterProductsThunk, getProductsThunk } from '../store/slices/products.slice';

const Home = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    const[categoriesList, setCategoriesList] = useState([])
    const[inputSearch, setInputSearch]= useState("")

    useEffect(() =>{
        dispatch(getProductsThunk())

        axios.get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
        .then(res=> setCategoriesList(res.data.data.categories))
    },[])
    console.log(products) 
    return (
        <div className='div-container'>
            <div className='input-btn'>
                <div className='input-search'>
                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="Product"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={inputSearch}
                        onChange={e => setInputSearch(e.target.value)}
                        />
                        <Button 
                            variant="outline-secondary"
                            onClick={() => dispatch(filterProductNameThunk(inputSearch))}
                        >
                            Search
                        </Button>
                    </InputGroup>
                </div>
                <div className='btn-category'>
                {
                        categoriesList.map(category =>(
                        <Button className='btn btn-secondary' key={category.id} onClick={()=> dispatch(filterProductsThunk(category.id))}>
                            {category.name}
                        </Button>
                    ))
                }
                </div>
            </div>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/detail/${product.id}`}>
                            <img className='img-home' src={product.productImgs[0]} alt="" style={{width: "200px", heigth: "200px" }} />
                            <div className='br'></div>
                            <div className='value'>
                                <h5>{product.title}</h5>
                                <div className='price'>
                                    <p>Price:</p>
                                    <p className='p-price'>{product.price}</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
};

export default Home;