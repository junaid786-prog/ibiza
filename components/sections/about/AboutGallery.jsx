import Image from 'next/image'

const images = [
    { src: '/ibiza-1.jpeg', alt: 'Ibiza beach' },
    { src: '/ibiza-2.jpeg', alt: 'Bohemian style clothing' },
    { src: '/gallery-3.jpg', alt: 'Artisan at work' },
    { src: '/gallery-4.jpg', alt: 'Ibiza sunset' },
]

export default function AboutGallery() {
    return (
        <section className="py-16 bg-[#f8f5f2]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Inspiration</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {images.map((image, index) => (
                        <div key={index} className="relative aspect-w-1 aspect-h-1 text-black">
                            <Image
                                src="/ibiza-1.jpeg"
                                alt={image.alt}
                                className="rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}