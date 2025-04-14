import { IoIosStar } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";

interface Data {
    id: number
    title: string
    img: string
    price: number
    rating: number
}

interface Function {
    handleAddToCart: (item: Data) => void
}

type CardProps = Data & Function

function Card({ title, img, price, rating, handleAddToCart, id }: CardProps) {
  return (
    <div className="bg-base-100 flex flex-col rounded shadow-md">
        <img src={img} alt={title} className="rounded object-cover" />
        <div className="flex flex-col p-3 gap-y-1">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex items-center gap-x-1">
                <div className="flex">
                    <IoIosStar color="gold" size={16}/>
                    <IoIosStar color="gold" size={16}/>
                    <IoIosStar color="gold" size={16}/>
                    <IoIosStar color="gold" size={16}/>
                    <IoIosStar color="gold" size={16}/>
                </div>
                <p className="text-sm">(Rated by {rating} users)</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-bold text-primary text-lg">${price}</p>
                <button className="cursor-pointer" onClick={() => handleAddToCart({ id, title, img, price, rating})}>
                    <FaCartPlus size={20} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Card