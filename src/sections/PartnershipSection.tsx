import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, FlaskConical, Rocket, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    icon: Lightbulb,
    title: 'Ideate',
    description: 'We start with your vision. Brainstorm, research, and validate concepts before a single line of code.',
  },
  {
    icon: FlaskConical,
    title: 'Research & Development',
    description: 'Build prototypes, test hypotheses, and refine the product-market fit with real users.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Ship fast with full design, engineering, and compliance support. Go to market with confidence.',
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    description: 'Growth strategies, operational excellence, and follow-on capital when it counts.',
  },
];

export default function PartnershipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(content,
        { y: '8vh', opacity: 0 },
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
      id="partnership-section"
      className="relative z-50 bg-solterix-dark py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-solterix-dark/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto px-[6vw]">
        <div ref={contentRef} className="text-center">
          <h2 
            className="font-heading font-bold uppercase tracking-[0.08em] leading-[1.1] text-white mb-6"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            We build with founders.
          </h2>
          
          <p className="text-subheadline text-solterix-muted max-w-2xl mx-auto mb-16">
            From the first spark of an idea to a thriving business, Solterix partners early and stays late. We bring product, design, and operations to ventures in wellness and sustainability.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {phases.map((phase) => (
              <div
                key={phase.title}
                className="info-card rounded-lg p-6 hover:border-solterix-mint/30 transition-colors duration-300 text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-solterix-mint/10 flex items-center justify-center flex-shrink-0">
                    <phase.icon className="w-5 h-5 text-solterix-mint" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-white mb-1">
                      {phase.title}
                    </h3>
                    <p className="text-subheadline text-solterix-muted">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
