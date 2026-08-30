import { Star } from 'lucide-react';
import { siteData } from '../data';
import { Section, FadeIn, Button } from './ui';

export default function Reviews() {
  return (
    <Section id="reviews" bg="bg-brand-bg">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-main mb-8">What Customers Say</h2>
          
          <div className="bg-surface rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-8 h-8 ${i < Math.floor(Number(siteData.googleRating)) ? 'fill-accent text-accent' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <div className="text-5xl font-black tracking-tight text-main mb-2">
              {siteData.googleRating} <span className="text-xl text-muted font-normal">/ 5</span>
            </div>
            <p className="text-lg text-muted mb-8">
              Based on {siteData.reviewCount} verified Google Reviews
            </p>
            
            <Button href={siteData.googleReviewsUrl !== "#" ? siteData.googleReviewsUrl : undefined} variant="primary">
              Read Our Google Reviews
            </Button>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
