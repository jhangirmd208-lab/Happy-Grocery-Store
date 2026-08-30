import { ShoppingBasket, Leaf } from 'lucide-react';
import { siteData } from '../data';

export default function Footer() {
  return (
    <footer className="bg-main text-white pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-white">
                <ShoppingBasket className="w-5 h-5" />
                <Leaf className="w-3 h-3 absolute -bottom-1 -right-1 text-accent" />
              </div>
              <div className="font-heading font-black text-xl leading-none uppercase tracking-tight">
                Happy<br/><span className="text-accent text-xs block mt-1 uppercase tracking-widest font-bold">Grocery Store</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4 max-w-xs">
              Your convenient local stop for everyday grocery and household essentials in Haridwar.
            </p>
          </div>

          <div>
            <h4 className="font-black text-lg mb-4 text-white uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-4 text-white uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>{siteData.address}</li>
              <li><a href={`tel:${siteData.phoneClean}`} className="hover:text-white transition-colors">{siteData.phone}</a></li>
              <li>{siteData.hours}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-4 text-white uppercase tracking-widest text-sm">Find Us</h4>
            <ul className="space-y-3">
              <li><a href={siteData.directionsUrl} className="text-gray-400 hover:text-white transition-colors">Google Maps / Directions</a></li>
              <li><a href={siteData.googleReviewsUrl !== "#" ? siteData.googleReviewsUrl : undefined} className="text-gray-400 hover:text-white transition-colors">Google Reviews</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {siteData.businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
