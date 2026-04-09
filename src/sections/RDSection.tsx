import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Brain, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function RDSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const badge = badgeRef.current;
    const headline = headlineRef.current;
    const subheadline = subheadlineRef.current;
    const card = cardRef.current;

    if (!section || !bg || !badge || !headline || !subheadline || !card) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      scrollTl
        .fromTo(bg,
          { scale: 1.10, opacity: 0.9 },
          { scale: 1.00, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(badge,
          { x: '-30vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo(headline,
          { x: '-55vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.02
        )
        .fromTo(subheadline,
          { x: '-35vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.05
        )
        .fromTo(card,
          { x: '55vw', opacity: 0, scale: 0.98 },
          { x: 0, opacity: 1, scale: 1, ease: 'power2.out' },
          0.05
        );

      scrollTl
        .to(badge,
          { x: '-12vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .to(headline,
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.71
        )
        .to(subheadline,
          { y: '10vh', opacity: 0, ease: 'power2.in' },
          0.72
        )
        .to(card,
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .to(bg,
          { scale: 1.08, opacity: 0.85, ease: 'power2.in' },
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="rd-section"
      className="section-pinned z-40"
    >
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src="/solterica_mystical.jpg" 
          alt="Solterica AI mystical background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-solterix-dark/80 via-solterix-dark/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full h-full flex items-center">
        <div className="absolute left-[6vw] top-[14vh] w-[44vw]">
          <span 
            ref={badgeRef}
            className="inline-block px-3 py-1 bg-solterix-mint/20 text-solterix-mint text-xs font-semibold uppercase tracking-wider rounded mb-4"
          >
            Research & Development
          </span>

          <h2 
            ref={headlineRef}
            className="font-heading font-bold uppercase tracking-[0.08em] leading-[1.1] text-white mb-4"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            SOLTERICA AI
          </h2>
          
          <p 
            ref={subheadlineRef}
            className="text-subheadline text-solterix-muted max-w-[34vw]"
          >
            Establishing confidence and peace in everyday life.
          </p>
        </div>

        <div 
          ref={cardRef}
          className="absolute right-[6vw] top-[50%] translate-y-[-50%] w-[30vw] info-card rounded-lg p-6"
        >
          <h3 className="text-cta text-white mb-4">What it does</h3>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Brain className="w-5 h-5 text-solterix-mint mt-0.5 flex-shrink-0" />
              <span className="text-subheadline text-solterix-muted">
                Map out your life from day to day.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-solterix-mint mt-0.5 flex-shrink-0" />
              <span className="text-subheadline text-solterix-muted">
                Personalized spiritual guidance.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-solterix-mint mt-0.5 flex-shrink-0" />
              <span className="text-subheadline text-solterix-muted">
                Ease of mind in a chaotic world.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
