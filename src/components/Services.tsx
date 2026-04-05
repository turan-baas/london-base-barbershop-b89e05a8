"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    title: "Classic Haircut",
    price: "£25",
    description:
      "From clean fades to textured crops, our barbers tailor every cut to your face shape and personal style. Includes a consultation, wash, and styled finish.",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=400&fit=crop&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
      </svg>
    ),
  },
  {
    title: "Hot Towel Shave",
    price: "£20",
    description:
      "Experience the ritual of a traditional straight-razor shave. Hot towels, premium lather, and a steady hand deliver the smoothest finish you've ever felt.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=400&fit=crop&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: "Beard Sculpting",
    price: "£18",
    description:
      "Whether you're growing it out or keeping it tight, our beard shaping service includes trimming, lining, and conditioning to keep your facial hair looking sharp.",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=400&fit=crop&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="services" ref={ref} className="reveal py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[0.8rem] uppercase tracking-[0.15em] font-medium text-[var(--color-accent)] mb-4">
            What We Offer
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-[2rem] md:text-[2.75rem] font-semibold text-[var(--color-text)] tracking-[-0.02em] leading-tight">
            Services Crafted for You
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${i + 1} group border border-neutral-200 rounded-2xl overflow-hidden bg-white hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--color-accent)]/30 transition-all duration-300 cursor-default`}
            >
              {/* Service image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-4 right-4 bg-[var(--color-accent)] text-[var(--color-primary)] text-sm font-bold px-4 py-1.5 rounded-full">
                  {service.price}
                </span>
              </div>

              <div className="p-8 lg:p-10">
                <div className="w-12 h-12 rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-accent)] mb-6 group-hover:bg-[var(--color-accent)]/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-lg text-[var(--color-text)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[var(--color-text-muted)] mb-6">
            Ready to experience the London Base difference?
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-[var(--color-primary)] px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-white hover:bg-[var(--color-text)] hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
