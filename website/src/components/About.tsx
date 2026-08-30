import { siteData } from '../data';
import { Section, FadeIn } from './ui';

export default function About() {
  return (
    <Section id="about" bg="bg-surface">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <FadeIn className="relative order-2 md:order-1">
          <div className="absolute inset-0 bg-secondary/20 rounded-[2rem] transform -translate-x-4 -translate-y-4"></div>
          <img 
            src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800" 
            alt="Local grocery shopping" 
            loading="lazy"
            className="relative z-10 rounded-2xl object-cover w-full h-[400px] shadow-lg"
          />
        </FadeIn>
        
        <div className="order-1 md:order-2">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-main mb-6 leading-tight tracking-tight">
              A Convenient Local Stop for Everyday Shopping
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              Happy Grocery Store is a neighborhood grocery store located in Jagjeetpur, Haridwar. Our website makes it simple to discover the store, explore available categories and quickly find the information you need before visiting.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-8">
              We focus on providing fresh, reliable household essentials to our local community with a friendly smile.
            </p>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
