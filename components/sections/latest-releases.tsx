import Link from "next/link"
import { Button } from "@/components/ui/button"
import {latestReleases} from "@/data/dummy-data";
import {Card, CardFooter, CardHeader} from "@/components/ui/card";

export default function LatestReleases() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-8 font-serif">Discover Latest Releases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            latestReleases?.map((product) => (
                <Card key={product.id} className="shadow-lg">
                  <CardHeader>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="rounded-lg object-cover lg:h-[600px] md:h-[500px] sm:h-[400px] w-full"
                    />
                  </CardHeader>
                  <div className="px-6 py-2 flex justify-between">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-lg font-semibold">{product.price} €</p>
                  </div>
                  <CardFooter>
                    <Link href={`/product/${product.id}`}>
                      <Button variant="outline" className="w-full">Show Options</Button>
                    </Link>
                  </CardFooter>
                </Card>
            ))
          }
        </div>
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/collections">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}