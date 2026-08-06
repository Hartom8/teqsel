import React from "react";
import { motion } from "framer-motion";
import { Award, Compass, BarChart3, Heart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Image } from "@/components/ui/image";
import { fadeInUp, slideInRight, staggerContainer, viewportOnce } from "@/lib/animations";

const ABOUT_IMG =
  "https://media.base44.com/images/public/6a7448e063a959b85bbe7092/6d24b9221_generated_9cc32e49.png";

const HIGHLIGHTS = [
  { icon: Award, title: "Industry Expertise", desc: "Deep fluency across SaaS, fintech, and B2B tech." },
  { icon: Compass, title: "Proven Methodologies", desc: "Sales frameworks validated by revenue outcomes." },
  { icon: BarChart3, title: "Market Expansion", desc: "Real experience entering African markets." },
  { icon: Heart, title: "Customer-Centric", desc: "Strategies built around your buyers' reality." },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                src={ABOUT_IMG}
                alt="TEQSEL consulting team in a modern architectural setting"
                className="aspect-[4/5] w-full"
                fittingType="fill"
              />
            </div>
            <div className="absolute -right-4 -top-4 hidden rounded-xl bg-primary px-5 py-4 text-primary-foreground shadow-xl sm:block">
              <p className="text-3xl font-extrabold">10+</p>
              <p className="text-xs opacity-80">Years bridging<br />markets</p>
            </div>
          </motion.div>

          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A growth partner, not just a consultancy"
              align="left"
            />
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              We are a technology sales consulting firm focused on helping
              businesses increase revenue through strategic sales execution,
              market expansion, lead generation, sales process optimization, and
              customer success strategies — with a deep specialty in scaling into
              African markets.
            </motion.p>

            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-10 grid gap-5 sm:grid-cols-2"
            >
              {HIGHLIGHTS.map((h) => (
                <motion.div
                  key={h.title}
                  variants={slideInRight}
                  className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/50 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
                    <h.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{h.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{h.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}