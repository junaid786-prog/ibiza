import Image from 'next/image'
import {Heading} from "@/components/shared/header";
import {Button} from "@/components/ui/button";

const images = [
    { src: '/ibiza-enterance.jpeg', alt: 'Ibiza beach' },
    { src: '/collections/coll-1.jpeg?height=300&width=300', alt: 'Bohemian style clothing' },
    { src: '/collections/coll-2.jpeg?height=300&width=300', alt: 'Bohemian style clothing' },
    { src: '/collections/coll-3.jpeg?height=300&width=300', alt: 'Artisan at work' },
]

export default function AboutGallery({short}) {
    return (
        <section className="mah-w-screen px-80 py-16">
            <Heading title={"GALLERY"} subtitle={"EXPLORE OUR"} />
            <div className={`grid grid-cols-2 space-y-2 space-x-2`}>
                {images.map((image, index) => (
                    <div key={index} className="relative aspect-h-1 text-black">
                        <img src={image.src} alt={image.alt} className="rounded-lg aspect-square"/>
                    </div>
                ))}
            </div>
        </section>
    )
}