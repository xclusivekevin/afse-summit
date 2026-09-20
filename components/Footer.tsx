import Link from "next/link";
import Image from "next/image";

const NAV = [["Home", "/"], ["About", "/about"], ["Summit 2026", "/summit-2026"], ["Speakers", "/speakers"], ["United By Food", "/united-by-food"], ["Contact", "/contact"]];
const Dot = () => <span aria-hidden className="mr-2 inline-block h-3 w-3 rounded-full border-2 border-[color:var(--color-action)] align-middle" />;

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container grid gap-10 py-16 md:grid-cols-3">
        <div>
          <h2 className="mb-4 text-[16px] font-semibold text-black">Navigation</h2>
          <ul className="space-y-2 text-[13px]">{NAV.map(([l, h]) => <li key={h}><Dot /><Link href={h} className="hover:text-[color:var(--color-action)]">{l}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="mb-4 text-[16px] font-semibold text-black">Connect</h2>
          <ul className="space-y-2 text-[13px]">
            <li><Dot /><a href="mailto:summit@afrifoodnetwork.com">summit@afrifoodnetwork.com</a></li>
            <li><Dot /><a href="http://instagram.com/afrifoodsummit" target="_blank" rel="noreferrer">afrifoodsummit</a></li>
            <li><Dot /><a href="http://x.com/afrifoodsummit" target="_blank" rel="noreferrer">afrifoodsummit</a></li>
            <li><Dot /><a href="http://linkedin.com/afrifoodsummit" target="_blank" rel="noreferrer">African Food Network</a></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-[16px] font-semibold text-black">Stay Informed</h2>
          <form action="mailto:summit@afrifoodnetwork.com" method="post" encType="text/plain" className="space-y-2">
            <input className="input" name="first_name" placeholder="First name" aria-label="First name" />
            <input className="input" name="email" type="email" placeholder="Email address" aria-label="Email address" required />
            <button type="submit" className="btn btn--primary w-full justify-center">Stay Informed</button>
            <p className="text-[11px]">No spam. Updates on speakers, programme, and partnership opportunities.</p>
          </form>
        </div>
      </div>
      <div className="border-t border-[color:var(--color-border)]">
        <div className="container flex flex-col items-center gap-4 py-6 text-[12px] md:flex-row md:justify-between">
          <Image src="/img/AFSE-Logo-02.png" alt="AFSE" width={91} height={48} style={{ height: 48, width: "auto" }} />
          <p>© 2026 African Food Network. All rights reserved.</p>
          <a href="https://afrifoodnetwork.com/" className="hover:text-[color:var(--color-action)]">afrifoodnetwork.com</a>
        </div>
      </div>
    </footer>
  );
}
