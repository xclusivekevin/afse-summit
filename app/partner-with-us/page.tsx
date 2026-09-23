import Image from "next/image";
import type { Metadata } from "next";
import { Eyebrow, Btn, Arrow, Icon, PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "Partner With Us", description: "Africa's food leadership summit comes to London. Help build it." };

const WHY = [["target", "Reach", "Direct engagement with high-intent stakeholders across African and UK policy, enterprise, and cultural leadership"], ["landmark", "Credibility", "Associate your institution or brand with Africa's most credible international food summit, during Black History Month in London"], ["check", "Outcomes", "Partnerships built around clear objectives, not logo placement, with measurable engagement before, during, and after the event"]];
const PATHS = [
  ["landmark", "Government & Public Institutions", "Support national food, trade, or cultural priorities through high-visibility convening in one of Africa's most important diaspora markets.", ["Host-government or endorsing-government partnership", "Institutional delegation and participation", "Policy dialogue and stakeholder convening"]],
  ["globe", "Development & Multilateral Partners", "Advance food security, youth empowerment, SME development, and Africa-UK trade and innovation outcomes through programme co-creation.", ["Thematic programme sponsorship aligned to development objectives", "Research, convening, and stakeholder engagement", "Capacity-building and ecosystem development support"]],
  ["briefcase", "Corporate & Private Sector", "Position your brand in front of African diaspora decision-makers, buyers, and cultural influencers in the UK, with substance behind the association.", ["Strategic partnership, outcomes over logo placement", "Session and thematic sponsorship with thought leadership opportunity", "Brand showcase and product activation (curated, contextually relevant)"]],
] as const;
const OUTCOMES = ["Policy-facing dialogue and institutional convening in London and across Africa", "Enterprise and investment visibility for African food brands in the UK market", "Cultural diplomacy and embassy engagement during Black History Month", "Youth and SME support across food entrepreneurship, innovation, and trade", "Media and public reach through the United by Food platform and AFN's networks", "Long-term institutional relationships between African and UK stakeholders"];
const DECK = "mailto:summit@afrifoodnetwork.com?subject=I%20would%20like%20to%20Request%20the%20Partnership%20Deck";

export default function Partner() {
  return (
    <>
      <PageHero eyebrow="Partnership" title="Partner With AFSE UK 2026" sub="Africa's food leadership summit comes to London. Help build it.">
        <Btn href={DECK}>Request The Partnership Deck <Arrow /></Btn><Btn href="mailto:summit@afrifoodnetwork.com" variant="outline-dark">summit@afrifoodnetwork.com</Btn>
      </PageHero>
      <section className="section">
        <div className="container">
          <h2 className="text-center text-[length:var(--text-h2)]">Why Partner With AFSE UK 2026?</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{WHY.map(([i, t, d]) => <div key={t} className="card p-7"><Icon name={i} size={26} /><h3 className="mt-3 text-[16px] font-semibold">{t}:</h3><p className="mt-2 text-[13px]">{d}</p></div>)}</div>
        </div>
      </section>
      <section className="section alt-section">
        <div className="container">
          <div className="text-center"><Eyebrow>Pathways</Eyebrow><h2 className="mt-4 text-[length:var(--text-h2)]">How We Partner</h2></div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">{PATHS.map(([i, t, d, items]) => <div key={t} className="card p-7"><Icon name={i} size={26} /><h3 className="mt-3 text-[16px] font-semibold">{t}</h3><p className="mt-2 text-[13px]">{d}</p><ul className="list-red mt-4 space-y-1">{items.map((x) => <li key={x}>{x}</li>)}</ul></div>)}</div>
        </div>
      </section>
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-[length:var(--text-h2)]">Host City Partnership Model</h2>
            <p className="prose-justify mt-5">For select international geographies, AFSE operates through a host-city partnership model. Local partners co-produce the Summit under a licensed AFN framework, delivering local execution while AFN provides governance, programme oversight, and brand integrity.</p>
            <ul className="list-red mt-4 space-y-1"><li>Licensed brand and programme framework</li><li>Programme design and speaker curation from AFN</li><li>Local execution and logistics led by host partners</li><li>Quality and delivery standards maintained by AFN</li></ul>
            <div className="mt-6"><Btn href="mailto:summit@afrifoodnetwork.com">Discuss A Host City Partnership <Arrow /></Btn></div>
          </div>
          <div className="flex justify-center lg:justify-end lg:pr-4"><div className="photo-frame"><Image src="/img/London.png" alt="London skyline" width={520} height={390} className="w-full max-w-[520px] object-cover" /></div></div>
        </div>
      </section>
      <section className="section alt-section">
        <div className="container max-w-3xl"><h2 className="text-[length:var(--text-h2)]">Outcomes We Can Build Together</h2><ul className="list-red mt-6 space-y-2">{OUTCOMES.map((o) => <li key={o}>{o}</li>)}</ul></div>
      </section>
      <section className="dark-section py-24 text-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.84), rgba(0,0,0,0.84)), url(/img/Summit-Hero-1-scaled.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container"><h2 className="text-[length:var(--text-h2)] text-white">Start the Conversation</h2><p className="mx-auto mt-4 max-w-2xl text-[14px] text-white/85">To request the partnership deck or discuss a collaboration, contact the Summit team.</p><div className="mt-8 flex flex-wrap justify-center gap-4"><Btn href={DECK}>Request Partnership Deck <Arrow /></Btn><Btn href="mailto:summit@afrifoodnetwork.com" variant="outline-dark">summit@afrifoodnetwork.com</Btn></div></div>
      </section>
    </>
  );
}
