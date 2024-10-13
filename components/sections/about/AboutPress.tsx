
const images = [
    { src: '/inside-1.jpeg', alt: 'Ibiza beach' },
    { src: '/inside-2.jpeg', alt: 'Bohemian style clothing' },
    { src: '/inside-3.jpeg', alt: 'Ibiza beach' },
    { src: '/inside-4.jpeg', alt: 'Bohemian style clothing' },
]

export default function AboutPress() {
    return (
        <section className="py-16 px-4 md:px-0 flex flex-col items-center bg-gray-200">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-4xl font-bold mb-8 text-center font-serif">How it all started</h2>
                <div className="space-y-6 text-lg">
                    <p>
                        Ibiza's was born from a passion for the free-spirited, bohemian lifestyle that embodies the magical island of Ibiza. Our journey began when our founder, inspired by the vibrant culture and effortless style of the island, decided to create a brand that would capture this essence and bring it to women around the world.
                    </p>
                </div>
            </div>
            <div className="flex space-x-4 my-8 flex-wrap">
                {images.map((image, index) => (
                    <div key={index} className="relative aspect-w-1 aspect-h-1 text-black">
                        <img src={image.src} alt={image.alt} className="rounded-lg w-80 aspect-square" />

                    </div>
                ))}
            </div>
        </section>
    )
}