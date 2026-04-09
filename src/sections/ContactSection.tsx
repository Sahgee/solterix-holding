import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, ArrowRight, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

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
      id="contact-section"
      className="relative z-50 bg-solterix-light py-24"
    >
      <div className="max-w-[1400px] mx-auto px-[6vw]">
        <div 
          ref={contentRef}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 
            className="font-heading font-bold uppercase tracking-[0.08em] leading-[1.1] text-solterix-dark mb-6"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Let's build what's next.
          </h2>
          
          <p className="text-subheadline text-solterix-dark/70 mb-10">
            Tell us what you're making. We'll respond within two business days.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setDialogOpen(true)}
              className="cta-button inline-flex items-center justify-center gap-2 group"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a 
              href="mailto:admin@solterixinc.com"
              className="inline-flex items-center justify-center gap-2 text-solterix-dark/70 hover:text-solterix-dark transition-colors group"
            >
              <Mail className="w-4 h-4" />
              <span className="text-cta border-b border-solterix-dark/30 pb-0.5 group-hover:border-solterix-dark transition-colors">
                admin@solterixinc.com
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-[6vw] mt-24 pt-8 border-t border-solterix-dark/10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading font-semibold text-solterix-dark">Solterix</span>
            <span className="text-solterix-dark/50">|</span>
            <span className="text-subheadline text-solterix-dark/60">Delaware C-Corp</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#partnership-section" className="text-cta text-solterix-dark/60 hover:text-solterix-dark transition-colors">
              Approach
            </a>
            <a href="#scaling-section" className="text-cta text-solterix-dark/60 hover:text-solterix-dark transition-colors">
              Portfolio
            </a>
            <a href="#contact-section" className="text-cta text-solterix-dark/60 hover:text-solterix-dark transition-colors">
              Contact
            </a>
          </div>
          
          <p className="text-subheadline text-solterix-dark/40">
            © {new Date().getFullYear()} Solterix Holding, Inc.
          </p>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-solterix-light border-solterix-dark/10 max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-solterix-dark">
              Start a conversation
            </DialogTitle>
            <DialogDescription className="text-solterix-dark/60">
              Tell us about your project and we'll get back to you within two business days.
            </DialogDescription>
          </DialogHeader>
          
          <form className="space-y-4 mt-4" onSubmit={(e) => { e.preventDefault(); setDialogOpen(false); }}>
            <div>
              <label className="text-cta text-solterix-dark/70 block mb-2">Name</label>
              <input 
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-solterix-dark/20 bg-white text-solterix-dark focus:outline-none focus:border-solterix-mint transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="text-cta text-solterix-dark/70 block mb-2">Email</label>
              <input 
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-solterix-dark/20 bg-white text-solterix-dark focus:outline-none focus:border-solterix-mint transition-colors"
                placeholder="you@company.com"
              />
            </div>
            
            <div>
              <label className="text-cta text-solterix-dark/70 block mb-2">Message</label>
              <textarea 
                className="w-full px-4 py-3 rounded-lg border border-solterix-dark/20 bg-white text-solterix-dark focus:outline-none focus:border-solterix-mint transition-colors resize-none"
                rows={4}
                placeholder="Tell us what you're building..."
              />
            </div>
            
            <button 
              type="submit"
              className="w-full cta-button flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send message
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
