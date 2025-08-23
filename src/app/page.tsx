//import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import Dropdown from '@/components/Dropdown'
import Slide from '@/components/Slide'
import products from "../../db.json"
export default function Home() {
    return (
        <>
            <Dropdown />
            <div className="container py-6 px-4 mx-auto text-fg">
                <Slide />
                <h1 className="my-6 text-3xl font-bold text-center rounded-b-md shodow text-primary">Featured Products</h1>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"  >
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}
