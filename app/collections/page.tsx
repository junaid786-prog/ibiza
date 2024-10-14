
import {collections} from "@/data/dummy-data";
import {Heading} from "@/components/shared/header";
import CollectionCard from "@/components/cards/CollectionCard";

export default function CollectionsPage() {
  return (
    <div className="container lg:p-16 lg:px-32 md:p-12 sm:p-8">
      <Heading title={"COLLECTIONS"} subtitle={"DISCOVER"} />
      <div className="space-y-8">
        {collections?.map((coll) => (
            <div key={coll.id}>
            <CollectionCard collection={coll}/>
            </div>
        ))}
      </div>
    </div>
  )
}