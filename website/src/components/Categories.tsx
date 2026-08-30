import { siteData } from '../data';
import { Section, FadeIn } from './ui';

export default function Categories() {
  return (
    <Section id="products" bg="bg-brand-bg">
      <div className="text-center mb-12">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-main mb-4">Shop Your Everyday Essentials</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Find everything you need in one convenient location.
            <br/><span className="text-xs mt-2 block italic">[CONFIRM ACTUAL INVENTORY WITH BUSINESS]</span>
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {siteData.categories.map((category, index) => (
          <FadeIn key={category.id} delay={index * 0.1}>
            <div className="group relative rounded-2xl overflow-hidden bg-surface shadow-sm hover:shadow-md transition-shadow cursor-pointer aspect-square sm:aspect-[4/3]">
              <img 
                src={category.image} 
                alt={category.name} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 md:p-6">
                <h3 className="text-white font-bold text-lg md:text-xl uppercase tracking-tight">{category.name}</h3>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
