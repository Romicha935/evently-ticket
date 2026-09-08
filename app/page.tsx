
import CategoriesSection from "./components/home/CategorySection";
import HomeCTA from "./components/home/CTA";
import FeaturedEvents from "./components/home/FeatureEvents";
import HeroSection from "./components/home/HeroSection";
import HowItWorks from "./components/home/HowItWorks";
import UpcomingEvents from "./components/home/UpCommingEvents";
import WhyEvently from "./components/home/WhyEvently";



export default function Home() {
  return (
    <main>
     <HeroSection/>
     <FeaturedEvents/>
     <CategoriesSection/>
     <UpcomingEvents/>
     <HowItWorks/>
     <WhyEvently/>
     <HomeCTA/>
    </main>
  );
} 