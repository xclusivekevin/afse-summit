import type { Metadata } from "next";
import { Icon, PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "Abuja Office & General Inquiries - Contact African Food Network", description: "Get in touch with the African Food Network team. Contact us for press, sponsorship, or general inquiries at our Abuja, Nigeria office." };
export default function Contact() {
  return (
    <>
      <PageHero title="Contact Us" sub="For partnership inquiries, speaker proposals, press accreditation, and general questions about the African Food Summit & Expo UK 2026, please reach out to the Summit team." />
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            {[["phone", "Phone", <a key="p" href="tel:+2345678901234">+234 567 8901 2345</a>], ["mail", "Email", <a key="e" href="mailto:summit@afrifoodnetwork.com">summit@afrifoodnetwork.com</a>], ["pin", "Address", "76 Ralph Shodeinde Street, Abuja"]].map(([i, t, v]) => (
              <div key={t as string} className="card flex items-start gap-4 p-6"><Icon name={i as string} size={24} className="mt-1 shrink-0" /><div><h2 className="text-[16px]">{t as string}</h2><p className="mt-1 text-[14px]">{v}</p></div></div>
            ))}
          </div>
          <div className="card p-8">
            <h2 className="text-[24px]">Send A Message</h2>
            <form action="mailto:summit@afrifoodnetwork.com" method="post" encType="text/plain" className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-[13px]">Full Name *<input className="input mt-1" name="name" required /></label>
              <label className="text-[13px]">Email *<input className="input mt-1" name="email" type="email" required /></label>
              <label className="text-[13px]">Organisation<input className="input mt-1" name="organisation" /></label>
              <label className="text-[13px]">Subject *<select className="input mt-1" name="subject" required defaultValue=""><option value="" disabled>Select a topic</option><option>Partnership Enquiry</option><option>Speaker Proposal</option><option>Press / Media</option><option>General Enquiry</option></select></label>
              <label className="text-[13px] sm:col-span-2">Message<textarea className="input mt-1 min-h-[140px]" name="message" /></label>
              <div className="sm:col-span-2"><button type="submit" className="btn btn--primary">Send Message</button></div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
