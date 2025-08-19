import Link from 'next/link'
import { Product } from '../data/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg">
          <Link href="/product" >
            {product.name}
          </Link>
        </h2>
        <p className="text-gray-700">${product.price}</p>
        <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
