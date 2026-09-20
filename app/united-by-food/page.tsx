import Image from "next/image";
import type { Metadata } from "next";
import { Eyebrow, Btn, Arrow, Icon, PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "United by Food", description: "A Documentary Series by African Food Network. Pilot episode world premiere at AFSE UK 2026, London, October 2026." };

const WHY = [["target", "Identity", "A living archive of heritage, tradition, and belonging, built with communities, not just about them."], ["globe", "Soft Power", "Food as a cultural diplomacy tool that builds bridges across borders, generations, and diaspora communities."], ["users", "Unity", "A shared language that connects Africans across regions, nations, and the distances of migration."]];
const PARTNER = [["landmark", "Government & Cultural Institutions", ["Cultural diplomacy and heritage preservation support", "Institutional endorsement and delegation participation", "Screening partnerships in the UK and across Africa"]], ["globe", "Embassies & Multilateral Bodies", ["Cross-cultural representation and pan-African solidarity", "Regional and diaspora screening collaborations", "Support for continental and international engagement"]], ["handshake", "Grant & Development Partners", ["Cultural documentation and heritage preservation funding", "Creative economy and storytelling programme support", "Research, learning, and global dissemination"]]] as const;

export default function UBF() {
  return (
    <>
      <PageHero eyebrow="Pilot Episode · World Premiere at AFSE UK 2026 · London, October 2026" title="United by Food" sub={<><p className="text-[18px] text-white">A Documentary Series by African Food Network</p><p className="mt-4">Across Africa and its diaspora, food has never been just nourishment.<br />It is memory. Identity. Belonging.<br />United by Food tells that story, to Africa and to the world.</p></>}>
        <Btn href="mailto:summit@afrifoodnetwork.com">Partnership & Screening Enquiries <Arrow /></Btn>
      </PageHero>
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-[length:var(--text-h2)]">About The Series</h2>
            <p className="prose-justify mt-5">United by Food is a long-form documentary initiative by African Food Network, created to document, preserve, and elevate Africa&apos;s culinary story across the continent and its global diaspora.</p>
            <p className="mt-4">Through the voices of chefs, cultural leaders, policymakers, entrepreneurs, historians, and diaspora advocates, the series explores:</p>
            <ul className="list-red mt-3 space-y-1"><li>The shared heritage that connects Africa&apos;s extraordinary diversity of cuisines</li><li>Food as cultural identity, intergenerational memory, and community</li><li>Gastronomy as a tool for cultural diplomacy and continental unity</li><li>The global rise of African cuisine, and what must be protected in the process</li><li>How storytelling reshapes global perception and builds national pride</li></ul>
            <p className="quote mt-5">This is not a one-off film. It is a scalable storytelling platform.</p>
          </div>
          <div className="flex justify-center lg:justify-end lg:pr-4"><div className="photo-frame"><Image src="/img/doc.jpeg" alt="United by Food documentary still" width={520} height={390} className="w-full max-w-[520px] object-cover" /></div></div>
        </div>
      </section>
      <section className="section alt-section">
        <div className="container text-center">
          <h2 className="text-[length:var(--text-h2)]">Why This Initiative Matters</h2>
          <p className="mx-auto mt-4 max-w-2xl">Africa&apos;s culinary heritage is one of the continent&apos;s greatest cultural assets, and one of its most underrepresented in global media.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{WHY.map(([i, t, d]) => <div key={t} className="card p-7"><Icon name={i} size={26} className="mx-auto" /><h3 className="mt-3 text-[16px] font-semibold">{t}</h3><p className="mt-2 text-[13px]">{d}</p></div>)}</div>
          <p className="quote mt-10">Food is not only culture. It is connection, and it can be coordinated.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Pilot Episode</Eyebrow><h2 className="mt-4 text-[length:var(--text-h2)]">A Continental Table</h2>
            <p className="mt-4 font-semibold text-black">What happens when Africa sees itself through food?</p>
            <ul className="list-red mt-3 space-y-1"><li>Shared culinary threads across regions and diaspora communities worldwide</li><li>How gastronomy carries memory, migration, and meaning across generations</li><li>The role of chefs, institutions, and cultural platforms in shaping food identity</li><li>Why African cuisine is rising globally, and the responsibilities that come with that</li></ul>
            <p className="mt-4">The pilot episode was developed with 15+ contributors including chefs, cultural leaders, policymakers, and diaspora voices, across multiple African countries and diaspora communities.</p>
          </div>
          <div>
            <Eyebrow>Premiere</Eyebrow><h2 className="mt-4 text-[length:var(--text-h2)]">World Premiere; October 2026, London</h2>
            <p className="mt-4">The United by Food pilot will have its world premiere at AFSE UK 2026 in London, a curated institutional screening timed to coincide with Black History Month. Following the premiere, the film will be released publicly on YouTube for global accessibility.</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="card p-6"><h3 className="text-[15px] font-semibold">Institutional Premiere</h3><ul className="list-red mt-3 space-y-1"><li>Curated screening at AFSE UK 2026, London</li><li>Invited government, embassy, and institutional stakeholders</li><li>Moderated post-screening conversation</li></ul></div>
              <div className="card p-6"><h3 className="text-[15px] font-semibold">Public Release</h3><ul className="list-red mt-3 space-y-1"><li>YouTube premiere timed to the London unveiling</li><li>Media amplification and curated distribution</li><li>Global reach across Africa and diaspora communities</li></ul></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section alt-section">
        <div className="container">
          <div className="text-center"><Eyebrow>Collaborate</Eyebrow><h2 className="mt-4 text-[length:var(--text-h2)]">Partner With United by Food</h2></div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">{PARTNER.map(([i, t, items]) => <div key={t} className="card p-7"><Icon name={i} size={26} /><h3 className="mt-3 text-[16px] font-semibold">{t}</h3><ul className="list-red mt-4 space-y-1">{items.map((x) => <li key={x}>{x}</li>)}</ul></div>)}</div>
          <div className="mt-10 text-center"><Btn href="mailto:summit@afrifoodnetwork.com">Screening & Partnership Enquiries <Arrow /></Btn></div>
        </div>
      </section>
    </>
  );
}
