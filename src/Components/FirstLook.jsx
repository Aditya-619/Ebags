import { useNavigate } from "react-router-dom"
import frontImage from '../assets/frontLook2.jpg'

const FirstLook = () => {
    const navigate = useNavigate();
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-7 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-contain object-center rounded" alt="hero" src={frontImage} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Where style meets convenience
                        <br className="hidden lg:inline-block" />Where every click is a gift to yourself
                    </h1>
                    <p className="mb-8 leading-relaxed">Immerse yourself in a curated collection that blends luxury with accessibility. Welcome to a world where every purchase is a statement. Explore a curated space where the latest trends seamlessly blend with timeless classNameics, elevate your style as you navigate our carefully crafted collections.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>{
                            navigate(`/categories`)
                        }}>Explore</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstLook