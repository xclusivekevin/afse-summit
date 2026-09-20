import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "Press", description: "Press enquiries, media accreditation, and interview requests for the African Food Summit & Expo UK 2026." };
export default function Press() {
  return (
    <>
      <PageHero title="Press & Updates" sub="For press enquiries, media accreditation, and interview requests related to the African Food Summit & Expo UK 2026, please contact the Summit communications team." />
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-3">
          <div className="card p-8"><h2 className="text-[20px]">Media Enquiries</h2><p className="mt-3 text-[14px]">For all press and media matters, please contact us at <a className="text-[color:var(--color-action)]" href="mailto:summit@afrifoodnetwork.com">summit@afrifoodnetwork.com</a></p></div>
          <div className="card p-8"><h2 className="text-[20px]">About the Summit</h2><p className="mt-3 text-[14px]">The African Food Summit & Expo UK 2026 is the first international edition of AFSE, produced by the African Food Network. Held in London during Black History Month, it convenes policymakers, culinary professionals, food entrepreneurs, and cultural leaders to advance Africa&apos;s food future on the global stage. AFN is the two-time winner of Africa&apos;s Best Culinary Festival at the World Culinary Awards (2024 and 2025).</p></div>
          <div className="card p-8"><h2 className="text-[20px]">Social</h2><ul className="mt-3 space-y-2 text-[14px]"><li><a href="http://instagram.com/afrifoodsummit" className="hover:text-[color:var(--color-action)]">Instagram: afrifoodsummit</a></li><li><a href="http://x.com/afrifoodsummit" className="hover:text-[color:var(--color-action)]">X: afrifoodsummit</a></li><li><a href="http://linkedin.com/afrifoodsummit" className="hover:text-[color:var(--color-action)]">LinkedIn: African Food Network</a></li></ul></div>
        </div>
      </section>
    </>
  );
}
