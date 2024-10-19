import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/dummy-data";
import Heading from "@/components/shared/header";
import CollectionCard from "../cards/CollectionCard";

export default function CategorySearch() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Heading title={"EXPLORE Ibiza's"} />
                <div className="space-y-4">
                    {categories.map((category) => (
                        <CollectionCard key={category.id} collection={category} />
                    ))}
                </div>
            </div>
        </section>
    );
}