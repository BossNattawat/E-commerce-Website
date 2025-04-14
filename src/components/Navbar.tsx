import { FaShoppingBasket } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaFilter } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex p-6 mb-5 justify-between w-full shadow-md rounded">
        <div className="flex gap-x-3 justify-center items-center">
            <label htmlFor="my-drawer" className="btn btn-info drawer-button lg:hidden sm:flex">
                <FaFilter size={25} color="white" />
            </label>
            <a href="/">
                <FaShoppingBasket size={40} />
            </a>
            <a href="/">
                <h1 className="text-2xl font-semibold">React Store</h1>
            </a>
        </div>
        <div className="">
            <a href="/cart">
                <IoMdCart size={35} />
            </a>
        </div>
    </nav>
  )
}

export default Navbar