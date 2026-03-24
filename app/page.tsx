// Craft Imports
import { Section, Container } from "@/components/craft";

// React
import React from "react";

// Next.js Imports
import Link from "next/link";
import Image from "next/image";

// UI Components
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
  Settings, 
  Zap, 
  ShieldCheck, 
  Globe,
  Factory
} from "lucide-react";

import { siteConfig } from "@/site.config";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="relative overflow-hidden bg-slate-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent" />
          {/* Placeholder for background image */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
              <Zap size={16} className="mr-2" />
              <span>Leading Induction Heating Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Advanced Induction Heating Solutions for Industry
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {siteConfig.site_name} provides high-performance electromagnetic induction heating equipment 
              integrating research, design, and technical services for global manufacturers.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none h-14 px-8 text-lg" asChild>
                <Link href="/posts/categories">
                  Explore Products <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-slate-700 hover:bg-slate-800 h-14 px-8 text-lg" asChild>
                <Link href="/pages/about-us">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats/Features Strip */}
      <div className="bg-blue-600 py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div className="space-y-1">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm opacity-80 uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold">1000+</p>
              <p className="text-sm opacity-80 uppercase tracking-wider">Projects Completed</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold">21+</p>
              <p className="text-sm opacity-80 uppercase tracking-wider">National Patents</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold">50+</p>
              <p className="text-sm opacity-80 uppercase tracking-wider">Countries Exported</p>
            </div>
          </div>
        </Container>
      </div>

      {/* About Section */}
      <Section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-2xl">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80')] bg-cover bg-center" />
               <div className="absolute bottom-6 right-6 bg-white p-6 rounded-xl shadow-lg max-w-[200px]">
                 <Factory className="text-blue-600 mb-2" size={32} />
                 <p className="text-sm font-bold text-slate-900 leading-tight">State-of-the-art Manufacturing Facility</p>
               </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">About kcinduction</h2>
              <h3 className="text-4xl font-bold text-slate-900 leading-tight">
                Innovation in Electromagnetic Induction Heating
              </h3>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Zhengzhou Gou's Electromagnetic Induction Heating Equipment Co., Ltd. (kcinduction) is an early domestic induction heating equipment manufacturer integrating research, design, production and technical services.
                </p>
                <p>
                  Won 11 national patents and 10 software patents. Now the company's products have passed the ISO9001, CE international quality system certification.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "ISO9001 Certified",
                  "CE International Quality",
                  "11 National Patents",
                  "Global Technical Service"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="text-blue-600" size={20} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Button variant="link" className="text-blue-600 p-0 text-lg group" asChild>
                  <Link href="/pages/about-us">
                    Read more about our history <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Applications/Categories */}
      <Section className="bg-slate-50 py-20 border-y">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Industry Applications</h2>
            <p className="text-slate-600 text-lg">
              Our products serve a wide range of industries with specialized induction heating solutions.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Hardware Tools", icon: <Settings />, desc: "High-frequency heating for various industrial tools." },
              { title: "Auto Parts", icon: <Zap />, desc: "Precision heat treatment for critical automotive components." },
              { title: "Bearings & Metallurgy", icon: <ShieldCheck />, desc: "Reliable solutions for heavy machinery and metal processing." },
              { title: "Mining Machinery", icon: <Factory />, desc: "Robust equipment for demanding mining environments." },
              { title: "Global Export", icon: <Globe />, desc: "Serving customers in over 50 countries worldwide." },
              { title: "Technical Support", icon: <CheckCircle2 />, desc: "Expert technical services and customized designs." }
            ].map((app, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {React.cloneElement(app.icon as React.ReactElement, { size: 24 })}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{app.title}</h4>
                <p className="text-slate-600 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-blue-700 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />
        <Container className="relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
            Ready to enhance your production with advanced induction heating?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed text-balance">
            Contact our technical team today for a customized solution tailored to your specific industrial needs.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 h-14 px-10 text-lg font-bold" asChild>
              <Link href="/pages/contact">
                Contact Our Experts
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-blue-400 hover:bg-blue-600 h-14 px-10 text-lg" asChild>
              <Link href="/posts">
                View Latest News
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
