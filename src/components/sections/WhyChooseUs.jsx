import React from "react";
import { motion } from "framer-motion";
import {
  Users, TrendingUp, Award, MessageSquare, Gauge, SlidersHorizontal,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { DIFFERENTIATORS } from "@/lib/constants";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

const ICONS = {
  Users, TrendingUp, Award, MessageSquare, Gauge, SlidersHorizontal,
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why TEQSEL"
          title="Built for results, not recommendations"
          subtitle="We blend institutional consulting rigor with hands-on execution — engineered to deliver measurable revenue outcomes."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {DIFFERENTIATORS.map((d) => {
            const Icon = ICONS[d.icon] ?? Users;
            return (
              <motion.div
                key={d.title}
                variants={fadeInUp}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{d.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {d.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}