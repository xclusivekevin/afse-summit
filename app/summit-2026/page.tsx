import Image from "next/image";
import type { Metadata } from "next";
import { Eyebrow, Btn, Arrow, Icon, PageHero } from "@/components/ui";
import { AFSE } from "@/lib/event";
export const metadata: Metadata = { title: "Summit 2026", description: "Africa's Food Story: Yesterday. Today. Tomorrow. Thursday 22 October 2026, Samsung KX London. Free to attend, registration required." };

const EXPECT = AFSE.expect;
const THEMES = [
  ["leaf", "Sustainable Food Systems & Food Security", "African approaches to resilient, sustainable food production, and the lessons they offer a world under pressure."],
  ["landmark", "Gastronomic Tourism & Culinary Heritage", "Food as cultural identity, economic driver, and diplomatic asset. Africa's cuisine as a global tourism proposition."],
  ["briefcase", "Entrepreneurship, Investment & Trade", "Enabling environments for African food enterprises. Access to capital, market pathways, and the diaspora entrepreneur."],
  ["mic", "Media, Storytelling & Cultural Perception", "How narrative shapes global perceptions of African food, and how African voices can reclaim and lead that story."],
  ["users", "Youth, Diaspora & Future Leadership", "The next generation's role in building Africa's food ecosystem, from the continent and from diaspora communities worldwide."],
];
const INSIDE = [
  ["screen", "Keynotes & Panels", "High-level addresses and conversations in a full-audience format. These sessions set the tone for each Summit theme."],
  ["flask", "Breakout Labs", "Smaller, participatory sessions for entrepreneurs, food professionals, and practitioners. Action-oriented and outcomes-focused."],
  ["landmark", "Policy Roundtables", "Invitation-only sessions with government, institutional, and development partner delegates. Structured for dialogue, not performance."],
  ["phone", "Brand & Innovation Expo", "A curated showcase of African and UK food brands, agritech ventures, and investment-ready businesses."],
  ["target", "Culinary Unity Experience", "A celebration of African food heritage, performances, tastings, and cultural activations woven into the Summit experience."],
];

export default function Summit2026() {
  return (
    <>
      <PageHero eyebrow={`${AFSE.dateLong} · ${AFSE.time} · ${AFSE.venue}, London`} title="African Food Summit & Expo UK 2026" sub={<><p className="font-[family-name:var(--font-display)] text-[20px] font-semibold text-white md:text-[26px]">{AFSE.theme}</p><p className="mt-3">{AFSE.price}</p></>}>
        <Btn href={AFSE.tickets}>Get Your Free Ticket <Arrow /></Btn>
        <Btn href="#programme" variant="outline-dark">See the Programme</Btn>
      </PageHero>
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-4 text-[length:var(--text-h2)]">About AFSE UK 2026</h2>
            <p className="prose-justify mt-5">The African Food Summit &amp; Expo comes to the UK for the first time. Making its UK debut during Black History Month, AFSE UK 2026 brings together people from across food, culture, business, sustainability, development and innovation to explore Africa&apos;s food story and where it is heading.</p>
            <p className="prose-justify mt-4">This year&apos;s theme, &ldquo;{AFSE.theme}&rdquo;, looks at where our food traditions come from, what is happening across African food today, and how we can shape the future.</p>
            <div className="mt-6 rounded-xl border-l-4 border-[color:var(--color-action)] bg-[color:var(--color-bg-alt)] p-5"><p className="text-[12px] font-semibold uppercase tracking-wide text-[color:var(--color-action)]">The panel question</p><p className="mt-2 text-[15px] text-[color:var(--color-text-strong)]">{AFSE.panel}</p></div>
            <h3 id="programme" className="mt-8 scroll-mt-28 text-[20px]">What to Expect</h3>
            <ul className="list-red mt-3 space-y-1">{EXPECT.map((e) => <li key={e}>{e}</li>)}</ul>
          </div>
          <div className="flex justify-center lg:justify-end lg:pr-4"><div className="photo-frame"><Image src="/img/Summit.jpeg" alt="African Food Summit stage" width={520} height={390} className="w-full max-w-[520px] object-cover" /></div></div>
        </div>
      </section>
      <section className="section alt-section">
        <div className="container">
          <div className="text-center"><Eyebrow>Five Pillars</Eyebrow><h2 className="mt-4 text-[length:var(--text-h2)]">Summit Themes</h2><p className="mx-auto mt-3 max-w-2xl">Five thematic areas structure the AFSE UK 2026 programme. Each is explored through dedicated panels, keynotes, and breakout sessions.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {THEMES.map(([i, t, d], n) => (
              <div key={t} className="card p-7"><p className="text-[12px] uppercase tracking-wide text-[color:var(--color-action)]">Theme {n + 1}</p><Icon name={i} size={26} className="mt-3" /><h3 className="mt-3 text-[16px] font-semibold">{t}</h3><p className="mt-2 text-[13px]">{d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container text-center">
          <h2 className="text-[length:var(--text-h2)]">Inside AFSE UK 2026</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{INSIDE.map(([i, t, d]) => <div key={t} className="card px-5 py-8"><Icon name={i} size={28} className="mx-auto" /><h3 className="mt-4 text-[15px] font-semibold">{t}</h3><p className="mt-2 text-[12px]">{d}</p></div>)}</div>
        </div>
      </section>
      <section className="dark-section py-24 text-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.84), rgba(0,0,0,0.84)), url(/img/Summit-Hero-1-scaled.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <h2 className="text-[length:var(--text-h2)] text-white">Be Part of AFSE UK 2026</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] text-white/85">Whether you are a government body, a development institution, a food brand, or an individual leader, there is a role for you at Africa&apos;s most important international food summit in 2026.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4"><Btn href={AFSE.tickets}>Get Your Free Ticket <Arrow /></Btn><Btn href="/partner-with-us" variant="outline-dark">Partner With Us</Btn></div>
        </div>
      </section>
    </>
  );
}
