import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import Slide from "@/components/Slide"

export default function Home() {
  return (
    <div>
      <Slide />
      <h1 className="text-3xl font-bold mb-6 text-center">Featured Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
