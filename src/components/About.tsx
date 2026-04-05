"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="reveal py-28 lg:py-36 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          {/* Text — 3 cols */}
          <div className="lg:col-span-3">
            <p className="text-[0.8rem] uppercase tracking-[0.15em] font-medium text-[var(--color-accent)] mb-4">
              About Us
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-[2rem] md:text-[2.75rem] font-semibold text-[var(--color-text)] tracking-[-0.02em] leading-tight mb-8">
              A Cut Above the Rest,<br className="hidden md:block" /> Right Here in Queensway
            </h2>
            <div className="space-y-6 text-[1.125rem] leading-[1.8] text-[var(--color-text-muted)]">
              <p>
                Nestled on the iconic Queensway strip in London&apos;s W2, London Base Barbershop has become a cornerstone of the neighbourhood. We&apos;re more than just a place to get a haircut &mdash; we&apos;re a community space where regulars catch up, newcomers feel instantly welcome, and every chair tells a story.
              </p>
              <p>
                Our barbers bring years of hands-on experience to every cut, blending classic techniques with contemporary trends. Whether you&apos;re after a sharp skin fade, a traditional scissor cut, or a hot towel shave that takes you back in time, we approach each client with the same attention to detail and genuine care.
              </p>
              <p>
                Step through our doors and you&apos;ll find a space designed for you to relax, unwind, and leave looking your absolute best. That&apos;s the London Base promise.
              </p>
            </div>
          </div>

          {/* Decorative element — 2 cols */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              {/* Background shapes */}
              <div className="absolute inset-0 rounded-3xl bg-[var(--color-surface)] rotate-3" />
              <div className="absolute inset-2 rounded-3xl bg-white shadow-sm -rotate-2" />

              {/* Rating display */}
              <div className="absolute inset-4 rounded-2xl flex flex-col items-center justify-center text-center p-8">
                {/* Decorative quote mark */}
                <svg className="w-12 h-12 text-[var(--color-accent)] opacity-30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                </svg>

                <div className="font-[family-name:var(--font-heading)] text-[5rem] font-bold text-[var(--color-text)] leading-none mb-2">
                  4.0
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <svg key={i} className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-5 h-5 text-[var(--color-accent)]/30" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <p className="text-[var(--color-text-muted)] text-sm">
                  Rated on Google
                </p>

                {/* Decorative accent line */}
                <div className="w-12 h-[2px] bg-[var(--color-accent)] mt-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
