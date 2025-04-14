import { data } from "../db/data"
import Card from "./Card"
import { useStore } from "../store"
import { useState } from "react"
import { useFilter } from "../store"

interface Item {
    id: number
    title: string
    img: string
    price: number
    rating: number
}

function Main() {

    const { addToCart } = useStore()
    const [notify, setNotfy] = useState<boolean>(false)
    const {minPrice, maxPrice, selectedBrand, searchQuery} = useFilter()

    function handleAddToCart(data: Item){
        if(data){
            addToCart(data)
            setNotfy(true)
        }
        setTimeout(() => {
            setNotfy(false)
        }, 5000)
    }

    function getFilterProducts() {
        let filterData = data;
        
        if (selectedBrand === "Others") {
            const knownBrands = ["Samsung", "Apple", "Oppo", "Vivo"];
            filterData = filterData.filter((item) => !knownBrands.includes(item.brand));
        } else if (selectedBrand && selectedBrand !== "All") {
            filterData = filterData.filter((item) => item.brand === selectedBrand);
        }
          
      
        if (minPrice !== undefined) {
          filterData = filterData.filter((item) => item.price >= minPrice);
        }
      
        if (maxPrice !== undefined) {
          filterData = filterData.filter((item) => item.price <= maxPrice);
        }
      
        if (searchQuery) {
          filterData = filterData.filter((item) => {
            const title = `${item.brand} ${item.model}`;
            return title.toLowerCase().includes(searchQuery.toLowerCase());
          });
        }
      
        return filterData;
      }      

    const filteredProducts = getFilterProducts()

  return (
    <div className='flex flex-col p-6 mb-5 w-full h-screen shadow-md rounded'>
        <h1 className="text-2xl font-semibold mb-4">Products</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-6 overflow-scroll overflow-x-hidden gap-5">
            {filteredProducts.map((item) => (
                <Card key={item.id} title={item.brand + " " + item.model} img={item.img} price={item.price} rating={item.rating} handleAddToCart={handleAddToCart} id={Math.random()} />
            ))}
        </div>
        {notify && (
            <div className="toast toast-start z-10">
                <div className="alert alert-success">
                    <span className="text-white font-semibold text-xl">Added to cart.</span>
                </div>
            </div>
        )}
    </div>
  )
}

export default Main