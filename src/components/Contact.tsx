"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="reveal py-28 lg:py-36 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — contact info + form */}
          <div>
            <p className="text-[0.8rem] uppercase tracking-[0.15em] font-medium text-[var(--color-accent)] mb-4">
              Get in Touch
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-[2rem] md:text-[2.75rem] font-semibold text-[var(--color-text)] tracking-[-0.02em] leading-tight mb-8">
              Visit Us or<br />Drop a Message
            </h2>

            {/* Contact details */}
            <div className="space-y-5 mb-12">
              {/* Phone */}
              <a
                href="tel:+442072293017"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Phone</p>
                  <p className="font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    +44 20 7229 3017
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-accent)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Address</p>
                  <p className="font-medium text-[var(--color-text)]">
                    175 Queensway, London W2 5HL
                  </p>
                </div>
              </div>

              {/* Google Maps link */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=175+Queensway+London+W2+5HL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 px-6 py-2.5 text-sm font-medium text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-colors mt-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Open in Google Maps
              </a>
            </div>

            {/* Contact form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-5 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-5 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 transition-all"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Your message"
                className="w-full rounded-xl border border-neutral-200 bg-white px-5 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 resize-none transition-all"
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--color-accent)] px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-[var(--color-primary)] hover:bg-[var(--color-accent-dark)] hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right — embedded Google Map */}
          <div className="flex items-center">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border-2 border-[var(--color-accent)]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5!2d-0.1876!3d51.5112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761002cbe1a04d%3A0x0!2s175+Queensway%2C+London+W2+5HL!5e0!3m2!1sen!2suk!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.8) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="London Base Barbershop location"
                className="absolute inset-0 w-full h-full"
              />

              {/* Bottom overlay with info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/90 to-transparent p-8 pt-16 pointer-events-none">
                <p className="font-[family-name:var(--font-heading)] text-white text-lg font-semibold mb-1">
                  London Base Barbershop
                </p>
                <p className="text-white/60 text-sm">
                  175 Queensway, London W2 5HL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
