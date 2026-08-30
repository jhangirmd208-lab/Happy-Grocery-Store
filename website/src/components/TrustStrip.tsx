import { Star, MessageCircle, Clock, MapPin } from 'lucide-react';
import { siteData } from '../data';
import { FadeIn, Section } from './ui';

export default function TrustStrip() {
  return (
    <div className="bg-surface border-y border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <FadeIn delay={0.1} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-1">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <span className="font-black text-2xl text-primary mb-1">{siteData.googleRating}★</span>
            <span className="text-xs font-bold text-muted uppercase tracking-wider">Google Rating<br/>Verified</span>
          </FadeIn>
          <FadeIn delay={0.2} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="font-black text-2xl text-primary mb-1">{siteData.reviewCount}</span>
            {siteData.googleReviewsUrl !== "#" ? (
              <a href={siteData.googleReviewsUrl} className="text-xs font-bold text-muted uppercase tracking-wider hover:text-primary transition-colors">Verified<br/>Reviews</a>
            ) : (
              <span className="text-xs font-bold text-muted uppercase tracking-wider">Verified<br/>Reviews</span>
            )}
          </FadeIn>
          <FadeIn delay={0.3} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-1">
              <Clock className="w-6 h-6" />
            </div>
            <span className="font-black text-xl text-primary mb-1">Daily</span>
            <span className="text-xs font-bold text-muted uppercase tracking-wider">Open<br/>{siteData.hours.split(" ")[0] + " " + siteData.hours.split(" ")[1]} – {siteData.hours.split(" ")[3] + " " + siteData.hours.split(" ")[4]}</span>
          </FadeIn>
          <FadeIn delay={0.4} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-1">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="font-black text-xl text-primary mb-1">Local</span>
            <span className="text-xs font-bold text-muted uppercase tracking-wider">Store<br/>Jagjeetpur</span>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
