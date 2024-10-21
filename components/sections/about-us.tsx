
import AboutContent from "@/components/sections/about/AboutContent";
import AboutGallery from "@/components/sections/about/AboutGallery";

export default function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2">
        <AboutContent page={true} />
        <AboutGallery />
      </div>
    </section>
  )
}