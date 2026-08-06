import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Users, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/ui/MagneticButton";
import { Image } from "@/components/ui/image";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { BRAND } from "@/lib/constants";

const HERO_IMG =
  "https://media.base44.com/images/public/6a7448e063a959b85bbe7092/01545f7e2_generated_603f1c20.png";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl dark:bg-primary/30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Tech Sales Consulting · Africa & Beyond
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Accelerate Your{" "}
              <span className="text-gradient-gold">Tech Sales</span> Growth
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              We help SaaS companies, startups, and technology businesses build
              scalable sales systems, generate qualified leads, and expand
              successfully across Africa.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <MagneticButton as="a" href="#contact" strength={0.4}>
                <span className="inline-flex h-14 items-center gap-2 rounded-full bg-accent px-8 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/30 btn-shimmer">
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </span>
              </MagneticButton>
              <Button as="a" href="#services" variant="outline" size="lg">
                <Play className="h-4 w-4" />
                Our Services
              </Button>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8"
            >
              {[
                { icon: TrendingUp, value: "2.1x", label: "Avg. ARR Growth" },
                { icon: Users, value: "100+", label: "Businesses Served" },
                { icon: Zap, value: "10+", label: "Industries" },
              ].map((s) => (
                <div key={s.label}>
                  <s.icon className="h-5 w-5 text-accent" />
                  <p className="mt-2 text-2xl font-bold">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative animate-float-slow">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
                <Image
                  src={HERO_IMG}
                  alt="Modern African tech hub representing TEQSEL's market reach"
                  className="aspect-[4/3] w-full"
                  fittingType="fill"
                />
              </div>

              {/* Floating analytics card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -bottom-6 -left-4 w-56 rounded-xl glass p-4 shadow-xl sm:-left-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">
                    Revenue Growth
                  </span>
                  <span className="rounded-full bg-teal-500/10 px-2 py-0.5 text-xs font-semibold text-teal-600 dark:text-teal-400">
                    +38%
                  </span>
                </div>
                <p className="mt-1 text-2xl font-bold">$1.2M</p>
                <div className="mt-3 flex h-10 items-end gap-1">
                  {[40, 55, 48, 70, 62, 85, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 1 + i * 0.08, duration: 0.4 }}
                      className="flex-1 rounded-sm bg-gradient-to-t from-primary to-accent"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating lead badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -right-3 top-8 rounded-xl glass px-4 py-3 shadow-xl sm:-right-6"
              >
                <p className="text-xs text-muted-foreground">Qualified Leads</p>
                <p className="text-lg font-bold text-accent">+62%</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Nexus line */}
      <div className="nexus-line opacity-30" />
    </section>
  );
}