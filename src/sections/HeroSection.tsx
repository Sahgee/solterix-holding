import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const companyNameRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const companyName = companyNameRef.current;
    const tagline = taglineRef.current;
    const cta = ctaRef.current;

    if (!section || !bg || !companyName || !tagline || !cta) return;

    const ctx = gsap.context(() => {
      const loadTl = gsap.timeline();
      
      loadTl
        .fromTo(bg, 
          { opacity: 0, scale: 1.06 }, 
          { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
        )
        .fromTo(companyName,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.7'
        )
        .fromTo(tagline,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(cta,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.3'
        );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            gsap.set([companyName, tagline, cta], { opacity: 1, y: 0, scale: 1 });
            gsap.set(bg, { opacity: 1, scale: 1 });
          }
        }
      });

      scrollTl
        .fromTo(companyName,
          { y: 0, opacity: 1 },
          { y: '-12vh', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(tagline,
          { y: 0, opacity: 1 },
          { y: '10vh', opacity: 0, ease: 'power2.in' },
          0.72
        )
        .fromTo(cta,
          { y: 0, opacity: 1 },
          { y: '10vh', opacity: 0, ease: 'power2.in' },
          0.74
        )
        .fromTo(bg,
          { scale: 1, opacity: 1 },
          { scale: 1.08, opacity: 0.85, ease: 'power2.in' },
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToApproach = () => {
    const nextSection = document.getElementById('partnership-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="section-pinned z-10 flex items-center justify-center"
    >
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0 }}
      >
        <img 
          src="/hero_interconnected.jpg" 
          alt="Global interconnectedness"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-solterix-dark/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <div 
          ref={companyNameRef}
          className="mb-4"
          style={{ opacity: 0 }}
        >
          <h1 
            className="font-heading font-bold uppercase tracking-[0.12em] leading-[1] text-white"
            style={{ fontSize: 'clamp(18px, 2vw, 28px)' }}
          >
            SOLTERIX HOLDING INC.
          </h1>
        </div>

        <h2 
          ref={taglineRef}
          className="font-heading font-bold uppercase tracking-[0.08em] leading-[1.1] text-white mb-10 max-w-[min(52vw,720px)]"
          style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
        >
          PLATFORMS FOR REAL LIFE
        </h2>

        <button 
          ref={ctaRef}
          onClick={scrollToApproach}
          className="text-cta cta-mint flex items-center gap-2 group"
          style={{ opacity: 0 }}
        >
          <span className="border-b border-solterix-mint/50 pb-1 group-hover:border-solterix-mint transition-colors">
            Explore Our Approach
          </span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
