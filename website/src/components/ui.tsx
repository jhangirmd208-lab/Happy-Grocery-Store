import React from 'react';
import { motion } from 'motion/react';

export function Button({ 
  children, variant = 'primary', href, className = '', onClick 
}: { 
  children: React.ReactNode, variant?: 'primary' | 'secondary' | 'outline', href?: string, className?: string, onClick?: () => void 
}) {
  const base = "inline-flex items-center justify-center font-bold uppercase tracking-wide rounded-xl transition-all duration-200 px-8 py-3.5 text-sm shadow-md active:scale-95";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-accent text-main hover:bg-yellow-500",
    outline: "border-2 border-primary text-primary hover:bg-brand-bg"
  };
  
  const classes = `${base} ${variants[variant]} ${className}`;
  
  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }
  return <button onClick={onClick} className={classes}>{children}</button>;
}

export function Section({ 
  id, children, className = '', bg = 'bg-brand-bg' 
}: { 
  id?: string, children: React.ReactNode, className?: string, bg?: string 
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${bg} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
