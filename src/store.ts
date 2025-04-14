import { create } from "zustand"

interface Item {
    id: number
    title: string
    img: string
    price: number
    rating: number
}

interface Cart {
    cart: Item[]
    addToCart: (item: Item) => void
    removeFromCart: (itemId: number) => void
}

const CartLoad = (): Item[] => {
    const storeCart = localStorage.getItem("items")
    return storeCart ? JSON.parse(storeCart) : []
} 

export const useStore = create<Cart>((set) => ({
    cart: CartLoad(),
    addToCart: (item) => set((state) => {
        const updateCart = [...state.cart, item]
        localStorage.setItem("items", JSON.stringify(updateCart))
        return { cart: updateCart }
    }),
    removeFromCart: (itemId) => set((state) => {
        const updateCart = state.cart.filter((item) => item.id !== itemId)
        localStorage.setItem("items", JSON.stringify(updateCart))
        return { cart: updateCart }
    })
}))

interface FilterType {
    searchQuery: string
    setSearchQuery: (query: string) => void
    selectedBrand: string
    setSelectedBrand: (brand: string) => void
    minPrice: number | undefined
    setMinPrice: (price: number | undefined) => void
    maxPrice: number | undefined
    setMaxPrice: (price: number | undefined) => void
    clearFilters: () => void
}

export const useFilter = create<FilterType>((set) => ({
    searchQuery: "",
    setSearchQuery: (query) => set({ searchQuery: query }),
    selectedBrand: "",
    setSelectedBrand: (brand) => set({ selectedBrand: brand }),
    minPrice: undefined,
    setMinPrice: (price) => set({ minPrice: price }),
    maxPrice: undefined,
    setMaxPrice: (price) => set({ maxPrice: price }),
    clearFilters: () => set({
        searchQuery: "",
        selectedBrand: "",
        minPrice: undefined,
        maxPrice: undefined,
    })
}))