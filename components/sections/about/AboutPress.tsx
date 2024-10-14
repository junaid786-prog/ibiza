import {Heading} from "@/components/shared/header";

const images = [
    { src: '/inside-1.jpeg', alt: 'Ibiza beach' },
    { src: '/inside-2.jpeg', alt: 'Bohemian style clothing' },
    { src: '/inside-3.jpeg', alt: 'Ibiza beach' },
    { src: '/inside-4.jpeg', alt: 'Bohemian style clothing' },
]

export default function AboutPress() {
    return (
        <section className="lg:p-16 md:p-12 sm:p-8 space-y-8 flex flex-col flex-wrap items-center bg-gray-200">

            <div className="lg:mx-16 md:mx-12 sm:mx-8">
                <Heading title={"HOW IT STARTED"}/>
                <div className={"space-y-2"}>
                    <p className="text-lg">
                        Ibiza's was born from a passion for the free-spirited, bohemian lifestyle that embodies the
                        magical island of Ibiza. Our journey began when our founder, inspired by the vibrant culture and
                        effortless style of the island, decided to create a brand that would capture this essence and
                        bring it to women around the world.
                    </p>
                    <p className="text-lg">
                        We believe that fashion should be an expression of individuality, comfort, and confidence. Each
                        piece in our collection is carefully designed to reflect the carefree spirit of Ibiza while
                        maintaining a sense of elegance and versatility. From flowing maxi dresses to intricately
                        embroidered blouses, our clothing is meant to make you feel beautiful and free, whether you're
                        strolling on a beach or exploring a bustling city.
                    </p>
                </div>
            </div>
            <div className="flex flex-1 space-x-4 lg:mx-8 md:mx-6 sm:mx-4 flex-wrap justify-center w-fit">
                {images.map((image, index) => (
                    <div key={index} className="relative aspect-w-1 aspect-h-1 text-black my-2">
                        <img src={image.src} alt={image.alt} className="rounded-lg w-72 aspect-square"/>
                    </div>
                ))}
            </div>
        </section>
    )
}