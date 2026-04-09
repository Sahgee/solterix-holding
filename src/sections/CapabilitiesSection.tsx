import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Palette, Code, ShieldCheck, TrendingUp, Truck, Zap, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const capabilitiesLeft = [
  { icon: Layers, text: 'Product strategy & UX' },
  { icon: Palette, text: 'Brand systems & copy' },
  { icon: Code, text: 'Full-stack engineering' },
  { icon: ShieldCheck, text: 'Compliance & QA' },
];

const capabilitiesRight = [
  { icon: TrendingUp, text: 'Go-to-market & growth' },
  { icon: Truck, text: 'Operations & logistics' },
  { icon: Zap, text: 'Rapid prototyping' },
  { icon: Users, text: 'Team building & hiring' },
];

export default function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(content,
        { y: '6vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="capabilities-section"
      className="relative z-50 bg-solterix-dark py-24"
    >
      <div className="max-w-[800px] mx-auto px-[6vw]">
        <div ref={contentRef}>
          <h2 
            className="font-heading font-bold uppercase tracking-[0.08em] leading-[1.1] text-white mb-12 text-center"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Capabilities
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="space-y-4">
              {capabilitiesLeft.map((cap) => (
                <div 
                  key={cap.text}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-solterix-mint/10 flex items-center justify-center flex-shrink-0">
                    <cap.icon className="w-5 h-5 text-solterix-mint" />
                  </div>
                  <span className="text-subheadline text-solterix-muted">
                    {cap.text}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              {capabilitiesRight.map((cap) => (
                <div 
                  key={cap.text}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-solterix-mint/10 flex items-center justify-center flex-shrink-0">
                    <cap.icon className="w-5 h-5 text-solterix-mint" />
                  </div>
                  <span className="text-subheadline text-solterix-muted">
                    {cap.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
