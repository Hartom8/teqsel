import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BRAND } from "@/lib/constants";

/**
 * Shared layout for legal pages (Privacy Policy, Terms of Service).
 */
export default function LegalLayout({ title, updated, children }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <header className="border-b border-border pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Legal
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h1>
            {updated && (
              <p className="mt-2 text-sm text-muted-foreground">
                Last updated: {updated}
              </p>
            )}
          </header>
          <div className="prose-legal mt-10 space-y-8">{children}</div>
          <p className="mt-12 border-t border-border pt-8 text-sm text-muted-foreground">
            For questions about this document, contact{" "}
            <a href={`mailto:${BRAND.email}`} className="font-medium text-foreground hover:text-accent">
              {BRAND.email}
            </a>
            .
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({ heading, children }) {
  return (
    <section>
      <h2 className="text-xl font-semibold">{heading}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}