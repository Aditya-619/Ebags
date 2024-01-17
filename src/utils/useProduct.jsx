import { useState, useEffect } from "react";

const useProduct = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    async function getProducts() {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        console.log(data)
        setAllProducts(data)
    }
    return allProducts
}

export default useProduct