import Image from "next/image";
import type { Metadata } from "next";
import { Eyebrow, Btn, Arrow, Icon } from "@/components/ui";
export const metadata: Metadata = { title: "AFSE 2025", description: "African Food Summit & Expo 2025. United by Food. 14th November 2025, Musa Yar'Adua Center, Abuja, Nigeria." };

const TICKET = "https://app.ibloov.com/event/afse";
const AUDIENCE = [["Policymakers & Agencies", "Shape the future of trade, agriculture, and tourism through culture and food policy. Connect with Ministers and regulatory bodies."], ["Food Entrepreneurs & Startups", "Secure investment, find new suppliers, and expand your market reach across the continent. Your next partner is here."], ["Chefs & Culinary Experts", "Showcase your artistry, learn global trends, and connect with media, bookers, and brand investors. Elevate your profile."], ["Tech & Investment Innovators", "Explore opportunities to bring AI, blockchain, and sustainable practices to the agro-food value chain. Where capital meets innovation."]];
const SPEAKERS = [["Aisha-Adamu-Augie.jpg", "Aisha Adamu Augie", "Director-General at the Centre for Black and African Arts & Civilisation (CBAAC)"], ["Jenifer-Ibrahim.jpg", "Jenifer Ibrahim", "OAP, Media Personality, Entrepreneur & Public Speaker"], ["Clara-Chinwe-Okoro.webp", "Clara Chinwe Okoro", "Nigerian Entrepreneur, TV host, and International Resource Speaker"], ["Barr-Chisom-Jane-Ikechukwu.png", "Barr Chisom Jane Ikechukwu", "Deputy Speaker Nigerian Youth Parliament"], ["Mr-Obi-Asika.jpg", "Mr Obi Asika", "Director-General, National Council for Arts and Culture"]];
const TIERS = [["Essential Access", "(Entry-Level)", "₦10,000", "Access: Day 1 Summit (general seating)", ["Complimentary lunch (standard, not VIP menu).", "Writing materials (notebooks, pens).", "Access to all general panel sessions."]], ["Gold Access", "", "₦25,000", "Day 1 Summit VIP seating (front row section)", ["Complimentary VIP lunch.", "Priority check-in.", "Access to VIP networking coffee breaks with select speakers."]], ["Platinum Access", "(VIP)", "₦50,000", "All Gold Access benefits.", ["Exclusive lunch/dinner with keynote speakers and top sponsors.", "Access to VIP-only networking sessions with investors.", "Priority branding and recognition in networking areas.", "Complimentary VIP pass for Day 3 Festival."]], ["All Inclusive Pass", "(Full Festival Experience)", "₦150,000", "Platinum Access to Day 1 Summit (general seating + lunch + writing materials).", ["Full Day 2 African Food Tour ticket.", "Priority check-in.", "VIP ticket to Day 3 Festival, with a complimentary meal at the festival."]]] as const;
/* was Georgia, which is not in the AFSE brief (Poppins / Montserrat / Roboto Slab) */
const serif = { fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "0.01em" } as const;

