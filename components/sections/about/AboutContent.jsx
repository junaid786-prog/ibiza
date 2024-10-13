import {Button} from "@/components/ui/button";
import {Heading} from "@/components/shared/header";
import Link from "next/link";

const images = [
    { src: '/ibiza-enterance.jpeg', alt: 'Ibiza beach' },
    { src: '/ibiza-1.jpeg', alt: 'Bohemian style clothing' },
]

export default function AboutContent({page}) {
    return (
        <section className={`w-full py-16 mx-auto flex items-center ${page ? '':'mr-12 bg-gray-200'}`}>
            <div className="container px-32">
                <Heading title={page ? 'ABOUT US' : 'OUR STORY'} />
                <div className="space-y-6 text-lg">
                    <p>
                        Ibiza's was born from a passion for the free-spirited, bohemian lifestyle that embodies the magical island of Ibiza. Our journey began when our founder, inspired by the vibrant culture and effortless style of the island, decided to create a brand that would capture this essence and bring it to women around the world.
                    </p>
                    <p>
                        We believe that fashion should be an expression of individuality, comfort, and confidence. Each piece in our collection is carefully designed to reflect the carefree spirit of Ibiza while maintaining a sense of elegance and versatility. From flowing maxi dresses to intricately embroidered blouses, our clothing is meant to make you feel beautiful and free, whether you're strolling on a beach or exploring a bustling city.
                    </p>
                    <p>
                        At Ibiza's, we're committed to sustainability and ethical production. We work closely with skilled artisans, using eco-friendly materials and traditional techniques to create unique, high-quality garments that are kind to both people and the planet. Our goal is to slow down fashion, encouraging our customers to invest in timeless pieces that will be treasured for years to come.
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
            <div className={"mx-32"}>
                <div className={`grid lg:grid-cols-2 gap-4 mt-8`}>
                    {images.map((image, index) => (
                        <div key={index} className="relative aspect-w-1 aspect-h-1 text-black">
                            <img src={image.src} alt={image.alt} className="rounded-lg w-full aspect-square"/>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}