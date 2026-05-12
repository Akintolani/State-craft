/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Menu, X, BarChart3, Users, ShieldAlert, Cpu, ScrollText, MessageSquare } from 'lucide-react';
import { useState } from 'react';

// Data arrays
const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Who We Are', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Our Approach', href: '#approach' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  {
    title: "Voter Intelligence & Analytics",
    description: "Deep-dive data mining and psychographic profiling to understand the Nigerian electorate at a granular level.",
    icon: <BarChart3 className="w-8 h-8 text-brand-emerald" />,
  },
  {
    title: "Grassroots Mobilization",
    description: "Structure-over-noise. Deploying field agent networks that convert digital sentiment into physical votes.",
    icon: <Users className="w-8 h-8 text-brand-emerald" />,
  },
  {
    title: "Crisis & Reputation Management",
    description: "Swift, strategic responses to political firestorms. Protecting the brand when the stakes are highest.",
    icon: <ShieldAlert className="w-8 h-8 text-brand-emerald" />,
  },
  {
    title: "Digital Engagement Hub",
    description: "Sophisticated storytelling that bypasses the noise to build genuine emotional resonance with voters.",
    icon: <Cpu className="w-8 h-8 text-brand-emerald" />,
  },
  {
    title: "Policy & Manifesto Design",
    description: "Articulating a vision that is both technically sound and politically potent. From data to doctrine.",
    icon: <ScrollText className="w-8 h-8 text-brand-emerald" />,
  }
];

const methodology = [
  { step: "01", name: "Listen", desc: "Aggregating digital sentiment and local field reports." },
  { step: "02", name: "Research", desc: "Scientific polling and historical pattern analysis." },
  { step: "03", name: "Strategise", desc: "Developing the 'Deliberate Political Architecture'." },
  { step: "04", name: "Execute", desc: "Synchronized digital and grassroots deployment." },
  { step: "05", name: "Measure", desc: "Real-time feedback loops and tactical adjustment." }
];

