import { MapPin, Phone, Clock } from 'lucide-react';
import { siteData } from '../data';
import { Section, FadeIn, Button } from './ui';

export default function Location() {
  return (
    <Section id="contact" bg="bg-surface">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        <div>
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-main mb-6">Find Happy Grocery Store</h2>
            <p className="text-lg text-muted mb-8">
              We are conveniently located in Jagjeetpur. Drop by to pick up your daily essentials.
            </p>
          </FadeIn>

          <div className="space-y-6 mb-8">
            <FadeIn delay={0.1} className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-main mb-1">Address</h3>
                <p className="text-muted leading-relaxed max-w-sm">{siteData.address}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-main mb-1">Phone</h3>
                <p className="text-muted leading-relaxed">
                  <a href={`tel:${siteData.phoneClean}`} className="hover:text-primary transition-colors">
                    {siteData.phone}
                  </a>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-main mb-1">Hours</h3>
                <p className="text-muted leading-relaxed">{siteData.hours}</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="flex flex-wrap gap-4">
            <Button href={siteData.directionsUrl} variant="primary">
              Get Directions
            </Button>
            <Button href={`tel:${siteData.phoneClean}`} variant="outline">
              Call Now
            </Button>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="h-full min-h-[400px] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-inner relative flex items-center justify-center border border-gray-200">
           {/* Placeholder for Google Maps Embed */}
           <div className="text-center p-6">
             <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
             <p className="text-gray-500 font-medium">Map Integration Placeholder</p>
             <p className="text-sm text-gray-400 mt-1">[GOOGLE MAPS EMBED URL]</p>
           </div>
        </FadeIn>
      </div>
    </Section>
  );
}
