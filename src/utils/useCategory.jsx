import { useState, useEffect } from "react";
const useCatergory = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories();
    }, [])

    async function getCategories() {
        const response = await fetch("https://fakestoreapi.com/products/categories")
        const data = await response.json()
        setCategories(data)
    }

    return categories
}

export default useCatergory