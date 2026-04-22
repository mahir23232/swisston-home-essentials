import { useState } from "react";
import { Mail, Clock, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const faqs = [
  {
    q: "Where can I purchase Swisston products?",
    a: "Our full collection is available through our trusted Amazon storefront, with secure checkout, fast shipping, and easy returns handled by Amazon.",
  },
  {
    q: "Do you offer international shipping?",
    a: "Shipping is handled directly through Amazon and varies by region. Please refer to the product listing on Amazon for delivery options to your location.",
  },
  {
    q: "What is your return policy?",
    a: "All returns are handled through Amazon under their standard returns policy, giving you a seamless and protected experience.",
  },
  {
    q: "Are your products dishwasher safe?",
    a: "Most stainless components are dishwasher safe. Specific care instructions are included with every product and listed on each product page.",
  },
  {
    q: "How can I get in touch for press or partnerships?",
    a: "We welcome thoughtful partnerships. Please write to us at hello@swisston.com and a member of our team will be in touch.",
  },
];

const Contact = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Thank you for writing to us",
        description: "A member of our team will respond within one business day.",
      });
    }, 700);
  };

  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 marble-bg border-b border-border/60">
        <div className="container max-w-3xl text-center mx-auto">
          <p className="eyebrow mb-5">Contact</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight">
            We'd love to hear from you.
          </h1>
          <p className="mt-6 text-foreground/70 max-w-xl mx-auto leading-relaxed">
            Questions about a product, an order, or simply curious about the brand?
            Our team is here, and we read every message.
          </p>
        </div>
      </section>

      <section className="container py-20 md:py-28 grid md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-5 space-y-10">
          <div>
            <p className="eyebrow mb-4">Reach Us</p>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-accent mt-0.5" strokeWidth={1.25} />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a href="mailto:hello@swisston.com" className="text-sm text-muted-foreground link-elegant">
                    hello@swisston.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-accent mt-0.5" strokeWidth={1.25} />
                <div>
                  <p className="text-sm font-medium">Hours</p>
                  <p className="text-sm text-muted-foreground">Mon – Fri · 9am to 6pm EST</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-accent mt-0.5" strokeWidth={1.25} />
                <div>
                  <p className="text-sm font-medium">Headquarters</p>
                  <p className="text-sm text-muted-foreground">United States</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-secondary/60 p-8">
            <p className="eyebrow mb-3">A Note From Us</p>
            <p className="font-serif text-xl leading-snug text-foreground/90">
              "Every message matters. We respond personally, usually within
              one business day."
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">— The Swisston Team</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-7 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="eyebrow block mb-2">First Name</label>
              <input
                required
                type="text"
                className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground py-2.5 text-sm font-light focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="eyebrow block mb-2">Last Name</label>
              <input
                required
                type="text"
                className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground py-2.5 text-sm font-light focus:outline-none transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="eyebrow block mb-2">Email</label>
            <input
              required
              type="email"
              className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground py-2.5 text-sm font-light focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="eyebrow block mb-2">Subject</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground py-2.5 text-sm font-light focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="eyebrow block mb-2">Message</label>
            <textarea
              required
              rows={5}
              className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground py-2.5 text-sm font-light focus:outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="bg-foreground text-background px-10 py-4 text-xs uppercase tracking-[0.22em] font-light hover:bg-foreground/90 transition-colors disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      <section className="bg-secondary/40 border-t border-border/60">
        <div className="container py-24">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow mb-3">Frequently Asked</p>
            <h2 className="font-serif text-4xl md:text-5xl">Helpful answers</h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-border">
            {faqs.map((f, i) => (
              <button
                key={i}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full text-left py-6 group"
              >
                <div className="flex items-start justify-between gap-6">
                  <h3 className="font-serif text-xl group-hover:text-accent transition-colors">{f.q}</h3>
                  <span className="font-serif text-2xl text-muted-foreground shrink-0 leading-none mt-1">
                    {openIdx === i ? "–" : "+"}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-[max-height,opacity,margin] duration-500 ease-out ${
                    openIdx === i ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-foreground/75 leading-relaxed pr-12">{f.a}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
