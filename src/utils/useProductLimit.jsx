import { useState, useEffect } from "react";

const useProductLimit = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    async function getProducts() {
        const response = await fetch("https://fakestoreapi.com/products?limit=12")
        const data = await response.json()
        console.log(data)
        setAllProducts(data)
    }
    return allProducts
}

export default useProductLimit