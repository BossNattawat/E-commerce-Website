import { FaSearch } from "react-icons/fa";
import { useFilter } from "../store";

function Sidebar() {

  const brands = [
    "All",
    "Samsung",
    "Apple",
    "Oppo",
    "Vivo",
    "Others"
  ]

  const {minPrice, maxPrice, setMinPrice, setMaxPrice, setSelectedBrand, searchQuery, setSearchQuery, clearFilters} = useFilter()

  return (
    <aside className="flex flex-col p-6 w-[20rem] gap-y-5 shadow-md rounded bg-base-100 h-screen">
        <div className="flex gap-x-3 justify-center">
            <input type="text" className="input w-full" placeholder="Search something..."   value={searchQuery || ""} onChange={(e) => setSearchQuery(e.target.value)} />
            <button className="btn btn-soft btn-primary">
                <FaSearch size={20} />
            </button>
        </div>
        <div className="flex flex-col gap-y-2">
            <h1 className="text-xl font-semibold">Price</h1>
            <div className="">
                <div className="flex gap-x-2">
                    <input type="number" className="input" placeholder="Min" onChange={(e) => setMinPrice(parseInt(e.target.value) || 0)} value={minPrice !== undefined ? minPrice : ""}/>
                    <input type="number" className="input" placeholder="Max" onChange={(e) => setMaxPrice(parseInt(e.target.value) || 0)} value={maxPrice !== undefined ? maxPrice : ""}/>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-y-2">
            <h1 className="text-xl font-semibold">Brand</h1>
            <div>
                <div className="flex flex-col gap-y-2">
                    {brands.map((brand) => (
                      <button key={brand} onClick={() => setSelectedBrand(brand)} className="btn btn-secondary text-white w-full">{brand}</button>
                    ))}
                </div>
            </div>
        </div>
        <button onClick={() => clearFilters()} className="btn btn-error text-md w-full text-white">Reset Filter</button>
    </aside>
  )
}

export default Sidebar