import { HiX } from "react-icons/hi"
import { increase, decrease, remove, total } from "../utils/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const CheckOutItems = ({ cartItem }) => {

    const { cartItems } = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(total());
    }, [cartItems])

    const { id, price, amount, title, image } = cartItem

    return (
        <>
            <div className="flex justify-between items-center border border-solid border-gray-200 p-4 mb-6">
                <div className="flex items-center gap-4">
                    <img src={image} alt="404" className="w-20 h-20 object-cover" />
                </div>
                <div className="flex flex-col items-start max-w-[6.8rem]">
                    <div>{title}</div>
                    <div className="flex items-center gap-4 mt-2">
                        <button className="w-8 h-8 text-white bg-black rounded-full" onClick={() => {
                            dispatch(decrease(cartItem))
                        }}>-</button>
                        <div>{amount}</div>
                        <button className="w-8 h-8 text-white bg-black rounded-full" onClick={() => {
                            dispatch(increase(cartItem))
                        }}>+</button>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <HiX className="cursor-pointer text-xl" onClick={() => {
                        dispatch(remove(cartItem))
                    }} />
                    <div>${(price * amount).toFixed(2)}</div>
                </div>
            </div>
        </>
    )
}

export default CheckOutItems