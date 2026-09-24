import Image from "next/image";
import type { Metadata } from "next";
import { Btn, Arrow, PageHero, Eyebrow } from "@/components/ui";
import { AFSE } from "@/lib/event";
export const metadata: Metadata = { title: "Speakers", description: "AFSE UK 2026 brings together respected voices across policy, agriculture, culinary arts, enterprise, and cultural leadership." };

/** The 2026 line-up is not confirmed. Rather than an empty page in primary navigation,
 *  this shows the confirmed 2025 speakers as precedent. Replace when 2026 names land. */
const PAST = [
  ["Aisha-Adamu-Augie.jpg", "Aisha Adamu Augie", "Director-General, Centre for Black and African Arts & Civilisation (CBAAC)"],
  ["Jenifer-Ibrahim.jpg", "Jenifer Ibrahim", "OAP, Media Personality, Entrepreneur & Public Speaker"],
  ["Clara-Chinwe-Okoro.webp", "Clara Chinwe Okoro", "Entrepreneur, TV host and International Resource Speaker"],
  ["Barr-Chisom-Jane-Ikechukwu.png", "Barr Chisom Jane Ikechukwu", "Deputy Speaker, Nigerian Youth Parliament"],
  ["Mr-Obi-Asika.jpg", "Mr Obi Asika", "Director-General, National Council for Arts and Culture"],
];

export default function Speakers() {
  return (
    <>
      <PageHero title="Speakers & Moderators" sub="AFSE UK 2026 brings together respected voices across policy, agriculture, culinary arts, enterprise, and cultural leadership, from Africa, the United Kingdom, and the global diaspora." />

      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[length:var(--text-h2)]">The UK 2026 Line-up</h2>
            <p className="mt-5">Speakers for {AFSE.dateLong} at {AFSE.venue} are being confirmed now. The programme centres on one question, put to a panel drawn from food, culture, research and innovation:</p>
            <p className="mt-6 rounded-xl bg-[color:var(--color-bg-alt)] p-6 text-left font-[family-name:var(--font-quote)] text-[17px] italic text-[color:var(--color-heading)]">{AFSE.panel}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Btn href="mailto:summit@afrifoodnetwork.com?subject=AFSE%20UK%202026%20speaker%20proposal">Propose a Speaker <Arrow /></Btn>
              <Btn href={AFSE.tickets} variant="outline-light">Get Your Free Ticket</Btn>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="text-center"><Eyebrow>Previously at AFSE</Eyebrow><h2 className="mt-4 text-[length:var(--text-h2)]">The 2025 Stage, Abuja</h2><p className="mx-auto mt-3 max-w-2xl">The inaugural Summit convened these voices at the Musa Yar&apos;Adua Center under the theme &ldquo;United by Food&rdquo;.</p></div>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {PAST.map(([img, n, r]) => (
              <figure key={n} className="w-full max-w-[260px]">
                <Image src={`/img/${img}`} alt={n} width={260} height={325} className="aspect-[4/5] w-full rounded-xl object-cover object-top" />
                <figcaption className="mt-3"><p className="font-[family-name:var(--font-display)] text-[16px] font-semibold text-[color:var(--color-heading)]">{n}</p><p className="mt-1 text-[13px]">{r}</p></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
