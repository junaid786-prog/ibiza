import {Heading} from "@/components/shared/header";

const images = [
    { src: '/inside-1.jpeg', alt: 'Ibiza beach' },
    { src: '/inside-2.jpeg', alt: 'Bohemian style clothing' },
    { src: '/inside-3.jpeg', alt: 'Ibiza beach' },
    { src: '/inside-4.jpeg', alt: 'Bohemian style clothing' },
]

export default function AboutPress() {
    return (
        <section className="py-16 px-4 md:px-2 sm:px-1 flex flex-wrap items-center bg-gray-200">
            <div className="lg:mx-8 md:mx-8 sm:mx-5 xs:mx-2 max-w-3xl">
                <Heading title={"HOW IT STARTED"} />
                <div >
                    <p className="text-lg">
                        Ibiza's was born from a passion for the free-spirited, bohemian lifestyle that embodies the magical island of Ibiza. Our journey began when our founder, inspired by the vibrant culture and effortless style of the island, decided to create a brand that would capture this essence and bring it to women around the world.
                    </p>
                </div>
            </div>
            <div className="flex flex-1 space-x-4 lg:mx-8 md:mx-6 sm:mx-4 flex-wrap justify-center w-[40%] min-w-80">
                {images.slice(0,2).map((image, index) => (
                    <div key={index} className="relative aspect-w-1 aspect-h-1 text-black my-2">
                        <img src={image.src} alt={image.alt} className="rounded-lg w-80 aspect-square" />

                    </div>
                ))}
            </div>
        </section>
    )
}