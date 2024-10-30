import Link from "next/link";
import { CopyrightNotice } from "./CopyrightNotice";

const FOOTER_SECTIONS = [
  {
    id: "about",
    title: "About Us",
    links: [
      { id: "story", href: "/about", label: "Our Story" },
      { id: "team", href: "/team", label: "Team" },
      { id: "careers", href: "/careers", label: "Careers" },
    ],
  },
  {
    id: "support",
    title: "Support",
    links: [
      { id: "faq", href: "/faq", label: "FAQ" },
      { id: "contact", href: "/contact", label: "Contact Us" },
      { id: "help", href: "/help", label: "Help Center" },
    ],
  },
  {
    id: "legal",
    title: "Legal",
    links: [
      { id: "terms", href: "/terms", label: "Terms of Service" },
      { id: "privacy", href: "/privacy", label: "Privacy Policy" },
      { id: "cookies", href: "/cookies", label: "Cookie Policy" },
    ],
  },
  {
    id: "social",
    title: "Connect",
    links: [
      { id: "facebook", href: "#", label: "Facebook" },
      { id: "twitter", href: "#", label: "Twitter" },
      { id: "instagram", href: "#", label: "Instagram" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-neutral py-8 text-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {FOOTER_SECTIONS.map((section) => (
            <FooterSection
              key={section.id}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        <CopyrightNotice />
      </div>
    </footer>
  );
}

type FooterSectionProps = {
  title: string;
  links: Array<{ id: string; href: string; label: string }>;
};

function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h3 className="mb-4 font-semibold">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-secondary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
