import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

import image1 from "../../public/collections/coll-1.jpeg";
import image2 from "../../public/collections/coll-2.jpeg";
import image3 from "../../public/collections/coll-3.jpeg";
import image4 from "../../public/collections/coll-4.jpeg";

const collections = [
  { id: 1, name: "Blusas", image: image1, slug: "blusas" },
  { id: 2, name: "Vestidos", image: image2, slug: "vestidos" },
  { id: 3, name: "Pantalones", image: image3, slug: "pantalones" },
  { id: 4, name: "Zapatos", image: image4, slug: "zapatos" },
]

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold font-serif text-center mb-12">Nuestras Colecciones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <Link href={`/collections/${collection.id}`} key={collection.id} className="group">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={collection.image}
                alt={collection.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex items-center justify-center">
                <h2 className="text-white text-3xl font-serif font-bold">{collection.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}