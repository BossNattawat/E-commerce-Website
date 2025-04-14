import { useParams, Link } from "react-router-dom";
import { data } from "../db/data";
import { FaArrowLeft, FaCartPlus } from "react-icons/fa";
import { useStore } from "../store";
import { useState } from "react";

interface Item {
    id: number
    title: string
    img: string
    price: number
    rating: number
}

function ViewProduct() {
  const { id } = useParams();
  const product = data.find((item) => item.id === Number(id));
  const [notify, setNotfy] = useState<boolean>(false)

    const { addToCart } = useStore()

    function handleAddToCart(data: Item){
        if(data){
            addToCart(data)
            setNotfy(true)
        }
        setTimeout(() => {
            setNotfy(false)
        }, 5000)
    }

  if (!product) {
    return <div className="p-6">Product not found.</div>;
  }

  const productData = {
    id: product.id,
    title: product.brand + " " + product.model,
    img: product.img,
    price: product.price,
    rating: product.rating
  }

  return (
    <div className="flex flex-col p-6 mb-5 w-full h-screen shadow-md rounded">
      <Link to="/" className="btn btn-primary text-white w-fit">
        <div className="flex items-center gap-x-2">
            <FaArrowLeft/>
            <span>Back to homepage</span>
        </div>
      </Link>
      <img src={productData.img} alt={productData.title} className="w-64 h-64 object-cover my-4" />
      <div className="flex flex-col gap-y-5">
        <h1 className="text-2xl font-semibold">{productData.title}</h1>
        <p className="text-xl font-medium">Price: ${productData.price}</p>
        <button className="cursor-pointer flex btn btn-primary text-white w-fit" onClick={() => handleAddToCart(productData)}>
            <FaCartPlus size={20} />
            <span>Add to cart</span>
        </button>
        <p>{product.description}</p>
      </div>
      {notify && (
            <div className="toast toast-start z-10">
                <div className="alert alert-success">
                    <span className="text-white font-semibold text-xl">Added to cart.</span>
                </div>
            </div>
        )}
    </div>
  );
}

export default ViewProduct;
