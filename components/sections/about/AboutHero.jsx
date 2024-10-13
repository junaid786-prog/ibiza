import Image from 'next/image'

export default function AboutHero() {
    return (
        <section className="relative h-[60vh] md:h-[80vh]">
            <Image
                src="/ibiza-1.jpeg"
                alt="Ibiza's collection"
                layout="fill"
                objectFit="cover"
                priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h1 className="text-7xl font-bold text-white text-center font-serif">
                    About Ibiza's
                </h1>
            </div>
        </section>
    )
}