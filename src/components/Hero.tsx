"use client";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-primary)]">
      {/* Background geometric art */}
      <div className="absolute inset-0">
        {/* Gradient mesh base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1a1510] to-[#0A0A0A]" />

        {/* Subtle dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, var(--color-accent) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Large decorative circle — top right */}
        <div className="animate-float absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-[var(--color-accent)]/20" />
        <div className="animate-float absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-[var(--color-accent)]/10" />

        {/* Floating accent shape — bottom left */}
        <div className="animate-float-reverse absolute bottom-20 -left-16 w-72 h-72 rounded-full bg-[var(--color-accent)]/[0.04]" />

        {/* Diagonal line accent */}
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--color-accent)]/10 to-transparent rotate-12 origin-top" />

        {/* Small floating square */}
        <div className="animate-slow-spin absolute top-1/4 right-1/4 w-16 h-16 border border-[var(--color-accent)]/20 rotate-45" />

        {/* Accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)]/[0.03] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Small label */}
        <p className="text-[0.8rem] uppercase tracking-[0.25em] text-[var(--color-accent)] mb-8 font-medium">
          Est. in Queensway, London
        </p>

        {/* Main heading */}
        <h1 className="font-[family-name:var(--font-heading)] text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-bold text-white leading-[0.95] tracking-[-0.03em] mb-8">
          London Base
          <br />
          <span className="text-[var(--color-accent)]">Barbershop</span>
        </h1>

        {/* Tagline */}
        <p className="max-w-xl mx-auto text-lg md:text-xl text-white/60 font-[family-name:var(--font-body)] font-normal leading-relaxed mb-12">
          Where timeless craftsmanship meets modern style. Your neighbourhood barbershop in the heart of Queensway.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#contact"
            className="rounded-full bg-[var(--color-accent)] px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-[var(--color-primary)] hover:bg-[var(--color-accent-dark)] hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
          >
            Book Now
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/20 px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-white hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] transition-all duration-300"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  );
}
