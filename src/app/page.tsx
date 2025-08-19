import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import Dropdown from '@/components/Dropdown'
import Slide from '@/components/Slide'


export default function Home() {
    return (
        <>
            <Dropdown />
            <div className="container py-6 px-4 mx-auto">
                <Slide />
              <h1 className="mb-6 text-3xl font-bold text-center rounded-b-md shodow">Featured Products</h1>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"  >
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}
