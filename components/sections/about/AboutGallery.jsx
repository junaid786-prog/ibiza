
import {Heading} from "@/components/shared/header";
import Image from "next/image";

const images = [
    { src: '/ibiza-enterance.jpeg', alt: 'Ibiza beach' },
    { src: '/collections/coll-1.jpeg?height=300&width=300', alt: 'Bohemian style clothing' },
    { src: '/collections/coll-2.jpeg?height=300&width=300', alt: 'Bohemian style clothing' },
    { src: '/collections/coll-3.jpeg?height=300&width=300', alt: 'Artisan at work' },
]

export default function AboutGallery() {
    return (
        <section className="p-8 py-16">
            <Heading title={"GALLERY"} subtitle={"EXPLORE OUR"} />
            <div className={`grid grid-cols-2 space-x-4 space-y-4`}>
                {images.map((image, index) => (
                    <div key={index} className="relative text-black">
                        {/*<img src={image.src} alt={image.alt} className="rounded-lg aspect-square"/>*/}
                        <Image src={image.src} alt={image.alt} width={500} height={500} className="rounded-lg aspect-square w-full"/>
                    </div>
                ))}
            </div>
        </section>
    )
}