"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, Phone, Upload, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/pricing", label: "Pricing" },
  { href: "/areas", label: "Areas We Cover" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="transition-opacity hover:opacity-90"
            aria-label="PropertyPro - Home"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle />
            <Button variant="ghost" asChild className="text-foreground">
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" />
                028 9087 6543
              </Link>
            </Button>
            <Button className="bg-secondary hover:bg-secondary/90" asChild>
              <Link href="/list-property">
                <Upload className="mr-2 h-4 w-4" />
                List Your Property
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 hover:bg-accent md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-border py-4 duration-300 animate-in slide-in-from-top md:hidden">
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2 px-4">
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4" />
                    028 9087 6543
                  </Link>
                </Button>
                <Button className="bg-secondary hover:bg-secondary/90" asChild>
                  <Link href="/list-property">
                    <Upload className="mr-2 h-4 w-4" />
                    List Your Property
                  </Link>
                </Button>
                <div className="flex justify-center pt-2">
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
