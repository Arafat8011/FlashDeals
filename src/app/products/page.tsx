import products from "../../../db.json"
import ProductCard from "@/components/ProductCard"

export default async function Products() {
  return (
    <div className="container mx-auto my-2 ">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"  >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
