import AboutHero from '@/components/sections/about/AboutHero'
import AboutContent from '@/components/sections/about/AboutContent'
import AboutGallery from '@/components/sections/about/AboutGallery'
import Newsletter from '@/components/sections/news-letter'
import AboutPress from "@/components/sections/about/AboutPress";


export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <AboutHero />
                <AboutContent />
                <AboutPress/>
                <Newsletter />
            </main>
        </div>
    )
}