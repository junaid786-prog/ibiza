import Image from 'next/image'

const images = [
    { src: '/ibiza-enterance.jpeg', alt: 'Ibiza beach' },
    { src: '/ibiza-1.jpeg', alt: 'Bohemian style clothing' },
    { src: '/ibiza-2.jpeg', alt: 'Bohemian style clothing' },
    { src: '/ibiza-shop.jpeg', alt: 'Artisan at work' },
]

export default function AboutGallery({short}) {
    return (
        <section className="py-8">
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