export default function Afse2025() {
  return (
    <>
      <section className="dark-section relative pt-32 pb-16 text-center" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url(/img/afse2025-hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <Eyebrow dark>The Premier Gathering for Africa&apos;s Food, Culture, and Business Leaders</Eyebrow>
          <Image src="/img/AFSE-Logo.png" alt="AFSE African Food Summit & Expo" width={400} height={212} className="mx-auto mt-6 w-[280px] md:w-[400px]" priority />
          <h1 className="mt-2 text-[32px] text-white md:text-[40px]" style={serif}>UNITED BY FOOD.</h1>
          <div className="mx-auto mt-6 inline-grid grid-cols-2 border border-white/40 text-white">
            <div className="border-r border-white/40 px-8 py-3"><p className="text-[18px] font-semibold">14TH</p><p className="text-[12px] text-white/70">Nov, 2025</p></div>
            <div className="px-8 py-3"><p className="text-[16px] font-semibold uppercase">Musa Yar&apos;Adua Center</p><p className="text-[12px] text-white/70">Abuja, Nigeria</p></div>
          </div>
          <div className="mt-8"><Btn href={TICKET}>Get A Ticket <Arrow /></Btn></div>
        </div>
        <div className="absolute inset-x-0 bottom-0 overflow-hidden whitespace-nowrap bg-black/70 py-3 text-[13px] text-white">
          <div className="inline-flex gap-10 px-6">{Array.from({ length: 4 }).map((_, i) => <span key={i} className="inline-flex items-center gap-6"><span className="inline-flex items-center gap-2"><Icon name="pin" size={16} />Musa Yar&apos;Adua Center, Abuja, FCT</span><span className="inline-flex items-center gap-2"><Icon name="calendar" size={16} />14th November, 2025</span></span>)}</div>
        </div>
      </section>
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Image src="/img/About.png" alt="AFSE 2025 stage" width={496} height={744} className="w-full max-w-[460px] justify-self-center object-cover lg:justify-self-start" />
          <div>
            <h2 className="text-[36px] uppercase leading-[1.1]" style={serif}>The Future of African Food Starts Here.</h2>
            <p className="prose-justify mt-5">The African Food Summit & Expo 2025 is a high-impact, single-day event bringing together the most influential voices shaping the continent&apos;s food ecosystem.</p>
            <p className="prose-justify mt-4">Under the theme &quot;United by Food,&quot; we are celebrating African cuisine not just as a cultural identity, but as a powerful engine for trade, tourism, and technological innovation. From farm-to-table policy to the latest culinary trends, this is where ideas are shared, connections are forged, and the next generation of food business is inspired.</p>
            <p className="mt-4 font-semibold text-black">Join us to:</p>
            <ul className="list-red mt-2 space-y-1"><li><strong>Connect</strong> with policymakers, investors, and diaspora leaders.</li><li><strong>Discover</strong> emerging agro-tech and culinary excellence.</li><li><strong>Celebrate</strong> the industry&apos;s best at the African Food Influencers Awards (AFIA) Dinner.</li></ul>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded bg-[color:var(--afse-grey-100)] p-5"><h3 className="flex items-center gap-2 text-[15px]"><Icon name="pin" size={20} />WHERE</h3><p className="mt-2 text-[13px]">Musa Yar&apos;Adua center, Abuja, FCT, Nigeria</p></div>
              <div className="rounded bg-[color:var(--afse-grey-100)] p-5"><h3 className="flex items-center gap-2 text-[15px]"><Icon name="calendar" size={20} />WHEN</h3><p className="mt-2 text-[13px]">Friday,<br />14th November, 2025</p></div>
            </div>
            <div className="mt-6"><Btn href="#tickets">Get A Ticket <Arrow /></Btn></div>
          </div>
        </div>
        <div className="container mt-16 grid gap-5 md:grid-cols-3 lg:px-32">
          {[["#B60825", "50+", "Just scored our tickets for the event."], ["#3F8109", "10+", "Industry leading speakers confirmed."], ["#B68908", "10,000+", "Participants joining from all over the world."]].map(([c, n, t]) => (
            <div key={n} className="rounded-lg p-8 text-white" style={{ background: c }}><p className="text-[36px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>{n}</p><p className="mt-2 text-[13px] text-white/90">{t}</p></div>
          ))}
        </div>
      </section>
      <section className="grid lg:grid-cols-2">
        <div className="min-h-[360px] bg-cover bg-center" style={{ backgroundImage: "url(/img/audience.jpg)" }} role="img" aria-label="Summit audience" />
        <div className="dark-section p-10 lg:p-16">
          <h2 className="text-[32px] uppercase leading-[1.1] text-white" style={serif}>What Will You Take Away?</h2>
          <p className="mt-4 text-[14px] text-white/80">We&apos;ve designed this summit to deliver tangible value for every attendee.</p>
          <ul className="list-red mt-5 space-y-2 text-white/90"><li><strong className="text-white">Networking Power:</strong> Direct access to government agencies, venture capitalists, trade organizations, and successful agro-entrepreneurs.</li><li><strong className="text-white">Policy & Insight:</strong> Participate in high-level discussions on trade, standardization, and investment frameworks that are shaping the sector.</li><li><strong className="text-white">Brand Exposure:</strong> Showcase your product, service, or culinary skill to a dedicated audience of media, buyers, and industry influencers.</li><li><strong className="text-white">Inspiration & Recognition:</strong> Witness the convergence of culture and commerce, culminating in the prestigious African Food Influencers Awards (AFIA) dinner.</li></ul>
          <div className="mt-8"><Btn href="/partner-with-us" variant="outline-dark">Become A Sponsor <Arrow /></Btn></div>
        </div>
      </section>
      <section className="section">
        <div className="container text-center">
          <Eyebrow>The Audience Snapshot</Eyebrow>
          <h2 className="mt-4 text-[36px] uppercase" style={serif}>Who You Will Meet?</h2>
          <p className="mx-auto mt-3 max-w-xl">The Summit is meticulously curated to foster cross-sector collaboration. If you are part of the ecosystem, you need to be here.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">{AUDIENCE.map(([t, d]) => (
            <div key={t} className="rounded-lg p-8 text-left text-white" style={{ background: "linear-gradient(180deg, #000 40%, #B60825 140%)" }}><h3 className="text-[18px] uppercase text-white" style={serif}>{t}</h3><p className="mt-3 text-[13px] text-white/85"><strong className="text-white">Why Attend:</strong> {d}</p><div className="mt-6"><Btn href="#tickets" variant="outline-dark">Get A Ticket <Arrow /></Btn></div></div>
          ))}</div>
        </div>
      </section>
      <section className="dark-section py-20" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/img/sponsorship.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="text-[36px] uppercase leading-[1.1] text-white" style={serif}>Summit Schedule &<br />Information</h2>
          <div className="border border-white/50 text-center text-white"><div className="border-b border-white/50 px-8 py-3"><p className="font-semibold">14TH Nov, 2025</p><p className="text-[12px] text-white/70">9:00am - 5:00pm</p></div><div className="px-8 py-3"><p className="font-semibold uppercase">Musa Yar&apos;Adua Center</p><p className="text-[12px] text-white/70">Abuja, Nigeria</p></div></div>
        </div>
      </section>
      <section className="section">
        <div className="container space-y-6 lg:px-24">
          {[["1-2.jpg", "Feeding a continent", "Rethinking Food Security For a New Africa", ["The role of policy and financing in agricultural reform", "Empowering youth and women in farming and food processing", "Strengthening local production and intra-African food trade", "Technology, agritech, and smart farming tools for the future", "Reducing Africa's over-reliance on food imports"]], ["2-2.jpg", "The Power of Perception", "How Media & Marketing Can Drive the African Food Revolution", ["Breaking stereotypes: African food in global media", "The rise of content creators and culinary influencers", "Packaging and branding African food for international markets", "The role of food festivals, cookbooks, TV shows, and YouTube in shaping identity", "From Jollof Rice to Fufu to Suya: How virality and storytelling ignite demand"]]].map(([img, t, s, pts]) => (
            <div key={t as string} className="grid gap-8 rounded-lg border border-[color:var(--color-border)] p-6 md:grid-cols-2">
              <Image src={`/img/${img}`} alt="" width={500} height={400} className="h-full w-full rounded object-cover" />
              <div><h3 className="text-[22px] uppercase" style={serif}>{t as string}</h3><p className="mt-3 border-l-4 border-[color:var(--color-action)] pl-3 text-[14px] font-semibold uppercase text-black">{s as string}</p><p className="mt-4 text-[13px]">Key Talking Points:</p><ul className="list-red mt-2 space-y-1">{(pts as string[]).map((p) => <li key={p}>{p}</li>)}</ul><div className="mt-5"><Btn href="#tickets">Book Your Spot <Arrow /></Btn></div></div>
            </div>
          ))}
        </div>
      </section>
      <section className="dark-section section">
        <div className="container text-center">
          <h2 className="text-[36px] uppercase text-white" style={serif}>Industry Leading Speakers</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-5">{SPEAKERS.map(([img, n, r]) => (
            <div key={n} className="relative w-full max-w-[280px] overflow-hidden rounded-lg border border-white/20"><Image src={`/img/${img}`} alt={n} width={280} height={320} className="aspect-[7/8] w-full object-cover object-top" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 text-left"><h3 className="text-[18px] text-white">{n}</h3><p className="mt-1 text-[12px] text-white/80">{r}</p></div></div>
          ))}</div>
        </div>
      </section>
      <section id="tickets" className="section alt-section">
        <div className="container">
          <div className="text-center"><Eyebrow>Ticket Tiers</Eyebrow><h2 className="mt-4 text-[36px] uppercase" style={serif}>Get Your Ticket</h2></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{TIERS.map(([t, sub, price, lead, items]) => (
            <div key={t} className="card flex flex-col p-6"><h3 className="text-[18px]">{t}</h3>{sub && <p className="text-[12px]">{sub}</p>}<p className="mt-3 text-[28px] font-semibold text-[color:var(--color-action)]" style={{ fontFamily: "var(--font-display)" }}>{price}</p><p className="mt-3 text-[13px] font-semibold text-black">{lead}</p><ul className="list-red mt-3 flex-1 space-y-1">{items.map((x) => <li key={x}>{x}</li>)}</ul><div className="mt-5"><Btn href={TICKET} className="w-full justify-center">Get A Ticket <Arrow /></Btn></div></div>
          ))}</div>
        </div>
      </section>
      <section className="dark-section section text-center">
        <div className="container max-w-3xl">
          <h2 className="text-[30px] uppercase text-white" style={serif}>African Food Influencers Awards (AFIA)</h2>
          <p className="mt-2 text-[20px] text-white/90">The Night of Celebration</p>
          <p className="mt-4 text-[14px] text-white/80">Your summit pass seamlessly transitions into the industry&apos;s most glamorous event. The AFIA Dinner is the capstone of the day, dedicated to recognizing the pioneers, innovators, and storytellers elevating African food and beverage globally.</p>
          <ul className="list-red mx-auto mt-4 max-w-xl space-y-1 text-left text-white/90"><li><strong className="text-white">A Taste of Africa:</strong> Experience an exclusive, multi-course culinary journey prepared by master chefs.</li><li><strong className="text-white">See & Be Seen:</strong> Network with industry icons and media in an elevated, celebratory setting.</li></ul>
          <div className="mt-8"><Btn href={TICKET}>Get All Access Pass <Arrow /></Btn></div>
        </div>
      </section>
    </>
  );
}
