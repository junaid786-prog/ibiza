import { Button } from "@/components/ui/button";
import Heading from "@/components/shared/header";
import Link from "next/link";
import Image from "next/image";

const images = [
    { src: '/ibiza-enterance.jpeg', alt: 'Ibiza beach' },
    { src: '/ibiza-1.jpeg', alt: 'Bohemian style clothing' },
    { src: '/ibiza-2.jpeg', alt: 'Bohemian style clothing' },
    { src: '/ibiza-shop.jpeg', alt: 'Bohemian style clothing' },
];

export default function AboutContent({ page }) {
    return (
        <section className={`w-full lg:py-16 md:py-12 sm:py-8 lg:px-16 md:px-12 sm:px-8 xs:px-8 flex lg:flex-row flex-col items-center ${page ? '' : 'bg-gray-200'}`}>
            <div className="container lg:mr-8 lg:px-8 md:px-8 px-8 py-8">
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
                    <Button className="mt-8">
                        <Link href={'/about'}>
                            Learn More
                        </Link>
                    </Button>
                }
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start mt-8 lg:mt-0">
                {images.map((image, index) => (
                    <div key={index} className="w-1/2 p-2">
                        <Image src={image.src} alt={image.alt} width={300} height={300} className="object-cover rounded-lg" />
                    </div>
                ))}
            </div>
        </section>
    );
}