import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CheckOutItems from "./CheckOutItems"
import { HiChevronLeft, HiTrash } from "react-icons/hi"
import { clear } from "../utils/cartSlice"
import Confetti from 'react-confetti';
import { useState } from "react"


const Cart = () => {

    const dispatch = useDispatch();

    const { cartItems, amount, total, } = useSelector((state) => state.cart)


    const [confetti, setConfetti] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const triggerConfetti = () => {
        setConfetti(true);
    
        // Reset confetti after a short delay (adjust as needed)
        setTimeout(() => {
          setConfetti(false);
    
          // Display a popup message after the confetti animation is completed
          setShowPopup(true);
          
          // Hide the popup after a certain duration (adjust as needed)
          setTimeout(() => {
              dispatch(clear())
              setShowPopup(false);
          }, 4000);
        }, 3000);
      };


    return (
        <>
            <div className="bg-black bg-opacity-70 fixed z-30 top-0 left-0 w-full h-screen">
                <div className="h-full bg-slate-50 sm:w-[40rem] min-w-[15rem] overflow-y-auto">
                    <div className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center cursor-pointer">
                                <HiChevronLeft />
                                <Link to="/">
                                    <span className="uppercase text-[0.95rem] select-none">continue shopping</span>
                                </Link>
                            </div>
                            <div>cart ({amount})</div>
                        </div>
                        <div className="mt-8">
                            {cartItems.length === 0 ? (
                                <div className="uppercase text-center text-3xl">Your cart is empty</div>
                            ) : (
                                <>
                                    {cartItems.map(cartItem => {
                                        return (
                                            <CheckOutItems key={cartItem.id} cartItem={cartItem} />
                                        )
                                    })}

                                    <div className="flex justify-between mt-12">
                                        <div>Total cost: ${total.toFixed(2)}</div>
                                        <HiTrash className="cursor-pointer text-3xl" onClick={() => {
                                            dispatch(clear())
                                        }} />
                                    </div>
                                    <div className="text-center cursor-pointer bg-black text-white p-3 mt-8" onClick={triggerConfetti}>Buy Now</div>
                                    {confetti && <Confetti />}
                                    {showPopup && <div className="flex justify-center text-white items-center text-xl bg-orange-400">Order recieved!</div>}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart



