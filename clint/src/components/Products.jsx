import { useEffect, useState } from 'react';
import styled from 'styled-components'
import {popularProducts} from '../data'
import ProductItem from './ProductItem';
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat, filters, sort}) => {
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `/products?category=${cat}` : "/products")
                setProducts(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        getProducts()
    },[cat])


    useEffect(() => {
        cat && setFilterProducts (
            products.filter(item => Object.entries(filters).every(([key, value]) => 
                item[key].includes(value)
            ))
        )
    },[products ,cat, filters])


    useEffect(() => {
        if(sort === "newest") {
            setFilterProducts((prev) => 
                [...prev].sort((a,b) => a.createdAt - b.createdAt)
            )
        } else if(sort === "asc") {
            setFilterProducts((prev) => 
                [...prev].sort((a,b) => a.price - b.price)
            )
        } else {
            setFilterProducts((prev) => 
                [...prev].sort((a,b) => b.price - a.price)
            )
        }
    },[sort])

    console.log(filterProducts);
    return ( 
        <Container>
            {cat ? filterProducts.map(item => (
                <ProductItem item={item} key={item._id} />
            )) : products.map(item => (
                <ProductItem item={item} key={item._id} />
            ))}
        </Container>
     );
}
 
export default Products;