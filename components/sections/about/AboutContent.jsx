import {Button} from "@/components/ui/button";
import {Heading} from "@/components/shared/header";
import Link from "next/link";

const images = [
    { src: '/ibiza-enterance.jpeg', alt: 'Ibiza beach' },
    { src: '/ibiza-1.jpeg', alt: 'Bohemian style clothing' },
    { src: '/ibiza-2.jpeg', alt: 'Bohemian style clothing' },
    { src: '/ibiza-shop.jpeg', alt: 'Bohemian style clothing' },
]

export default function AboutContent({page}) {
    return (
        <section className={`w-full lg:py-16 md:py-12 sm:py-8 lg:px-16 md:px-12 sm:px-8 space-x-8 flex items-center ${page ? '':'mr-12 bg-gray-200'}`}>
            <div className="container mr-8">
                <Heading title={page ? 'ABOUT US' : 'OUR STORY'} />
                <div className="space-y-6 text-lg">
                    <p>
                        Ibiza&#39;s was born from a passion for the free-spirited, bohemian lifestyle that embodies the magical island of Ibiza. Our journey began when our founder, inspired by the vibrant culture and effortless style of the island, decided to create a brand that would capture this essence and bring it to women around the world.
                    </p>
                    <p>
                        We believe that fashion should be an expression of individuality, comfort, and confidence. Each piece in our collection is carefully designed to reflect the carefree spirit of Ibiza while maintaining a sense of elegance and versatility. From flowing maxi dresses to intricately embroidered blouses, our clothing is meant to make you feel beautiful and free, whether you&#39;re strolling on a beach or exploring a bustling city.
                    </p>
                    <p>
                        Join us on this journey of self-expression and conscious fashion. Embrace the Ibiza spirit, wherever you are in the world.
                    </p>
                </div>
                {
                    !page &&
                    <Button
                        className="mt-8">
                        <Link href={'/about'}>
                            Get to know us
                        </Link>
                    </Button>
                }
            </div>
                <div className={`grid lg:grid-cols-2 md:grid-cols-1 gap-4 mt-8`}>
                    {images.map((image, index) => (
                        <div key={index} className="relative aspect-w-1 aspect-h-1 text-black">
                            <img src={image.src} alt={image.alt} className="rounded-lg w-full aspect-square"/>
                        </div>
                    ))}
                </div>

        </section>
    )
}