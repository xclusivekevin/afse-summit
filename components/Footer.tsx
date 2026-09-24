import Link from "next/link";
import Image from "next/image";
import Form from "@/components/Form";

const NAV = [["Home", "/"], ["About", "/about"], ["Summit 2026", "/summit-2026"], ["Speakers", "/speakers"], ["United By Food", "/united-by-food"], ["Contact", "/contact"]];
const Dot = () => <span aria-hidden className="mr-2 inline-block h-3 w-3 rounded-full border-2 border-[color:var(--color-action)] align-middle" />;

export default function Footer() {
  return (
    <footer className="dark-section">
      <div className="container grid gap-10 py-16 md:grid-cols-3">
        <div>
          <h2 className="mb-4 text-[16px] font-semibold text-white">Navigation</h2>
          <ul className="space-y-2 text-[13px]">{NAV.map(([l, h]) => <li key={h}><Dot /><Link href={h} className="text-white/80 hover:text-[color:var(--afse-red-on-dark)]">{l}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="mb-4 text-[16px] font-semibold text-white">Connect</h2>
          <ul className="space-y-2 text-[13px]">
            <li><Dot /><a href="mailto:summit@afrifoodnetwork.com" className="text-white/80 hover:text-[color:var(--afse-red-on-dark)]">summit@afrifoodnetwork.com</a></li>
            <li><Dot /><a href="http://instagram.com/afrifoodsummit" target="_blank" rel="noreferrer" className="text-white/80 hover:text-[color:var(--afse-red-on-dark)]">afrifoodsummit</a></li>
            <li><Dot /><a href="http://x.com/afrifoodsummit" target="_blank" rel="noreferrer" className="text-white/80 hover:text-[color:var(--afse-red-on-dark)]">afrifoodsummit</a></li>
            <li><Dot /><a href="http://linkedin.com/afrifoodsummit" target="_blank" rel="noreferrer" className="text-white/80 hover:text-[color:var(--afse-red-on-dark)]">African Food Network</a></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-[16px] font-semibold text-white">Stay Informed</h2>
          <Form name="Stay Informed (footer)" submit="Stay Informed" thanks="You are on the list." className="space-y-2" full>
            <input className="input" name="first_name" placeholder="First name" aria-label="First name" />
            <input className="input" name="email" type="email" placeholder="Email address" aria-label="Email address" required />
            </Form>
          <p className="text-[11px] text-white/60">No spam. Updates on speakers, programme, and partnership opportunities.</p>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container flex flex-col items-center gap-4 py-6 text-[12px] md:flex-row md:justify-between">
          <Image src="/img/AFSE-Logo.png" alt="AFSE" width={91} height={48} style={{ height: 48, width: "auto" }} />
          <p className="text-white/70">© 2026 African Food Network. All rights reserved.</p>
          <a href="https://afrifoodnetwork.com/" className="text-white/80 hover:text-[color:var(--afse-red-on-dark)]">afrifoodnetwork.com</a>
        </div>
      </div>
    </footer>
  );
}
