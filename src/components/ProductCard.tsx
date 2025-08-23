import Link from 'next/link'
import { ProductTypes } from "@/types/index"

export default function ProductCard({ product }: { product: ProductTypes }) {
  return (
    <form action={`/products/${product.id}`}>
    <div className="bg-card-bg text-primary rounded-lg shadow-card-shadow overflow-hidden transition hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg"> <Link href={`/products/${product.id}`} > {product.name} </Link> </h2>
        <p className='text-muted'>{product.brand}</p>
        <p className="text-accent">${product.price}</p>
        <button className="mt-2 w-full py-2 rounded  bg-primary text-primary-fg  hover:bg-button-hover active:bg-button-active  transition">
        View Product
        </button>
      </div>
    </div>
  </form>
  )
}
