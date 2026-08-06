import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Instagram, Send } from "lucide-react";
import { BRAND, NAV_LINKS, SERVICES } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 3500);
  };

  const socials = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "X" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary">
      <div className="nexus-line opacity-40" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + description */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display font-extrabold">
                T
              </span>
              <span className="text-lg font-bold tracking-tight">
                {BRAND.name}
                <span className="text-accent">.</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A technology sales consulting firm helping SaaS companies, startups,
              and technology businesses build scalable sales systems and expand
              successfully across African markets.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${BRAND.email}`} className="hover:text-foreground">
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a href={`tel:${BRAND.phone}`} className="hover:text-foreground">
                  {BRAND.phone}
                </a>
              </li>
              <li>{BRAND.address}</li>
              <li>{BRAND.hours}</li>
            </ul>

            <form onSubmit={subscribe} className="mt-6">
              <label className="text-xs font-medium text-muted-foreground">
                Subscribe to our newsletter
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="h-10 flex-1 rounded-full border border-border bg-background px-4 text-sm outline-none focus:border-accent"
                />
                <Button type="submit" variant="gold" size="sm" aria-label="Subscribe">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              {done && (
                <p className="mt-2 text-xs text-teal-600 dark:text-teal-400">
                  Thanks — you're subscribed!
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}