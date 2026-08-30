import { useState } from 'react';
import { X } from 'lucide-react';
import { siteData } from '../data';
import { Section, FadeIn } from './ui';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Section id="gallery" bg="bg-surface">
      <div className="text-center mb-12">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-main mb-4">Inside Our Store</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Take a look at our fresh displays and organized shelves.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {siteData.galleryImages.map((src, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div 
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Store gallery image ${index + 1}`} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 lightbox-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white p-2 rounded-full bg-black/50 hover:bg-black/80 transition"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={selectedImage}
              alt="Expanded gallery view"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
