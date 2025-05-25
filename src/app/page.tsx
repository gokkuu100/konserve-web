import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import SignupPaths from '@/components/SignupPaths';
import PartnerLogos from '@/components/PartnerLogos';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import RewardTracker from '@/components/RewardTracker';
import PartnerDirectory from '@/components/PartnerDirectory';
import WasteCategoryTracker from '@/components/WasteCategoryTracker';
import FullImpactReportDownload from '@/components/FullImpactReportDownload';
import MediaMentions from '@/components/MediaMentions';
import CoverageMap from '@/components/CoverageMap';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Metrics />
      <FullImpactReportDownload />
      <WasteCategoryTracker />
      <RewardTracker />
      <HowItWorks />
      <About />
      <CoverageMap />
      <PartnerLogos />
      <PartnerDirectory />
      <MediaMentions />
      <Testimonials />
      <SignupPaths />
      <Blog />
      <ContactForm />
      <Footer />
    </main>
  );
}
