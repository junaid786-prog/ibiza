'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const slides = [
    {
        image: 'collections/shop-1.jpeg?height=800&width=1600',
        title: 'Handcrafted Elegance',
        subtitle: 'Discover our latest collection',
    },
    {
        image: 'collections/shop-2.jpeg?height=800&width=1600',
        title: 'Timeless Beauty',
        subtitle: 'Explore unique pieces',
    },
    {
        image: 'collections/shop-3.jpeg?height=800&width=1600',
        title: 'Artisanal Craftsmanship',
        subtitle: 'Experience the difference',
    },
]

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="w-full justify-center items-center hidden sm:block">
            <div className='relative lg:h-[80vh] md:h-[70vh] sm:[60vh]'>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="object-cover w-full h-full filter brightness-75"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif">{slide.title}</h1>
                            <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                                Shop Now
                            </Button>
                        </div>
                    </div>
                ))}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
                >
                    <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
                >
                    <ChevronRight className="h-8 w-8" />
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}