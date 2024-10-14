import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/dummy-data";
import { Heading } from "@/components/shared/header";

export default function CategorySearch() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Heading title={"CATEGORIES"} subtitle={"SEARCH FOR"} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <Link key={category.name} href={`/category/${category.id}`} className="flex flex-col">
                            <div className="relative aspect-square overflow-hidden rounded-lg">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="inset-0 bg-opacity-40 flex items-center justify-center transition-opacity duration-300 py-4">
                                <h3 className="text-black text-xl font-semibold">{category.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}