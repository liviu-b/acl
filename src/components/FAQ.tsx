import React from "react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We build custom web & mobile apps, SaaS products, AI integrations and automation pipelines."
  },
  {
    q: "How long does a typical project take?",
    a: "Small MVPs: ~2–4 weeks. Medium to large projects: several months depending on scope."
  },
  {
    q: "How do we start working together?",
    a: "Send a short brief or an email and we’ll schedule a 30-minute discovery call."
  },
  {
    q: "Do you work with startups or only large companies?",
    a: "Both — we help early-stage startups as well as established enterprises scale their products."
  },
  {
    q: "What tech stack do you prefer?",
    a: "We typically use TypeScript, React / Next.js, Node.js, and cloud-native architectures, but adapt to the project's needs."
  },
  {
    q: "Do you offer post-launch support & maintenance?",
    a: "Yes — we offer support plans, SLA-backed maintenance and ongoing product evolution."
  },
  {
    q: "Can you help scale an existing product?",
    a: "Absolutely — we perform audits, redesign architecture where necessary and implement performance/scalability improvements."
  },
  {
    q: "How are projects priced?",
    a: "Pricing depends on requirements: fixed-price for well-scoped work or time-and-materials for iterative projects. We provide estimates after the discovery phase."
  }
];

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="w-full">
      {/* Heading visually-hidden by default to keep layout minimal.
          If you want it visible, replace 'sr-only' with 'text-lg font-semibold mb-4' */}
      <h2 id="faq-heading" className="sr-only">Frequently Asked Questions</h2>

      <div className="max-w-3xl mx-auto py-6">
        <ul className="space-y-2">
          {faqs.map((f, i) => (
            <li key={i} className="last:pb-0">
              <details className="group" role="group">
                <summary
                  className="
                    list-none cursor-pointer select-none
                    flex items-center justify-between gap-3
                    py-2 px-0
                    text-sm font-medium
                    leading-tight
                    before:content-[''] before:inline-block before:w-0
                  "
                >
                  <span className="truncate">{f.q}</span>
                  <span
                    aria-hidden="true"
                    className="ml-4 text-xs opacity-70 transform transition-transform duration-150 group-open:rotate-180"
                  >
                    ▾
                  </span>
                </summary>

                <div className="mt-2 ml-0 text-sm text-slate-600 dark:text-slate-300">
                  {f.a}
                </div>

                {/* subtle divider — uses inherited border color */}
                <div className="mt-3 border-b border-slate-200 dark:border-slate-700" />
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
