import React from "react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We provide custom web & mobile development, SaaS products, AI integrations, and automation solutions."
  },
  {
    q: "How long does a typical project take?",
    a: "From 2–4 weeks for small MVPs to several months for complex enterprise systems."
  },
  {
    q: "How do we start working together?",
    a: "Send us a short brief or message, and we'll schedule a free 30-minute discovery call."
  },
  {
    q: "Do you work with startups or only established companies?",
    a: "We work with both — from early-stage startups to established enterprises."
  },
  {
    q: "What technologies do you specialize in?",
    a: "We mainly use TypeScript, React, Node.js, Next.js, mobile frameworks, and modern cloud architectures."
  },
  {
    q: "Can you help scale an existing product?",
    a: "Yes — we optimize performance, redesign architecture, and improve scalability."
  },
  {
    q: "Do you provide maintenance after delivery?",
    a: "Yes, we offer ongoing support, maintenance, and long-term product evolution."
  },
  {
    q: "How much does a project usually cost?",
    a: "It depends on scope — small MVPs start low, while full digital platforms vary based on complexity and required features."
  }
];

export default function FAQMinimal() {
  return (
    <section id="faq" className="max-w-3xl mx-auto py-8">
      <h3 className="sr-only">Frequently Asked Questions</h3>

      <ul className="space-y-3">
        {faqs.map((f, i) => (
          <li key={i} className="border-b last:border-b-0 pb-3">
            <button
              type="button"
              className="w-full text-left flex items-start gap-3 focus:outline-none"
              onClick={(e) => {
                const next = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (next) next.classList.toggle("hidden");
              }}
            >
              <span className="font-medium text-sm">{f.q}</span>
              <span className="ml-auto text-xs opacity-60">▾</span>
            </button>

            <div className="mt-2 text-sm text-slate-600 hidden">
              {f.a}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
