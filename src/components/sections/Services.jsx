import React from "react";
import { motion } from "framer-motion";
import {
  Target, Rocket, Zap, Database, GraduationCap, Workflow,
  HeartHandshake, Globe, Handshake, TrendingUp, ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

const ICONS = {
  Target, Rocket, Zap, Database, GraduationCap, Workflow,
  HeartHandshake, Globe, Handshake, TrendingUp,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="The growth engine for tech sales"
          subtitle="Ten interconnected services that transform scattered effort into a predictable, scalable revenue system."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] ?? Target;
            return (
              <motion.article
                key={service.title}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
                </div>

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all group-hover:bg-accent group-hover:text-accent-foreground dark:bg-primary/10">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-600 dark:text-teal-400">
                      {service.impact}
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent dark:text-primary"
                    >
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}