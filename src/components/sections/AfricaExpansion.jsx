import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Image } from "@/components/ui/image";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

const MAP_IMG =
  "https://media.base44.com/images/public/6a7448e063a959b85bbe7092/84bcb0259_generated_624afb66.png";

const REGIONS = [
  {
    name: "West Africa",
    hubs: "Lagos · Accra · Abidjan",
    stat: "$180B",
    statLabel: "Digital economy by 2030",
    insight: "A young, mobile-first market with explosive fintech and SaaS adoption.",
  },
  {
    name: "East Africa",
    hubs: "Nairobi · Kigali · Addis Ababa",
    stat: "320M",
    statLabel: "Addressable consumers",
    insight: "The 'Silicon Savannah' — a hub for enterprise tech and mobile money.",
  },
  {
    name: "Southern Africa",
    hubs: "Johannesburg · Cape Town",
    stat: "+12%",
    statLabel: "Annual tech spend growth",
    insight: "Mature enterprise buyers with strong demand for B2B SaaS.",
  },
];

export default function AfricaExpansion() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid items-center gap-14 lg:grid-cols-2"
        >
          <div>
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
            >
              <span className="h-px w-6 bg-accent" />
              The African Tech Horizon
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Your bridge into the world's next growth frontier
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/70 sm:text-lg"
            >
              Africa's tech economy is accelerating. We help you enter the right
              markets, with the right partners, at the right velocity.
            </motion.p>

            <div className="mt-10 space-y-3">
              {REGIONS.map((region, i) => (
                <motion.button
                  key={region.name}
                  variants={fadeInUp}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left transition-all ${
                    active === i
                      ? "border-accent bg-accent/10"
                      : "border-primary-foreground/10 bg-primary-foreground/5 hover:border-primary-foreground/20"
                  }`}
                >
                  <div>
                    <p className="font-semibold">{region.name}</p>
                    <p className="text-xs text-primary-foreground/60">{region.hubs}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-accent">{region.stat}</p>
                    <p className="text-xs text-primary-foreground/60">{region.statLabel}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Map visual */}
          <motion.div variants={fadeInUp} className="relative">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 shadow-2xl">
              <Image
                src={MAP_IMG}
                alt="Interactive map of the African tech landscape"
                className="aspect-[4/3] w-full"
                fittingType="fill"
              />
            </div>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute -bottom-6 left-4 right-4 rounded-xl glass p-5 text-primary-foreground sm:left-8 sm:right-8"
            >
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <div>
                  <p className="font-semibold">{REGIONS[active].name}</p>
                  <p className="mt-1 text-sm text-primary-foreground/80">
                    {REGIONS[active].insight}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}