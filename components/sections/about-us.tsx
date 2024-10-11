import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutUs() {
  return (
    <section className="py-16 bg-white font-serif">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Ibiza's Way</h2>
            <p className="text-lg text-gray-600">
              At Ibiza's Way, we celebrate the rich tapestry of artisanal craftsmanship. Our curated selection of handmade goods brings the vibrant spirit of global artisans into your home, creating a bridge between traditional techniques and contemporary design.
            </p>
            <p className="text-lg text-gray-600">
              Each piece in our collection tells a unique story, embodying the passion and skill of its creator. We are committed to ethical sourcing and fair trade practices, ensuring that our products not only beautify your space but also support sustainable livelihoods around the world.
            </p>
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/collections/shop-1.jpeg?height=300&width=300"
              alt="Artisan at work"
              className="rounded-lg object-cover w-full h-full"
            />
            <img
              src="/collections/coll-1.jpeg?height=300&width=300"
              alt="Handcrafted product"
              className="rounded-lg object-cover w-full h-full mt-8"
            />
            <img
              src="/collections/coll-2.jpeg?height=300&width=300"
              alt="Traditional weaving"
              className="rounded-lg object-cover w-full h-full"
            />
            <img
              src="/collections/coll-3.jpeg?height=300&width=300"
              alt="Finished product display"
              className="rounded-lg object-cover w-full h-full mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}