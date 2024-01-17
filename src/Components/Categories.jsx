import { useState, useEffect } from "react";
import FeatureProduct from "./FeatureProduct";
import Product from "./Product";
import useCatergory from "../utils/useCategory";
import useProduct from "../utils/useProduct";

const Categories = () => {
    
    const categories = useCatergory();
    const allProducts = useProduct();

    if(allProducts.length === 0) return <div>Loading.....</div>

    return (
        <div>
            <FeatureProduct cards={categories} />
            <h1 className="text-black font-bold flex justify-center p-5 text-3xl">All Products</h1>
            <Product allProductList={allProducts} />
        </div>
    )
}

export default Categories