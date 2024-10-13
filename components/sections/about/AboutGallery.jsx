import Image from 'next/image'
import {Heading} from "@/components/shared/header";

const images = [
    { src: '/ibiza-enterance.jpeg', alt: 'Ibiza beach' },
    { src: '/ibiza-1.jpeg', alt: 'Bohemian style clothing' },
    { src: '/ibiza-2.jpeg', alt: 'Bohemian style clothing' },
    { src: '/ibiza-shop.jpeg', alt: 'Artisan at work' },
]

export default function AboutGallery({short}) {
    return (
        <section className="mah-w-screen px-80 py-16">
            <Heading title={"GALLERY"} subtitle={"EXPLORE OUR"} />
            <div className={`${short ? "grid grid-cols-2 space-y-2 space-x-2":"flex flex-col space-y-4 my-4"}`}>
                {images.map((image, index) => (
                    <div key={index} className="relative aspect-w-1 aspect-h-1 text-black">
                        <img src={image.src} alt={image.alt} className="rounded-lg w-full aspect-square"/>

                    </div>
                ))}
            </div>
        </section>
    )
}