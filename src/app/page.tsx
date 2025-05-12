import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import SignupPaths from '@/components/SignupPaths';
import PartnerLogos from '@/components/PartnerLogos';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Metrics />
      <HowItWorks />
      <About />
      <PartnerLogos />
      <Testimonials />
      <SignupPaths />
      <ContactForm />
      <Footer />
    </main>
  );
}
