import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import Product from "./Product";

const CategoryProducts = () => {

    const { name } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    async function getProducts() {
        const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
        const data = await response.json()
        console.log(data)
        setProduct(data)
    }

    if(product.length === 0) return <div>Loading.....</div> 
    return (
        <Product allProductList={product}/>
    )
}

export default CategoryProducts