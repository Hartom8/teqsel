import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Clock, MapPin, Check, ArrowRight, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { BRAND, SERVICE_OPTIONS } from "@/lib/constants";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

const COMPANY_TYPES = ["SaaS Company", "Tech Startup", "B2B Business", "International Firm", "SME"];
const GOALS = ["Expand into Africa", "Generate Leads", "Optimize Sales Process", "Train Sales Team", "Grow Revenue"];
const TEAM_SIZES = ["1-10", "10-50", "50-200", "200+"];

const STEPS = ["companyType", "goal", "teamSize", "details", "success"];

export default function Contact() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    companyType: "",
    goal: "",
    teamSize: "",
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validateDetails = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (step === 3 && !validateDetails()) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    if (!validateDetails()) return;
    setStep(4);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: Phone, label: "Phone", value: BRAND.phone, href: `tel:${BRAND.phone}` },
    { icon: Clock, label: "Business Hours", value: BRAND.hours },
    { icon: MapPin, label: "Office", value: BRAND.address },
  ];

  return (
    <section id="contact" className="relative bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Start the Conversation"
          title="Let's build your growth engine"
          subtitle="Tell us about your business and we'll map a path to measurable revenue growth."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Left: contact info + map */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((c) => (
                <motion.div
                  key={c.label}
                  variants={fadeInUp}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block text-sm font-medium hover:text-accent">
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium">{c.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative h-48 w-full bg-primary/5">
                <iframe
                  title="TEQSEL office location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=3.38%2C6.42%2C3.45%2C6.45&layer=mapnik"
                  className="h-full w-full grayscale"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: multi-step form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8">
              {/* Progress */}
              <div className="mb-8 flex items-center gap-2">
                {STEPS.slice(0, 4).map((s, i) => (
                  <div key={s} className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      animate={{ width: i <= step ? "100%" : "0%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {step === 0 && (
                  <Step key="companyType" title="I am a..." subtitle="Tell us who you are">
                    <PillGroup
                      options={COMPANY_TYPES}
                      value={form.companyType}
                      onChange={(v) => update("companyType", v)}
                    />
                  </Step>
                )}
                {step === 1 && (
                  <Step key="goal" title="looking to..." subtitle="What's your primary goal">
                    <PillGroup
                      options={GOALS}
                      value={form.goal}
                      onChange={(v) => update("goal", v)}
                    />
                  </Step>
                )}
                {step === 2 && (
                  <Step key="teamSize" title="with a team of..." subtitle="Roughly how big is your team">
                    <PillGroup
                      options={TEAM_SIZES}
                      value={form.teamSize}
                      onChange={(v) => update("teamSize", v)}
                    />
                  </Step>
                )}
                {step === 3 && (
                  <Step key="details" title="Almost there" subtitle="Where can we reach you">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Full Name" error={errors.fullName} required>
                        <input
                          value={form.fullName}
                          onChange={(e) => update("fullName", e.target.value)}
                          className="teqsel-input"
                          placeholder="Jane Doe"
                        />
                      </Field>
                      <Field label="Company Name">
                        <input
                          value={form.companyName}
                          onChange={(e) => update("companyName", e.target.value)}
                          className="teqsel-input"
                          placeholder="Acme Inc."
                        />
                      </Field>
                      <Field label="Email Address" error={errors.email} required>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          className="teqsel-input"
                          placeholder="jane@acme.com"
                        />
                      </Field>
                      <Field label="Phone Number">
                        <input
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          className="teqsel-input"
                          placeholder="+234 ..."
                        />
                      </Field>
                      <Field label="Service Needed" full>
                        <select
                          value={form.service}
                          onChange={(e) => update("service", e.target.value)}
                          className="teqsel-input"
                        >
                          <option value="">Select a service...</option>
                          {SERVICE_OPTIONS.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </Field>
                      <Field label="Message" full>
                        <textarea
                          rows={4}
                          value={form.message}
                          onChange={(e) => update("message", e.target.value)}
                          className="teqsel-input resize-none"
                          placeholder="Tell us about your challenge..."
                        />
                      </Field>
                    </div>
                  </Step>
                )}
                {step === 4 && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-10 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/15 text-teal-600 dark:text-teal-400">
                      <Check className="h-8 w-8" />
                    </div>
                    <h3 className="mt-5 text-2xl font-bold">Thank you!</h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                      Your request has been received. A TEQSEL consultant will
                      reach out within one business day.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Controls */}
              {step < 4 && (
                <div className="mt-8 flex items-center justify-between">
                  <Button
                    variant="ghost"
                    onClick={back}
                    disabled={step === 0}
                    className={step === 0 ? "opacity-0" : ""}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </Button>

                  {step < 3 ? (
                    <Button
                      variant="gold"
                      onClick={next}
                      disabled={!form[STEPS[step]]}
                    >
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button variant="gold" onClick={submit}>
                      Submit Request
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Step({ title, subtitle, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      <div className="mt-6">{children}</div>
    </motion.div>
  );
}

function PillGroup({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
            value === opt
              ? "border-accent bg-accent text-accent-foreground shadow-md shadow-accent/20"
              : "border-border bg-background hover:border-accent/40"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function Field({ label, error, required, full, children }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}