// src/components/FAQ.tsx
import React from "react";

type FAQProps = {
  containerClass?: string; // e.g. "container mx-auto px-6 max-w-7xl"
  compact?: boolean;      // if true, uses tighter spacing + smaller text
};

const faqs = [
  { q: "What services do you offer?", a: "Custom web & mobile apps, SaaS, AI integrations and automation." },
  { q: "How long does a typical project take?", a: "Small MVPs: ~2–4 weeks. Larger/enterprise: several months depending on scope." },
  { q: "How do we start?", a: "Send a short brief or email and we'll schedule a discovery call." },
  { q: "Do you work with startups?", a: "Yes — startups and enterprises; we adapt to budget and stage." },
  { q: "What tech do you use?", a: "We primarily use TypeScript, React/Next.js, Node.js and cloud-native infra." },
  { q: "Do you provide maintenance?", a: "Yes — we offer post-launch support and SLAs if needed." },
  { q: "Can you scale our product?", a: "We do audits, architectural improvements and performance tuning." },
  { q: "How do you price projects?", a: "Fixed-price for scoped work or time-and-materials for iterative engagements." }
];

export default function FAQ({ containerClass = "max-w-3xl mx-auto", compact = false }: FAQProps) {
  const textSize = compact ? "text-xs" : "text-sm";
  const spacingY = compact ? "space-y-2" : "space-y-3";
  const summaryPadding = compact ? "py-1" : "py-2";

  return (
    <section id="faq" aria-labelledby="faq-heading" className="w-full bg-transparent">
      <h2 id="faq-heading" className="sr-only">Frequently Asked Questions</h2>

      <div className={containerClass + " py-4"}>
        <ul className={spacingY}>
          {faqs.map((f, i) => (
            <li key={i} className="">
              <details className="group" role="group">
                <summary
                  className={
                    [
                      "list-none cursor-pointer select-none flex items-center justify-between gap-3",
                      summaryPadding,
                      "px-0",
                      "font-medium",
                      textSize,
                      // make sure we inherit parent color & font
                      "text-current bg-transparent"
                    ].join(" ")
                  }
                >
                  <span className="truncate">{f.q}</span>
                  <span
                    aria-hidden="true"
                    className="ml-4 text-xs opacity-60 transform transition-transform duration-150 group-open:rotate-180"
                  >
                    ▾
                  </span>
                </summary>

                <div className={`mt-1 ml-0 ${textSize} text-current opacity-80`}>
                  {f.a}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
