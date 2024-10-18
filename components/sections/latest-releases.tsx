import Link from "next/link"
import { Button } from "@/components/ui/button"
import {latestReleases} from "@/data/dummy-data";
import Heading from "@/components/shared/header";
import ProductCard from "@/components/cards/ProductCard";

export default function LatestReleases() {
  return (
    <section className="lg:py-16 md:py-12 sm:py-12 xs:py-8 lg:px-10 md:px-8 sm:px-4">
      <div className="container mx-auto px-4 sm:px-6 py-8 lg:px-8">
        <Heading title={"OUR COLLECTION"} subtitle={"DISCOVER"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            latestReleases?.map((product) => (
                <div key={product.id}>

                <ProductCard product={product} />
                </div>
            ))
          }
        </div>
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/collections">View All Collections</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}