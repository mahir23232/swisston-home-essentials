import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast("Correspondence received. We reply within one working day.");
    setSent(true);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <section className="border-b border-border/60">
        <div className="container py-24 md:py-32">
          <div className="flex items-center gap-4 mb-8">
            <span className="numeral text-3xl">N°IV</span>
            <span className="rule-ember" />
            <span className="plaque-bone">Correspond</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl tracking-[-0.03em] leading-[0.92] max-w-4xl">
            Write to the<br />
            <span className="italic text-ember">house.</span>
          </h1>
          <p className="font-serif italic text-pewter text-lg mt-10 max-w-xl leading-relaxed">
            Concierge for collectors, hospitality buyers, and the occasional
            household question. We reply personally, within one working day.
          </p>
        </div>
      </section>

      <section>
        <div className="container py-20 md:py-24 grid md:grid-cols-12 gap-16">
          <form onSubmit={onSubmit} className="md:col-span-7 space-y-10">
            {[
              { label: "Your name", name: "name", type: "text" },
              { label: "Your address", name: "email", type: "email" },
              { label: "Subject", name: "subject", type: "text" },
            ].map((f) => (
              <div key={f.name}>
                <label className="plaque mb-3 block">{f.label}</label>
                <input
                  required
                  type={f.type}
                  name={f.name}
                  className="w-full bg-transparent border-b border-bone/30 focus:border-ember py-3 text-bone font-serif text-lg focus:outline-none transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="plaque mb-3 block">Your note</label>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full bg-transparent border-b border-bone/30 focus:border-ember py-3 text-bone font-serif text-lg focus:outline-none transition-colors resize-none"
              />
            </div>
            <button type="submit" className="btn-bone">
              {sent ? "Sent — thank you" : "Send correspondence →"}
            </button>
          </form>

          <aside className="md:col-span-4 md:col-start-9 space-y-12">
            <div>
              <p className="plaque-ember mb-3">Studio</p>
              <p className="font-serif text-bone/90 leading-relaxed">
                Swisston Atelier<br />
                Austin, Texas · USA
              </p>
            </div>
            <div>
              <p className="plaque-ember mb-3">Concierge</p>
              <a href="mailto:hello@swisston.com" className="font-serif text-bone hover:text-ember transition-colors">
                hello@swisston.com
              </a>
            </div>
            <div>
              <p className="plaque-ember mb-3">Hours</p>
              <p className="font-serif text-bone/90 leading-relaxed">
                Monday — Friday<br />
                09:00 — 18:00 CT
              </p>
            </div>
            <div>
              <p className="plaque-ember mb-3">Acquire</p>
              <a href="#" target="_blank" rel="noreferrer noopener" className="font-serif text-bone hover:text-ember transition-colors">
                Amazon storefront ↗
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
