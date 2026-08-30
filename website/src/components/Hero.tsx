import { MapPin, Phone } from 'lucide-react';
import { siteData } from '../data';
import { Button, FadeIn } from './ui';

export default function Hero() {
  return (
    <section id="home" className="relative bg-brand-bg pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-block px-3 py-1 bg-accent text-main text-xs font-extrabold uppercase tracking-widest rounded mb-6">
                Locally Owned & Operated
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold leading-[1.05] tracking-tight mb-6 text-main">
                Everyday Essentials,<br/>
                <span className="text-primary">Right Around the Corner.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted mb-8 leading-relaxed max-w-lg">
                Your convenient local grocery store in Jagjeetpur, Haridwar. Find everyday grocery and household essentials, check store information and get directions with ease.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="flex flex-wrap gap-4">
              <Button href={siteData.directionsUrl} variant="primary">
                Get Directions
              </Button>
              <Button href={`tel:${siteData.phoneClean}`} variant="outline">
                <Phone className="w-4 h-4 mr-2" />
                Call the Store
              </Button>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4} className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-[2.5rem] transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800" 
              alt="Happy Grocery Store interior" 
              className="relative z-10 rounded-3xl object-cover w-full h-[400px] lg:h-[500px] shadow-xl"
            />
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
}
