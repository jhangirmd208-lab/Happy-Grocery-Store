import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Categories from './components/Categories';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import SchemaMarkup from './components/SchemaMarkup';

export default function App() {
  return (
    <div className="font-body text-main bg-brand-bg selection:bg-primary/20 selection:text-primary">
      <SchemaMarkup />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Categories />
        <About />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
