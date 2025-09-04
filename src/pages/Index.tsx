import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import DoctorsSection from "@/components/DoctorsSection";
import StatsSection from "@/components/StatsSection";
import HealthPlansSection from "@/components/HealthPlansSection";
import HospitalInfoSection from "@/components/HospitalInfoSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <DoctorsSection />
        <StatsSection />
        <HealthPlansSection />
        <LocationSection />
        <HospitalInfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
