
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import cartImg from '../assets/icons8-cart-30.png'


const Header = () => {

    const { amount } = useSelector((state) => state.cart)

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Ebags</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
                        <Link to="/categories" className="mr-5 hover:text-gray-900">Categories</Link>
                        {/* <Link to="/about" className="mr-5 hover:text-gray-900">About</Link> */}
                        <Link to="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
                    </nav>
                    <Link to="/cart" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        <img src={cartImg} alt="404" className="w-6 h-6 ml-1" />
                        {amount}
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header