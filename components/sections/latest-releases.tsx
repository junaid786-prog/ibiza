import Link from "next/link"
import { Button } from "@/components/ui/button"
import {latestReleases} from "@/data/dummy-data";
import {Card, CardFooter, CardHeader} from "@/components/ui/card";
import {Heading} from "@/components/shared/header";
import {ProductCard} from "@/components/cards/ProductCard";

export default function LatestReleases() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Heading title={"LATEST RELEASES"} subtitle={"DISCOVER"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            latestReleases?.map((product) => (
                <ProductCard product={product} />
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