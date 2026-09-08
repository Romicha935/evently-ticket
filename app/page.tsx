
import CategoriesSection from "./components/home/CategorySection";
import FeaturedEvents from "./components/home/FeatureEvents";
import HeroSection from "./components/home/HeroSection";
import UpcomingEvents from "./components/home/UpCommingEvents";



export default function Home() {
  return (
    <main>
     <HeroSection/>
     <FeaturedEvents/>
     <CategoriesSection/>
     <UpcomingEvents/>
    </main>
  );
} 