import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  BadgeCheck,
  Building2,
  Cpu,
  Factory,
  PhoneCall,
  Settings2,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { Container, Section } from "@/components/craft";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Zhengzhou Kechuang Electronic Co., Ltd., our induction heating expertise, engineering strengths, and commitment to reliable service.",
  alternates: {
    canonical: "/pages/about-us",
  },
};

const stats = [
  { label: "Founded", value: "2001" },
  { label: "Registered Capital", value: "RMB 18M" },
  { label: "Site Area", value: "8,000 m2" },
  { label: "Team Members", value: "100+" },
];

const highlights = [
  {
    title: "Engineering-led manufacturing",
    description:
      "More than 20% of our site is dedicated to R&D, supported by well-equipped testing, inspection, and production facilities.",
    icon: Cpu,
  },
  {
    title: "Experienced technical team",
    description:
      "Over 80% of our employees hold college degrees or above, and our R&D team is made up entirely of bachelor-level or higher talent.",
    icon: Building2,
  },
  {
    title: "Recognized innovation capability",
    description:
      "Since 2008, we have repeatedly been recognized as a National High-Tech Enterprise through joint government review.",
    icon: Award,
  },
  {
    title: "Reliable product philosophy",
    description:
      "We continue to improve automation, intelligence, and unattended operation with a clear focus on energy savings and long-term reliability.",
    icon: ShieldCheck,
  },
];

const milestones = [
  {
    year: "2001",
    title: "Company founded in Zhengzhou",
    description:
      "Zhengzhou Kechuang Electronic Co., Ltd. was established on August 31, 2001, laying the foundation for long-term specialization in induction heating technology.",
  },
  {
    year: "2008",
    title: "Recognized as a National High-Tech Enterprise",
    description:
      "Beginning in 2008, the company passed multiple rounds of joint review by provincial science, finance, and tax authorities.",
  },
  {
    year: "2009",
    title: "Provincial and municipal technical platforms approved",
    description:
      'The company was approved to build the "Henan Induction Heating Power Supply and Control System Engineering Technology Research Center" and the "Zhengzhou Enterprise Technology Center."',
  },
  {
    year: "2016",
    title: "Launch of intelligent IGBT power systems",
    description:
      "We introduced a new generation of intelligent IGBT power supplies with stronger performance, better accuracy, and improved value for high-end users.",
  },
];

const certifications = [
  "National High-Tech Enterprise",
  "Henan Engineering Technology Research Center",
  "Zhengzhou Enterprise Technology Center",
  "Energy-saving equipment development focus",
];

const capabilities = [
  {
    title: "R&D and control systems",
    description:
      "We invest continuously in induction power supply, control architecture, and application engineering to improve precision, efficiency, and operating stability.",
    icon: Cpu,
  },
  {
    title: "Production and assembly",
    description:
      "Our manufacturing workflow integrates assembly, testing, and quality inspection to deliver reliable equipment ready for real production environments.",
    icon: Factory,
  },
  {
    title: "Commissioning and service",
    description:
      "We support customers from requirement analysis and solution design through installation guidance, tuning, and after-sales follow-up.",
    icon: Wrench,
  },
];

