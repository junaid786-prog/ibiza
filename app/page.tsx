import AboutUs from "@/components/sections/about-us";
import CategorySearch from "@/components/sections/category-search";
import HeroSlider from "@/components/sections/hero-slider";
import LatestReleases from "@/components/sections/latest-releases";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <LatestReleases />
      <AboutUs />
      <CategorySearch />
    </div>
  );
}