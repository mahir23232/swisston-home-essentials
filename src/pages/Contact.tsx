import { useState } from "react";
import { Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const faqs = [
  { q: "Where do Swisston pieces ship from?", a: "Every order is fulfilled through Amazon, with free Prime delivery to all fifty states." },
  { q: "Is the matte ink finish dishwasher safe?", a: "The body and components are dishwasher-safe. We recommend a hand wash for the powder-coated Ivory edition to preserve its hand-applied finish." },
  { q: "What is the lifetime mechanical guarantee?", a: "Every Swisston piece is guaranteed for life against mechanical failure. If the lever or seal ever fails under normal use, we replace the piece — no receipt required." },
  { q: "Do you offer linen-wrapped gifting?", a: "Yes. Every piece arrives wrapped in unbleached linen, inside a recycled-board box, with a hand-tied jute cord. No additional cost." },
  { q: "Where are Swisston pieces made?", a: "Designed in Austin, Texas. Prototyped in our central Texas workshop. Polished and finished by a fourth-generation atelier outside Florence." },
  { q: "Can I order in volume for a property or restaurant?", a: "Yes. Reach our concierge directly at hello@swisston.com — we respond personally, usually within a day." },
];

const Contact = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
      toast.success("Note received. We'll be in touch shortly.");
    }, 700);
  };

  return (
    <>
      <section className="surface-paper relative grain pt-40 md:pt-52 pb-20 md:pb-28 border-b border-border/60">
        <div className="container grid md:grid-cols-12 gap-y-10 md:gap-x-12 items-end">
          <div className="md:col-span-8">
            <p className="eyebrow-brass mb-6">Concierge</p>
            <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-[-0.025em]">
              A note to the <span className="display-italic">studio.</span>
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="text-foreground/70 leading-relaxed max-w-sm md:ml-auto">
              Real people in Austin, Texas. We answer personally — usually within a day, often
              within an hour.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-24 md:py-32 grid md:grid-cols-12 gap-y-16 md:gap-x-16">
        <div className="md:col-span-4 space-y-12">
          {[
            { i: Mail,    t: "By note",       v: "hello@swisston.com" },
            { i: Clock,   t: "Studio hours",  v: "Monday — Friday · 9 to 6 CT" },
            { i: MapPin,  t: "The studio",    v: "Austin, Texas · United States" },
          ].map(({ i: Icon, t, v }) => (
            <div key={t}>
              <Icon className="h-4 w-4 text-brass mb-4" strokeWidth={1.25} />
              <p className="eyebrow mb-2">{t}</p>
              <p className="font-display text-xl">{v}</p>
            </div>
          ))}

          <div className="pt-8 border-t border-border/60">
            <p className="eyebrow mb-4">A small promise</p>
            <p className="text-foreground/75 leading-relaxed text-sm">
              We don't run a help-desk. Every note that comes through this form is read by
              someone in the studio, and answered personally.
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-7 md:col-start-6 space-y-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { id: "name",    label: "Your name",      type: "text",  req: true },
              { id: "email",   label: "Your email",     type: "email", req: true },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="block eyebrow mb-3">{f.label}</label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  required={f.req}
                  className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground py-3 text-base focus:outline-none transition-colors"
                />
              </div>
            ))}
          </div>
          <div>
            <label htmlFor="subject" className="block eyebrow mb-3">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground py-3 text-base focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block eyebrow mb-3">Your note</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground py-3 text-base focus:outline-none transition-colors resize-none"
            />
          </div>
          <button type="submit" disabled={submitting} className="btn-ink disabled:opacity-60">
            {submitting ? "Sending…" : "Send the note"}
          </button>
        </form>
      </section>

      <section className="surface-stone relative grain border-t border-border/60">
        <div className="container py-24 md:py-32 grid md:grid-cols-12 gap-y-10 md:gap-x-16">
          <div className="md:col-span-4">
            <p className="eyebrow-brass mb-5">N°02 — Frequently asked</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
              Anything <span className="display-italic">to know.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
              {faqs.map((f, i) => {
                const open = openIdx === i;
                return (
                  <li key={f.q}>
                    <button
                      onClick={() => setOpenIdx(open ? null : i)}
                      className="w-full text-left py-6 flex items-start justify-between gap-6 group"
                    >
                      <span className="font-display text-xl md:text-2xl leading-snug pr-4">{f.q}</span>
                      <span className="font-mono text-xs text-brass mt-2 shrink-0">{open ? "—" : "+"}</span>
                    </button>
                    <div className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <p className="text-foreground/75 leading-relaxed max-w-xl">{f.a}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
