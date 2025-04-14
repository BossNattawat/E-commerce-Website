import { useStore } from "../store"
import { FaTrash } from "react-icons/fa";

function Cart() {

    const { cart, removeFromCart } = useStore() 

  return (
    <div className='flex flex-col p-6 mb-5 w-full h-[48rem] shadow-md rounded'>
        <h1 className="text-2xl font-semibold mb-4">Cart</h1>
        <div className="flex flex-col gap-y-3 overflow-scroll overflow-x-hidden flex-grow">
            {cart.length === 0 ? (
                <p className="text-xl font-medium">Your cart is currently empty.</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center bg-base-300 p-5 rounded shadow">
                            <h1 className="text-lg font-semibold">{item.title}</h1>
                            <div className="flex items-center gap-x-3">
                                <span className="text-xl font-bold">${item.price}</span>
                                <button className="btn btn-error" onClick={() => removeFromCart(item.id)}>
                                    <FaTrash color="white"/>
                                </button>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
        <div className="py-5 flex justify-end">
            <p className="text-2xl font-semibold">Total: {cart.reduce((prev, curr) => prev + curr.price, 0).toFixed(2)}</p>
        </div>
    </div>
  )
}

export default Cart