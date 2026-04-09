import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Recycle, Globe, FileCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function SolterraformSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const headline = headlineRef.current;
    const subheadline = subheadlineRef.current;
    const card = cardRef.current;

    if (!section || !bg || !headline || !subheadline || !card) return;

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

      // ENTRANCE (0%-30%)
      scrollTl
        .fromTo(bg,
          { scale: 1.10, opacity: 0.9 },
          { scale: 1.00, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(headline,
          { x: '-55vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0
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

      // EXIT (70%-100%)
      scrollTl
        .to(headline,
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
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
      id="solterraform-section"
      className="section-pinned z-40"
    >
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src="/solterraform_nature_bg.jpg" 
          alt="Solterraform nature background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-solterix-dark/80 via-solterix-dark/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center">
        {/* Left Content */}
        <div className="absolute left-[6vw] top-[14vh] w-[44vw]">
          <h2 
            ref={headlineRef}
            className="font-heading font-bold uppercase tracking-[0.08em] leading-[1.1] text-white mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            SOLTERRAFORM
          </h2>
          
          <p 
            ref={subheadlineRef}
            className="text-subheadline text-solterix-muted max-w-[34vw]"
          >
            Design, materials, and systems that regenerate.
          </p>
        </div>

        {/* Right Info Card */}
        <div 
          ref={cardRef}
          className="absolute right-[6vw] top-[56vh] translate-y-[-50%] w-[34vw] min-h-[26vh] info-card rounded-lg p-8"
        >
          <h3 className="text-cta text-white mb-6">What it does</h3>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Recycle className="w-5 h-5 text-solterix-mint mt-0.5 flex-shrink-0" />
              <span className="text-subheadline text-solterix-muted">
                Lifecycle thinking from concept to disposal.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-solterix-mint mt-0.5 flex-shrink-0" />
              <span className="text-subheadline text-solterix-muted">
                Supplier tools that prioritize people and planet.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FileCheck className="w-5 h-5 text-solterix-mint mt-0.5 flex-shrink-0" />
              <span className="text-subheadline text-solterix-muted">
                Reporting built for real compliance, not greenwashing.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
