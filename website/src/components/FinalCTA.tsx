import { siteData } from '../data';
import { Section, FadeIn, Button } from './ui';

export default function FinalCTA() {
  return (
    <Section bg="bg-primary" className="text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-hover opacity-50 transform -skew-y-3 scale-110 origin-bottom"></div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10 py-8 md:py-12">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-white">Need Groceries? We're Nearby.</h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Visit Happy Grocery Store in Jagjeetpur, Haridwar or contact the store for more information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={siteData.directionsUrl} className="bg-accent text-main hover:bg-yellow-500">
              Get Directions
            </Button>
            <Button href={`tel:${siteData.phoneClean}`} className="bg-white/10 text-white hover:bg-white/20 border-transparent">
              Call Now
            </Button>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
