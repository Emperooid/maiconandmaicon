import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import CompaniesSection from "../components/CompaniesSection";
import ServicesSection from "../components/ServicesSection";
import ReviewSection from "../components/ReviewSection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CategoriesSection from "../components/CategoriesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <CompaniesSection />
      <ServicesSection />
      <ReviewSection />
      <PricingSection />
      <TestimonialsSection />
      <CategoriesSection />
      <Footer />
    </main>
  );
}
