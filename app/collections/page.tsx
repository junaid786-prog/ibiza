import Link from 'next/link'
import Image from 'next/image'
import {collections} from "@/data/dummy-data";

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