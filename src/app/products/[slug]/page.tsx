import products from "../../../../db.json"
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const product = products.filter(item => {
    if (item.id === slug) {
      return item
    }
  })
  return (
    <div>
      {
        product.map(item => (
          <div className="container mx-auto my-2 ">
            <div className="md:flex gap-2  justify-between">
              <div className="w-full bg-surface ">
                <div className=" max-w-2xl overflow-hidden">
                  <img className="object-cover" src={item?.image} alt={item?.name} />
                </div>
              </div>
              <div className="w-full bg-surface mt-2 md:mt-0" >
                <div className="p-4">
                  <h2 className="font-bold text-2xl mb-4">{item?.name}</h2>
                  <div className="font-bold flex items-center"> <h3> <span className="text-success">*****</span> 2 reviews</h3></div>
                  <div className="bg-surface my-2 max-w-fit py-2 pr-5">
                    <p>Special Price</p>
                    <h2 className="font-bold text-xl">Tk {item?.price}</h2>
                  </div>
                  <h3 className="font-bold text-md bg-success max-w-fit p-2 my-4">In Stock</h3>
                  <div className="">
                    <h2 className="text-xl font-bold">Quick Overview</h2>
                    <div className="mx-3">
                      <li>{item?.specifications.display}</li>
                      <li>{item?.specifications.ram}</li>
                      <li>{item?.specifications.storage}</li>
                      <li>{item?.specifications.processor}</li>
                    </div>
                    <div className="flex gap-2 py-2">
                      <input className="bg-input-bg rounded px-2 font-semibold" type="number" defaultValue={0} />
                      <button className="bg-button-bg p-2 cursor-pointer rounded-md font-bold text-primary-fg hover:bg-button-hover active:bg-button-active">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex gap-4 my-4">
              <div className="md:w-2/3 bg-surface">
                <div className="flex justify-start  font-bold shadow">
                  <button className="bg-primary text-primary-fg px-4 py-2 cursor-pointer">Specifications</button>
                  <button className="border-primary border-2 px-4 py-2 cursor-pointer">Details</button>
                  <button className="border-primary border-2 px-4 py-2 cursor-pointer">Q&A</button>
                  <button className="border-primary border-2 px-4 py-2 cursor-pointer">Review</button>
                </div>
                <div className="px-4">
                  <h2 className="text-2xl font-bold my-4">Specifications</h2>
                  <div>
                    <div className="flex">
                      <div className="w-1/2 "><span className="font-bold">Brand</span></div>
                      <div className="w-1/2 "><span>{item?.brand}</span></div>
                    </div>
                    <div className="container flex">
                      <div className="w-1/2 "><span className="font-bold">Display</span></div>
                      <div className="w-1/2 "><span>{item?.specifications.display}</span></div>
                    </div>
                    <div className="container flex">
                      <div className="w-1/2 "><span className="font-bold">Storage</span></div>
                      <div className="w-1/2 "><span>{item?.specifications.storage}</span></div>
                    </div>
                    <div className="container flex">
                      <div className="w-1/2 "><span className="font-bold">RAM</span></div>
                      <div className="w-1/2 "><span>{item?.specifications.ram}</span></div>
                    </div>
                    <div className="container flex">
                      <div className="w-1/2 "><span className="font-bold">Processor</span></div>
                      <div className="w-1/2 "><span>{item?.specifications.processor}</span></div>
                    </div>
                    <div className="container flex">
                      <div className="w-1/2 "><span className="font-bold">Graphics</span></div>
                      <div className="w-1/2 "><span>{item?.specifications.graphics}</span></div>
                    </div>
                  </div>
                </div>
                <div className="py-4 px-4">
                  <h2 className="text-2xl font-bold ">Details</h2>
                  <div>{item?.description}</div>
                </div>
              </div>
              <div className="md:w-1/3 my-2 md:my-0 bg-surface">
                <div className="">
                  <h2 className="mb-2">
                    <span className="bg-primary pt-1 pb-1 pr-9 pl-2.5" style={{ clipPath: "polygon(0 0,85% 0,95% 100%,0% 100%)" }}>Similar Products</span>
                  </h2>
                </div>
                Similar Products</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
