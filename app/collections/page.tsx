import Link from 'next/link'
import Image from 'next/image'
import {collections} from "@/data/dummy-data";
import {Heading} from "@/components/shared/header";
import CollectionCard from "@/components/cards/CollectionCard";

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Heading title={"COLLECTIONS"} subtitle={"DISCOVER"} />
      <div className="space-y-8">
        {collections.map((collection) => (
            <CollectionCard collection={collection}/>
        ))}
      </div>
    </div>
  )
}