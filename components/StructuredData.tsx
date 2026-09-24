import { AFSE } from "@/lib/event";
const SITE = "https://summit.afrifoodnetwork.com";
/** Organization + WebSite + Event. The Event block is only safe to publish because the
 *  date, time and venue were confirmed on 24 Sep 2026; never guess these. */
export default function StructuredData() {
  const data = [
    { "@context": "https://schema.org", "@type": "Organization", name: "African Food Summit & Expo", alternateName: "AFSE", url: SITE,
      logo: `${SITE}/img/AFSE-Logo.png`, email: "summit@afrifoodnetwork.com",
      parentOrganization: { "@type": "Organization", name: "African Food Network", url: "https://afrifoodnetwork.com" },
      sameAs: ["http://instagram.com/afrifoodsummit", "http://x.com/afrifoodsummit", "http://linkedin.com/afrifoodsummit"] },
    { "@context": "https://schema.org", "@type": "WebSite", name: AFSE.name, url: SITE },
    { "@context": "https://schema.org", "@type": "Event", name: AFSE.name,
      description: `${AFSE.theme} The African Food Summit & Expo makes its UK debut during Black History Month, bringing together food, culture, business, sustainability, development and innovation.`,
      startDate: AFSE.startISO, endDate: AFSE.endISO,
      eventStatus: "https://schema.org/EventScheduled", eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      image: [`${SITE}/opengraph-image.png`], url: SITE,
      location: { "@type": "Place", name: AFSE.venueFull,
        address: { "@type": "PostalAddress", streetAddress: AFSE.street, addressLocality: AFSE.locality, postalCode: AFSE.postcode, addressCountry: "GB" },
        geo: { "@type": "GeoCoordinates", latitude: AFSE.lat, longitude: AFSE.lng } },
      offers: { "@type": "Offer", price: "0", priceCurrency: "GBP", availability: "https://schema.org/InStock", url: AFSE.tickets, validFrom: "2026-09-01T00:00:00+01:00" },
      organizer: { "@type": "Organization", name: "African Food Network", url: "https://afrifoodnetwork.com" },
      performer: { "@type": "Organization", name: "Uziiza" } },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
