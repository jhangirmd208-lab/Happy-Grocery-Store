import { MapPin, ShoppingBag, Users, Navigation } from 'lucide-react';
import { Section, FadeIn } from './ui';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Convenient Location",
      description: "Located near the Football Ground in Jagjeetpur."
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-accent" />,
      title: "Everyday Essentials",
      description: "A convenient place to shop for regular grocery and household needs."
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Local & Accessible",
      description: "Designed around the needs of nearby residents."
    },
    {
      icon: <Navigation className="w-8 h-8 text-primary" />,
      title: "Easy to Reach",
      description: "Quick access to directions and contact information."
    }
  ];

  return (
    <Section bg="bg-brand-bg">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="bg-surface rounded-2xl p-6 h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-brand-bg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black tracking-tight text-main mb-3">{feature.title}</h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
