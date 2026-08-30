import { Navigation, Phone } from 'lucide-react';
import { siteData } from '../data';

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 p-3 pb-safe flex gap-3">
      <a 
        href={`tel:${siteData.phoneClean}`}
        className="flex-1 bg-brand-bg border border-gray-200 text-main font-medium py-3 rounded-xl flex items-center justify-center gap-2 active:bg-gray-100 transition-colors"
      >
        <Phone className="w-5 h-5" />
        Call
      </a>
      <a 
        href={siteData.directionsUrl}
        className="flex-1 bg-primary text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 active:bg-primary-hover transition-colors shadow-sm"
      >
        <Navigation className="w-5 h-5 fill-current" />
        Directions
      </a>
    </div>
  );
}
