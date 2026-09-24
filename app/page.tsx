import Image from "next/image";
import { Eyebrow, Btn, Arrow, Icon } from "@/components/ui";
import { AFSE } from "@/lib/event";

const THEMES = [
  ["leaf", "Sustainable Food Systems", "Building resilient food futures, from farm to table."],
  ["landmark", "Gastronomic Tourism & Heritage", "Food as cultural identity, diplomacy, and economic driver."],
  ["briefcase", "Entrepreneurship & Trade", "Creating pathways for African food enterprises in global markets."],
  ["mic", "Media & Cultural Narrative", "Reshaping how Africa's food story is told to the world."],
  ["users", "Youth & Diaspora", "The next generation's role in Africa's food ecosystem."],
];
const PROGRAMME = [
  ["screen", "Keynotes & Panels", "High-level conversations shaping Africa's food future from a global stage."],
  ["flask", "Breakout Labs", "Hands-on sessions for entrepreneurs, innovators, and food professionals."],
  ["landmark", "Policy Roundtables", "High-level conversations shaping Africa's food future from a global stage."],
  ["phone", "Brand & Innovation Expo", "African and UK food brands, agritech ventures, and investment-ready businesses."],
  ["target", "Culinary Unity Experience", "A cultural showcase celebrating the diversity and power of African food heritage."],
];
const STATS = [["calendar", "22 October 2026", "4:00pm - 8:00pm"], ["pin", "Samsung KX", "1 Stable Street, London"], ["globe", "Black History Month", "UK Debut"], ["handshake", "Free to attend", "Registration required"]];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="dark-section relative flex min-h-[640px] items-center overflow-hidden pt-20" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.88)), url(/img/hero-red-curtain.jpeg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container py-24 text-center">
          <Eyebrow dark>{AFSE.dateLong} · {AFSE.venue}, London · Black History Month</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-3xl text-[length:var(--text-h1)] leading-[1.1]">African Food Summit & Expo UK 2026</h1>
          <p className="mx-auto mt-4 font-[family-name:var(--font-display)] text-[18px] font-semibold text-white md:text-[22px]">{AFSE.theme}</p>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] text-white/80">Africa&apos;s leading food summit makes its UK debut, convening the policymakers, innovators and cultural leaders shaping the global food future. Free to attend, registration required.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Btn href={AFSE.tickets}>Get Your Free Ticket <Arrow /></Btn>
            <Btn href="/summit-2026" variant="outline-dark">Explore the Summit</Btn>
          </div>
        </div>
      </section>
      {/* Stat strip */}
      <section className="dark-section">
        <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {STATS.map(([i, l, s]) => (
            <div key={l} className="flex items-center gap-3">
              <Icon name={i} size={26} />
              <div><p className="font-[family-name:var(--font-display)] text-[16px] font-semibold text-white">{l}</p><p className="text-[11px] uppercase tracking-wide text-white/60">{s}</p></div>
            </div>
          ))}
        </div>
      </section>
      {/* Strategic platform */}
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-[length:var(--text-h2)]">A Strategic Platform for Africa&apos;s Food Future</h2>
            <p className="prose-justify mt-5">AFSE UK 2026 is the international edition of Africa&apos;s leading food policy and thought leadership summit, brought to London for Black History Month 2026. It connects policymakers, investors, culinary innovators, diaspora entrepreneurs, and cultural institutions across Africa and the United Kingdom to advance a shared agenda for Africa&apos;s food future.</p>
            <p className="mt-5 text-[15px] font-semibold text-[color:var(--color-heading)]">The Summit is free to attend. Registration is required.</p>
          </div>
          <div className="card p-8">
            <ul className="divide-y divide-[color:var(--color-divider)]">
              {THEMES.map(([i, t, d]) => (
                <li key={t} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  <Icon name={i} size={20} className="mt-1 shrink-0" />
                  <div><h3 className="text-[14px] font-semibold">{t}</h3><p className="text-[13px]">{d}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Why London */}
      <section className="relative py-24" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url(/img/london.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <div className="mx-auto max-w-[760px] rounded-xl border border-white/15 bg-black/40 p-8 text-center md:p-10">
            <h2 className="text-[length:var(--text-h2)] text-white">Why London? <span className="text-[color:var(--color-action-on-dark)]">Why Now?</span></h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] text-white/85">Africa&apos;s food ecosystem is at an inflection point, and its story is still told by other people.</p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              {[["1.5m", "people of African heritage in London"], ["5", "Summit themes, policy to culture"], ["Oct 2026", "Black History Month, United Kingdom"]].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-[family-name:var(--font-display)] text-[32px] font-semibold leading-none text-[color:var(--color-action-on-dark)]">{n}</dt>
                  <dd className="mt-2 text-[13px] leading-[1.5] text-white/80">{l}</dd>
                </div>
              ))}
            </dl>
            <p className="mx-auto mt-8 max-w-xl text-[15px] text-white/85">African food is entering the mainstream in restaurants, in retail, in policy and in cultural dialogue. London is where Africa&apos;s food leadership meets global reach, and AFSE UK 2026 is where that leadership convenes.</p>
          </div>
        </div>
      </section>
      {/* Programme */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-[length:var(--text-h2)]">Inside AFSE UK 2026</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PROGRAMME.map(([i, t, d], n) => (
              <div key={t} className="card flex flex-col px-5 py-8 transition-shadow hover:shadow-[var(--shadow-card-hover)]">
                <p className="font-[family-name:var(--font-display)] text-[13px] font-semibold text-[color:var(--color-action)]">{String(n + 1).padStart(2, "0")}</p>
                <Icon name={i} size={28} className="mx-auto mt-3" />
                <h3 className="mt-4 text-[15px] font-semibold">{t}</h3>
                <p className="mt-2 text-[13px]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Ecosystem */}
      <section className="section alt-section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-[length:var(--text-h2)]">Part of Africa&apos;s Largest Food Ecosystem</h2>
            <p className="mt-3 text-[13px] uppercase tracking-[0.12em] text-[color:var(--color-action)]">An African Food Network &times; Uziiza production</p>
            <p className="prose-justify mt-5">AFSE UK 2026 is produced by the African Food Network, the continental platform dedicated to advancing African culinary heritage, food enterprise, and cultural identity across the world. AFN is the creator of the African Food & Drinks Festival, two-time winner of Africa&apos;s Best Culinary Festival at the World Culinary Awards (2024 and 2025), and the United by Food documentary initiative.</p>
            <ul className="list-red mt-5 space-y-1">
              <li>Preserving culinary heritage across generations</li>
              <li>Strengthening youth and diaspora participation in food ecosystems</li>
              <li>Promoting African cuisine as culture, diplomacy, and commerce</li>
              <li>Supporting institutional and cross-border collaboration</li>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end lg:pr-4">
            <div className="photo-frame"><Image src="/img/African-Food.jpg" alt="Overhead view of a shared African food spread" width={520} height={520} className="aspect-square w-full max-w-[480px] object-cover" /></div>
          </div>
        </div>
      </section>
      {/* Pulled quote: the best line on the site, given room */}
      <section className="dark-section py-20">
        <div className="container text-center">
          <blockquote className="mx-auto max-w-3xl font-[family-name:var(--font-quote)] text-[26px] italic leading-[1.35] text-white md:text-[36px]">
            &ldquo;This is not a celebration. It is a coordination.&rdquo;
          </blockquote>
          <p className="mt-5 text-[13px] uppercase tracking-[0.14em] text-white/60">African Food Summit &amp; Expo</p>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="dark-section relative py-28 text-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.84), rgba(0,0,0,0.84)), url(/img/Summit-Hero-1-scaled.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <Eyebrow dark>Now accepting partnership applications</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl text-[length:var(--text-h2)] leading-[1.2] text-white">22 October 2026. Samsung KX. Black History Month.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] text-white/85">AFSE UK 2026 is now open for partnership engagement. We are working with governments, embassies, development institutions, and private sector brands to build Africa&apos;s most significant international food summit.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Btn href="mailto:summit@afrifoodnetwork.com?subject=I%20would%20like%20to%20Request%20for%20the%20Partnership%20Deck">Request The Partnership Deck <Arrow /></Btn>
            <Btn href="/partner-with-us" variant="outline-dark">Become A Partner</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
