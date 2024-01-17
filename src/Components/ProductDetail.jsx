import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
    const { id } = useParams();
    console.log(id)

    const [product, setProduct] = useState({});

    useEffect(() => {
        getSingleProduct();
    }, [])

    async function getSingleProduct() {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json();
        console.log(data);
        setProduct(data);
    }

    const dispatch = useDispatch();


    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt={product?.title} className="lg:w-1/2 w-full lg:h-auto max-h-[400px] h-64 object-contain object-center rounded" src={product?.image} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">{product?.category}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product?.title}</h1>
                            <p className="leading-relaxed">{product?.description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10">
                                            <option>SM</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">${product?.price}</span>
                                <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded" onClick={()=>{
                                    dispatch(addItems(product))
                                }}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProductDetails