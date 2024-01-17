import { useNavigate } from "react-router-dom";

const Product = ({ allProductList = [] }) => {
    const navigate = useNavigate();
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-20 py-20 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        allProductList.map((item) => {
                            const { id, title, price, category, image } = item;
                            return (
                                <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 rounded-md bg-white cursor-pointer" onClick={() =>
                                    navigate(`/products/${id}`)
                                } >
                                    <a className="block relative h-48 rounded overflow-hidden cursor-pointer">
                                        <img className="object-contain object-center w-full h-full block" src={image} alt={title} />
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{title}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium uppercase">{category}</h2>
                                        <p className="mt-1">${price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default Product