const audience = [
  { type: "Aspirational Candidates", desc: "New voices seeking to disrupt the established political order with data." },
  { type: "Incumbent Leaders", desc: "Office holders looking to institutionalize their legacy and secure re-election." },
  { type: "Advocacy Groups", desc: "Issue-based organizations requiring strategic communication for policy change." },
  { type: "Political Parties", desc: "Coalitions needing unified strategy across regional or national structures." }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-sand selection:bg-brand-gold selection:text-brand-navy font-sans text-brand-navy">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-brand-navy text-brand-ivory py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center font-serif font-bold text-brand-navy text-xl">S</div>
            <span className="font-serif text-2xl font-bold tracking-tight">STATECRAFT</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium tracking-widest uppercase hover:text-brand-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-brand-gold text-brand-navy px-6 py-2.5 rounded-full font-bold text-sm tracking-widest hover:bg-white transition-colors">
              SECURE CONSULTATION
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-navy flex flex-col items-center justify-center gap-8 pt-20">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-serif text-brand-ivory hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <main className="pt-[72px]">
        {/* Simple Hero Section with Image */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-center px-6">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558025137-0b446a9cb0b3?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-brand-navy/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-ivory/10 border border-brand-ivory/20 rounded-full mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></span>
                <span className="text-xs uppercase tracking-widest font-bold text-brand-ivory">Nigeria 2027 Cycle</span>
              </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight text-white mb-6">
              Deliberate Political Architecture.
            </h1>
            <p className="text-lg md:text-2xl text-brand-sand/90 font-light max-w-2xl mx-auto mb-10">
              Moving from campaign noise to campaign structure. We engineer victory through strategic precision and voter intelligence.
            </p>
            <a href="#about" className="inline-flex items-center justify-center bg-brand-gold text-brand-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors">
              Discover Our Approach
            </a>
          </div>
        </section>

        {/* Brand Bar */}
        <section className="bg-brand-emerald py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8 text-center text-brand-sand">
            <span className="font-serif text-xl md:text-2xl uppercase tracking-widest flex-1">Public Engagement</span>
            <span className="hidden md:inline-block w-2 sm:w-16 h-px bg-brand-sand/30"></span>
            <span className="font-serif text-xl md:text-2xl uppercase tracking-widest flex-1">Data Strategy</span>
            <span className="hidden md:inline-block w-2 sm:w-16 h-px bg-brand-sand/30"></span>
            <span className="font-serif text-xl md:text-2xl uppercase tracking-widest flex-1">Voter Intel</span>
          </div>
        </section>

        {/* Section 1: Who We Are / Audience */}
        <section id="about" className="py-24 px-6 bg-white shrink-0">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-emerald font-bold tracking-[0.2em] uppercase text-sm block mb-4">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-navy mb-8 leading-tight">
                Architecting Structure for High-Stakes Political Actors.
              </h2>
              <p className="text-lg text-brand-navy/70 leading-relaxed mb-6">
                Our intelligence hubs are designed for political candidates, office holders, and advocacy groups who prioritize institutional structure over theatrical noise. We work with those who understand that elections are won through precision, not just popularity.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                 {audience.map(item => (
                   <div key={item.type} className="border-l-2 border-brand-gold pl-4">
                     <h4 className="font-serif text-xl text-brand-navy mb-2">{item.type}</h4>
                     <p className="text-sm text-brand-navy/60 leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=1200" 
                alt="Strategy Meeting" 
                className="w-full h-[600px] object-cover rounded-2xl shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-brand-navy text-white p-8 rounded-xl shadow-2xl hidden md:block">
                 <div className="text-4xl font-serif mb-1 text-brand-gold">94%</div>
                 <div className="text-xs uppercase tracking-widest font-bold">Efficiency Retention</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Services */}
        <section id="services" className="py-24 px-6 bg-brand-sand">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <span className="text-brand-emerald font-bold tracking-[0.2em] uppercase text-sm block mb-4">Core Ecosystem</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-navy">
              Strategic Systems for Political Supremacy.
            </h2>
            <p className="mt-6 text-lg text-brand-navy/70 max-w-2xl mx-auto">
              We distinguish between digital engagement and grassroots mobilization, ensuring every signal is converted into a structured outcome.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={service.title}
                className="bg-white p-10 rounded-2xl border border-brand-navy/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-brand-sand rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4 text-brand-navy">{service.title}</h3>
                <p className="text-brand-navy/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Methodology */}
        <section id="approach" className="py-24 px-6 bg-brand-navy text-brand-ivory overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                  alt="Data Analytics" 
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-sm block mb-4">The STATECRAFT Way</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Clinical Execution Framework.</h2>
              <p className="text-brand-ivory/70 text-lg mb-10 leading-relaxed">
                Victory is not an accident. It is the inevitable result of a rigorous, 5-stage mechanical process.
              </p>

              <div className="space-y-6">
                {methodology.map((item, idx) => (
                  <div key={item.step} className="flex gap-6 items-start">
                    <div className="text-3xl font-serif text-brand-gold font-bold opacity-80 mt-1">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-widest mb-1">{item.name}</h4>
                      <p className="text-brand-ivory/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-32 relative bg-brand-sand">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-brand-navy mb-8">Ready to engineer your Victory?</h2>
            <p className="text-brand-navy/70 text-xl mb-12 max-w-2xl mx-auto">
              Contact our strategy center for a confidential evaluation of your political architecture for the 2027 cycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:hello@statecraft.cerebral" className="bg-brand-navy text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-emerald transition-colors shadow-lg">
                SCHEDULE CONSULTATION
              </a>
              <a href="#" className="border-2 border-brand-navy text-brand-navy bg-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-navy hover:text-white transition-colors flex items-center justify-center gap-3">
                <MessageSquare className="w-5 h-5" />
                WHATSAPP DIRECT
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy pt-20 pb-10 text-brand-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center font-serif font-bold text-brand-navy text-sm">S</div>
                <span className="font-serif text-xl font-bold tracking-tight text-brand-ivory">STATECRAFT</span>
              </div>
              <p className="max-w-sm text-brand-ivory/60 font-light leading-relaxed">
                Political Strategy. Public Engagement. Data-Driven Victory. Powered by Cerebral Hub Intelligence.
              </p>
            </div>
            <div>
              <h6 className="font-bold uppercase tracking-widest text-xs mb-6 text-brand-gold">Navigation</h6>
              <ul className="space-y-3 text-brand-ivory/60 font-light text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Strategic Intelligence</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Grassroots Network</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Media Architecture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manifesto Lab</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold uppercase tracking-widest text-xs mb-6 text-brand-gold">Contact</h6>
              <ul className="space-y-3 text-brand-ivory/60 font-light text-sm">
                <li>Lagos Strategy Hub</li>
                <li>Abuja Operations center</li>
                <li className="text-white">hello@statecraft.cerebral</li>
                <li className="text-white">+234 (0) 800-STATE-CRAFT</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-brand-ivory/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs uppercase tracking-widest font-bold text-brand-ivory/40">© 2026 STATECRAFT · BEYOND NOISE · NIGERIA 2027</p>
            <div className="flex gap-6 text-brand-ivory/40 text-xs font-bold tracking-widest uppercase">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Ethics</a>
              <a href="#" className="hover:text-white transition-colors">Cerebral Hub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
