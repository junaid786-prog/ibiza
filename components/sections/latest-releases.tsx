import Link from "next/link"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Handcrafted Vase",
    price: "$129.00",
    image: "/inside-1.jpeg?height=400&width=300",
  },
  {
    id: 2,
    name: "Woven Basket",
    price: "$89.00",
    image: "/inside-2.jpeg?height=400&width=300",
  },
  {
    id: 3,
    name: "Ceramic Bowl Set",
    price: "$159.00",
    image: "/inside-3.jpeg?height=400&width=300",
  },
  {
    id: 4,
    name: "Artisan Wall Hanging",
    price: "$199.00",
    image: "/inside-4.jpeg?height=400&width=300",
  },
  {
    id: 5,
    name: "Handmade Candle Set",
    price: "$49.00",
    image: "/inside-5.jpeg?height=400&width=300",
  },
  {
    id: 6,
    name: "Handwoven Rug",
    price: "$299.00",
    image: "/collection-3.jpeg?height=400&width=300",
  }
]

export default function LatestReleases() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 font-serif">Discover Latest Releases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}