import Image from "next/image";
import type { Metadata } from "next";
import { Eyebrow, Btn, Arrow, Icon, PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "About", description: "The African Food Summit & Expo (AFSE) is the policy-facing, thought leadership platform within the African Food Network ecosystem." };

const FOCUS = ["Food systems and sustainability", "Culinary heritage and cultural identity", "Entrepreneurship and value-chain development", "Youth and diaspora participation", "UK-Africa institutional collaboration", "Gastronomic tourism and soft power"];

export default function About() {
  return (
    <>
      <PageHero title={<>About the African Food<br />Summit & Expo</>} sub={<>The policy and thought leadership platform for Africa&apos;s food ecosystem;<br />Now in London.</>} />
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>More Than A Conference</Eyebrow>
            <h2 className="mt-4 text-[length:var(--text-h2)]">What Is AFSE?</h2>
            <p className="prose-justify mt-5">The African Food Summit & Expo (AFSE) is the policy-facing, thought leadership platform within the African Food Network ecosystem. It is designed to move food conversations beyond celebration into structured coordination. The Summit brings together governments, development institutions, agricultural leaders, culinary professionals, food entrepreneurs, media voices, and cultural organisations, from Africa and internationally, to advance a shared agenda for Africa&apos;s food future.</p>
            <p className="prose-justify mt-4">AFSE UK 2026, hosted in London during Black History Month, is the first international edition of the Summit. It marks a deliberate expansion into diaspora markets and global institutional networks, connecting African food leadership with one of the world&apos;s most influential cities.</p>
          </div>
          <div className="card p-8">
            <ul className="grid gap-4 sm:grid-cols-2">{FOCUS.map((f) => <li key={f} className="flex items-start gap-3"><Icon name="check" size={20} className="mt-0.5 shrink-0" /><h3 className="text-[14px] font-semibold">{f}</h3></li>)}</ul>
          </div>
        </div>
      </section>
      <section className="section alt-section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-[length:var(--text-h2)]">The Summit Within the Movement</h2>
            <p className="prose-justify mt-5">AFSE is an initiative of the African Food Network, the continental media, events, and ecosystem platform dedicated to documenting, promoting, and globalising African food culture. Within the AFN ecosystem, the Summit is the institutional layer. Where the African Food & Drinks Festival creates cultural energy, AFSE creates structured dialogue. Where United by Food tells the story, AFSE coordinates the response.</p>
            <p className="prose-justify mt-4">In London, that coordination gains new strategic dimension. The UK is home to over 1.5 million people of African heritage, a mature African food and hospitality sector, and institutional infrastructure well-positioned to accelerate African food enterprise globally.</p>
            <p className="mt-4 font-semibold text-black">AFSE UK 2026 provides a space for:</p>
            <ul className="list-red mt-3 space-y-1">
              <li>Policy engagement between African and UK governments and institutions</li>
              <li>Enterprise visibility for African food brands in the UK and international market</li>
              <li>Cross-sector collaboration spanning agriculture, culture, and investment</li>
              <li>Strategic conversations that produce outcomes, not only declarations</li>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end lg:pr-4"><div className="photo-frame"><Image src="/img/Summit-Image.jpg" alt="Delegates at the African Food Summit" width={520} height={390} className="w-full max-w-[520px] object-cover" /></div></div>
        </div>
      </section>
      <section className="section">
        <div className="container max-w-3xl">
          <h2 className="text-[length:var(--text-h2)]">Our Vision</h2>
          <p className="quote mt-4">African food is not only heritage. It is strategy.</p>
          <p className="mt-4">Our vision is to build a connected, sustainable African food ecosystem that is globally respected, institutionally supported, and community-rooted.</p>
          <p className="mt-4 font-semibold text-black">We work toward:</p>
          <ul className="list-red mt-3 space-y-1">
            <li>Preserving culinary traditions and intergenerational food knowledge</li>
            <li>Strengthening youth, SME, and diaspora participation across the food value chain</li>
            <li>Building institutional alignment between African and international food stakeholders</li>
            <li>Elevating African cuisine globally as a force of culture, commerce, and soft power</li>
            <li>Creating durable frameworks for cross-border food system collaboration</li>
          </ul>
          <p className="mt-4">Through AFSE, that vision becomes action, in structured dialogue, in measurable partnerships, and in long-term institutional relationships.</p>
        </div>
      </section>
      <section className="dark-section py-24 text-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.84), rgba(0,0,0,0.84)), url(/img/Summit-Hero-1-scaled.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <Eyebrow dark>Looking Ahead</Eyebrow>
          <h2 className="mt-4 text-[length:var(--text-h2)] text-white">The First of Many</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] text-white/85">AFSE UK 2026 is the Summit&apos;s first international edition, the first step in a deliberate programme of global expansion, taking Africa&apos;s food leadership platform to diaspora cities and international institutions where that leadership needs to be heard.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Btn href="/partner-with-us">Partner With AFSE UK 2026 <Arrow /></Btn>
            <Btn href="mailto:summit@afrifoodnetwork.com?subject=I%20would%20like%20to%20Request%20for%20the%20Partnership%20Deck" variant="outline-dark">Request The Partnership Deck</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
