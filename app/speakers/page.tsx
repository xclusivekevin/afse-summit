import type { Metadata } from "next";
import { Btn, Arrow, PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "Speakers", description: "AFSE UK 2026 brings together respected voices across policy, agriculture, culinary arts, enterprise, and cultural leadership." };
export default function Speakers() {
  return (
    <>
      <PageHero title="Speakers & Moderators" sub="AFSE UK 2026 brings together respected voices across policy, agriculture, culinary arts, enterprise, and cultural leadership, from Africa, the United Kingdom, and the global diaspora." />
      <section className="section">
        <div className="container max-w-3xl text-center">
          <h2 className="text-[length:var(--text-h2)]">Speakers to Be Announced</h2>
          <p className="mt-5">AFSE UK 2026 is the international edition of Africa&apos;s leading food policy and thought leadership summit, brought to London for Black History Month 2026. It connects policymakers, investors, culinary innovators, diaspora entrepreneurs, and cultural institutions across Africa and the United Kingdom to advance a shared agenda for Africa&apos;s food future.</p>
          <div className="mt-8"><Btn href="mailto:summit@afrifoodnetwork.com">Speaker Enquiries <Arrow /></Btn></div>
        </div>
      </section>
    </>
  );
}
