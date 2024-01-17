import { useEffect, useState } from "react";
import Product from "./Product";
import FeatureProduct from "./FeatureProduct";
import useCatergory from "../utils/useCategory";
import useProductLimit from "../utils/useProductLimit";
import FirstLook from "./FirstLook";

const Body = () => {

    const allProducts = useProductLimit();
    const categories = useCatergory();

    return (
        <>
            <FirstLook />
            <div>
                <h1 className="text-black font-bold flex justify-center p-5 text-3xl">Products</h1>
                {allProducts.length > 0 ? (
                    <Product allProductList={allProducts} />
                ) : (
                    <div>Loading............</div>
                )}
            </div>
        </>
    )
}
export default Body