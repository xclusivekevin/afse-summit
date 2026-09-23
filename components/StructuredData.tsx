/** Organization + WebSite JSON-LD. Event schema waits for the confirmed October 2026 date. */
const SITE = "https://summit.afrifoodnetwork.com";
export default function StructuredData() {
  const data = [
    { "@context": "https://schema.org", "@type": "Organization", name: "African Food Summit & Expo", alternateName: "AFSE", url: SITE,
      logo: `${SITE}/img/AFSE-Logo.png`, email: "summit@afrifoodnetwork.com",
      parentOrganization: { "@type": "Organization", name: "African Food Network", url: "https://afrifoodnetwork.com" },
      address: { "@type": "PostalAddress", streetAddress: "76 Ralph Shodeinde Street", addressLocality: "Abuja", addressCountry: "NG" },
      sameAs: ["http://instagram.com/afrifoodsummit", "http://x.com/afrifoodsummit", "http://linkedin.com/afrifoodsummit"] },
    { "@context": "https://schema.org", "@type": "WebSite", name: "African Food Summit & Expo UK 2026", url: SITE },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
