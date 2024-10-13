import AboutUs from "@/components/sections/about-us";
import CategorySearch from "@/components/sections/category-search";
import HeroSlider from "@/components/sections/hero-slider";
import LatestReleases from "@/components/sections/latest-releases";
import AboutContent from "@/components/sections/about/AboutContent";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <LatestReleases />
      <AboutContent />
      <CategorySearch />
    </div>
  );
}