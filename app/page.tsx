
import CategoriesSection from "./components/home/CategorySection";
import FeaturedEvents from "./components/home/FeatureEvents";
import HeroSection from "./components/home/HeroSection";



export default function Home() {
  return (
    <main>
     <HeroSection/>
     <FeaturedEvents/>
     <CategoriesSection/>
    </main>
  );
} 