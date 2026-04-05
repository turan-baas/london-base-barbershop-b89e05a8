"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    text: "Hands down the best barbershop in Queensway. I've been coming here for over a year and the consistency is unmatched. They really listen to what you want and deliver every time.",
    name: "James W.",
    initial: "J",
    delay: 1,
  },
  {
    text: "Walked in without an appointment and was seen within ten minutes. The hot towel shave was incredible — felt like a proper gentleman walking out. Will definitely be back.",
    name: "Marcus T.",
    initial: "M",
    delay: 2,
  },
  {
    text: "Found this place after moving to the area and I'm so glad I did. The barbers are skilled, the atmosphere is relaxed, and the prices are very fair for the quality you get.",
    name: "Daniel R.",
    initial: "D",
    delay: 3,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="reviews" ref={ref} className="reveal py-28 lg:py-36 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[0.8rem] uppercase tracking-[0.15em] font-medium text-[var(--color-accent)] mb-4">
            Testimonials
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-[2rem] md:text-[2.75rem] font-semibold text-[var(--color-text)] tracking-[-0.02em] leading-tight mb-8">
            What Our Clients Say
          </h2>

          {/* Google rating badge */}
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl shadow-sm px-8 py-5">
            {/* Google "G" logo */}
            <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>

            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <span className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-text)] leading-none">4.8</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[var(--color-text-muted)] text-sm mt-1">
                Based on Google Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className={`reveal reveal-delay-${review.delay} bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-10 relative`}
            >
              {/* Decorative quote */}
              <svg className="absolute top-8 right-8 w-12 h-12 text-[var(--color-accent)] opacity-15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
              </svg>

              {/* Stars at top */}
              <div className="mb-6">
                <Stars />
              </div>

              <p className="text-[var(--color-text)] text-lg leading-relaxed mb-8 pr-8">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                {/* Avatar initial */}
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <span className="font-[family-name:var(--font-heading)] text-[var(--color-accent)] text-lg font-bold">
                    {review.initial}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-text)]">
                    {review.name}
                  </p>
                  <p className="text-[var(--color-text-muted)] text-sm mt-0.5">
                    Google Review
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