export default function AboutUsPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.22),_transparent_30%)]" />
        <Container className="relative py-20 md:py-28">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-200">
              About Kechuang
            </div>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
                Advancing intelligent induction heating with dependable engineering.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Zhengzhou Kechuang Electronic Co., Ltd. has focused on the research,
                development, and practical application of electromagnetic induction
                heating technology and equipment since 2001. We combine engineering
                depth, disciplined manufacturing, and responsive service to help
                customers improve heating efficiency, process control, and operating
                reliability.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Section className="border-b border-white/10 bg-slate-950">
        <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Company Profile
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Built on application-driven innovation.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
              <p>
                Our company is located in Building 21, Liandong International
                Enterprise Port, East Hanghai Road, Zhengzhou Economic and
                Technological Development Zone. The site covers nearly 8,000 square
                meters, with approximately 20% devoted to technical research and
                development.
              </p>
              <p>
                From the beginning, we have concentrated on the research and
                industrial application of induction heating technology and related
                equipment. Over the years, that focus has helped us accumulate strong
                practical experience and transform it into a broad product portfolio
                welcomed by customers in both domestic and overseas markets.
              </p>
              <p>
                We continue to develop solutions that are more energy-efficient, more
                reliable, and easier to automate. Through professional service before,
                during, and after delivery, we aim to create measurable value for every
                customer we support.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
              Contact Snapshot
            </p>
            <div className="mt-6 space-y-5 text-slate-100">
              <div className="flex items-start gap-4">
                <PhoneCall className="mt-1 text-blue-300" size={20} />
                <div>
                  <p className="text-sm text-slate-300">Hotline</p>
                  <p className="text-lg font-semibold">400-118-1633 / 19937602760</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Factory className="mt-1 text-blue-300" size={20} />
                <div>
                  <p className="text-sm text-slate-300">Email</p>
                  <p className="text-lg font-semibold">xxzx@zzkc.net</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Building2 className="mt-1 text-blue-300" size={20} />
                <div>
                  <p className="text-sm text-slate-300">Address</p>
                  <p className="text-lg font-semibold leading-8">
                    Building 21, Liandong International Enterprise Port,
                    1894 East Hanghai Road, Zhengzhou, Henan, China
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-slate-300">
              This page is based on the company introduction published on the Chinese
              official website and rewritten in natural English for an international
              audience.
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-white/10 bg-slate-900/70">
        <Container>
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Core Strengths
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Why customers choose Kechuang
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              We build our reputation on technical capability, stable product quality,
              and service that stays engaged throughout the project lifecycle.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                  <div className="inline-flex rounded-2xl bg-blue-500/15 p-3 text-blue-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-8 text-slate-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="border-b border-white/10 bg-slate-950">
        <Container>
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Facility & Quality
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              A manufacturing environment built for industrial reliability
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              From engineering development to final inspection, we focus on practical
              process control, stable assembly quality, and equipment readiness for
              real operating conditions.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                    Production Base
                  </p>
                  <p className="mt-4 text-2xl font-semibold text-white">8,000 m2</p>
                  <p className="mt-3 leading-7 text-slate-300">
                    A dedicated manufacturing base with R&D, assembly, testing, and
                    quality inspection zones.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                    R&D Area
                  </p>
                  <p className="mt-4 text-2xl font-semibold text-white">20% of site</p>
                  <p className="mt-3 leading-7 text-slate-300">
                    Significant floor space is assigned to design, electrical control,
                    testing, and application development.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                    Quality Principle
                  </p>
                  <p className="mt-4 text-2xl font-semibold text-white">
                    Stable performance starts with disciplined process control
                  </p>
                  <p className="mt-3 max-w-3xl leading-8 text-slate-300">
                    Our manufacturing approach emphasizes dependable power supply
                    performance, precise control behavior, and practical long-term
                    maintainability. This is especially important for customers who need
                    consistent thermal results in production-line environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
                What We Prioritize
              </p>
              <div className="mt-6 space-y-4">
                {[
                  "Dependable induction power output",
                  "Consistent heating quality across batches",
                  "Practical automation and unattended operation",
                  "Energy-saving design with long service life",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                  >
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-300" />
                    <p className="leading-7 text-slate-100">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-white/10 bg-slate-950">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Certifications & Recognition
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Trusted credentials built over years of technical work
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Our growth has been supported by sustained technical investment,
              recognized R&D platforms, and repeated qualification as a high-tech
              enterprise. These recognitions reflect real engineering capability,
              not just marketing language.
            </p>

            <div className="mt-8 grid gap-4">
              {certifications.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4"
                >
                  <div className="rounded-full bg-blue-500/15 p-2 text-blue-300">
                    <BadgeCheck size={18} />
                  </div>
                  <p className="text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8"
                >
                  <div className="inline-flex rounded-2xl bg-blue-500/15 p-3 text-blue-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-8 text-slate-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="border-b border-white/10 bg-slate-900/70">
        <Container>
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Recognition Snapshot
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Technical recognition that supports customer confidence
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "High-Tech Status",
                text: "Repeated qualification as a National High-Tech Enterprise reflects sustained technical capability and innovation output.",
              },
              {
                title: "R&D Platform",
                text: "Provincial engineering research platform approval highlights our concentration on induction heating power and control systems.",
              },
              {
                title: "Talent Structure",
                text: "A highly educated team supports faster design response, stronger technical communication, and more stable solution execution.",
              },
              {
                title: "Product Upgrades",
                text: "Continuous iteration in intelligent IGBT systems has improved automation, value, and usability for demanding customers.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7"
              >
                <div className="inline-flex rounded-2xl bg-blue-500/15 p-3 text-blue-300">
                  <Award size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-b border-white/10 bg-slate-950">
        <Container>
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Development Path
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              A timeline of steady technical growth
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {milestones.map((item) => (
              <div
                key={item.year}
                className="grid gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[120px_1fr] md:p-8"
              >
                <div className="text-3xl font-bold text-blue-300">{item.year}</div>
                <div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-8 text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-b border-white/10 bg-slate-900/70">
        <Container>
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Service Commitment
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              A practical partner from evaluation to delivery
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              We believe equipment value is defined not only by power output, but by
              whether it integrates smoothly into the customer&apos;s real production
              process.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <Settings2 className="text-blue-300" size={26} />
              <h3 className="mt-5 text-2xl font-semibold">Solution matching</h3>
              <p className="mt-3 leading-8 text-slate-300">
                We align equipment recommendations with workpiece size, heating target,
                rhythm, and automation expectations.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <ShieldCheck className="text-blue-300" size={26} />
              <h3 className="mt-5 text-2xl font-semibold">Stable delivery</h3>
              <p className="mt-3 leading-8 text-slate-300">
                Our team emphasizes dependable operation, practical maintainability,
                and consistent output in demanding industrial settings.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <Award className="text-blue-300" size={26} />
              <h3 className="mt-5 text-2xl font-semibold">Long-term support</h3>
              <p className="mt-3 leading-8 text-slate-300">
                We stay involved after delivery with technical assistance, operating
                guidance, and continued communication as production needs evolve.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-950">
        <Container>
          <div className="rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-600 to-cyan-600 p-10 md:p-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100/80">
                Work With Us
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Looking for a more efficient induction heating solution?
              </h2>
              <p className="mt-4 text-lg leading-8 text-blue-50/90">
                Tell us about your material, process target, and production requirement.
                Our team can help you evaluate the right equipment and control solution
                for your application.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-blue-700 transition-colors hover:bg-blue-50"
                >
                  Contact Our Team
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
