import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, GraduationCap, Lightbulb, Briefcase, Handshake, FlaskConical, Laptop, Rocket } from "lucide-react";
const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Qualcomm",
  "NVIDIA",
  "Flipkart",
  "Deloitte",
  "Accenture",
  "Samsung R&D",
  "Goldman Sachs",
  "Cisco",
  "Citi",
  "Intel",
  "IBM",
  "Siemens",
  "TCS",
  "Infosys",
  "Wipro",
  "VMware",
  "Capgemini",
];
const firstRow = companies.slice(0, 10),
  secondRow = companies.slice(10);
function CollaborationCard({ icon: Icon, title }) {
  return <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-4 min-h-[96px] shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"><div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-gray-800 text-primary dark:text-blue-300 flex items-center justify-center mb-3"><Icon size={18}/></div><h4 className="text-sm font-semibold text-primary dark:text-white">{title}</h4></div>;
}
function RecruiterReason({ icon: Icon, title, children }) {
  return <div className="bg-white dark:bg-surface-dark rounded-xl p-5 min-h-[165px] shadow-md border border-gray-100 dark:border-gray-800 hover:-translate-y-1 hover:shadow-lg transition-all"><div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-gray-800 text-primary dark:text-blue-300 flex items-center justify-center mb-4"><Icon size={20}/></div><h3 className="text-sm font-bold text-primary dark:text-white mb-3">{title}</h3><p className="text-xs leading-relaxed text-gray-600 dark:text-gray-300">{children}</p></div>;
}
function CompanyCard({ name }) {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  return (
    <div className="flex-shrink-0 w-44 h-20 bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-3 px-4 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
      <span className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 flex items-center justify-center text-xs font-bold">
        {initials}
      </span>
      <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-tight">
        {name}
      </span>
    </div>
  );
}
function AnimatedSection({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
export default function Home() {
  return (
    <main className="w-full flex-grow">
      <section className="relative min-h-[520px] md:min-h-[620px] flex items-center overflow-hidden bg-primary dark:bg-surface-dark">
        <img
          src="/images/slide_1.jpeg"
          alt="IIIT Pune campus"
          className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/35 dark:from-surface-dark dark:via-surface-dark/90 dark:to-surface-dark/55" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-3xl text-white"
          >
            <p className="text-blue-200 text-xs md:text-sm uppercase tracking-[.24em] font-semibold mb-4">
              Career Development &amp; Corporate Relation Centre
            </p>
            <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-6">
              Building bridges between talent and opportunity.
            </h1>
            <p className="text-base md:text-xl text-blue-50/90 leading-relaxed max-w-2xl mb-8">
              The IIIT Pune Placement Cell connects industry-ready students with
              organisations shaping the future of technology, research, and
              innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/placement"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold text-sm shadow-lg transition-all hover:-translate-y-0.5"
              >
                Explore Placement Statistics <ArrowRight size={17} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/70 hover:bg-white hover:text-primary text-white px-6 py-3 rounded-md font-bold text-sm transition-all"
              >
                Connect with the Cell
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <AnimatedSection>
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-accent dark:text-accent-dark text-xs font-semibold uppercase tracking-widest mb-1">
                Placement Cell
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary dark:text-white">
                A stronger start for every career
              </h2>
              <div className="w-16 h-1 bg-brand-red rounded-full mt-3" />
            </div>
            <Link
              to="/placement"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-accent dark:text-accent-dark hover:underline"
            >
              View placement data <ArrowRight size={15} />
            </Link>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedSection delay={0.08} className="md:col-span-2">
            <div className="h-full bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2 h-full">
                <div className="p-7 md:p-9">
                  <h3 className="text-2xl font-bold font-serif text-primary dark:text-white mb-4">
                    Placement snapshots
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    From internships to full-time roles, our students carry a
                    strong foundation of technical depth, curiosity, and
                    professional readiness into every interaction with industry.
                  </p>
                </div>
                <div className="bg-surface dark:bg-gray-900/60 p-7 md:p-9 flex flex-col justify-center gap-3">
                  <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Highest package
                    </span>
                    <strong className="text-xl text-primary dark:text-white">
                      54 LPA
                    </strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Average package
                    </span>
                    <strong className="text-xl text-accent dark:text-blue-300">
                      18 LPA
                    </strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Placement rate
                    </span>
                    <strong className="text-xl text-brand-red">95%</strong>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6">
            <AnimatedSection delay={0.16}>
              <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-md p-6 flex gap-4 items-center">
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-accent flex items-center justify-center">
                  <GraduationCap size={23} />
                </div>
                <div>
                  <p className="text-2xl font-bold font-serif text-primary dark:text-white">
                    Industry-ready
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Learning that translates into impact
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.24}>
              <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-md p-6 flex gap-4 items-center">
                <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-900/30 text-brand-red flex items-center justify-center">
                  <Building2 size={23} />
                </div>
                <div>
                  <p className="text-2xl font-bold font-serif text-primary dark:text-white">
                    Trusted network
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Connecting students with leading teams
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <section className="bg-surface dark:bg-surface-dark/70 py-14 md:py-20 overflow-hidden">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <p className="text-accent dark:text-accent-dark text-xs font-semibold uppercase tracking-widest mb-1">
              Our Recruiters
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary dark:text-white">
              Our students at leading companies
            </h2>
            <div className="w-16 h-1 bg-brand-red rounded-full mt-3" />
          </div>
        </AnimatedSection>
        <div className="relative space-y-4">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-surface dark:from-surface-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-surface dark:from-surface-dark to-transparent z-10 pointer-events-none" />
          <div className="flex gap-4 w-max home-recruiter-row home-recruiter-row-left">
            {[...firstRow, ...firstRow].map((name, index) => (
              <CompanyCard key={`one-${index}`} name={name} />
            ))}
          </div>
          <div className="flex gap-4 w-max home-recruiter-row home-recruiter-row-right">
            {[...secondRow, ...secondRow].map((name, index) => (
              <CompanyCard key={`two-${index}`} name={name} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/recruiters"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent dark:text-accent-dark hover:underline"
          >
            View all recruiters <ArrowRight size={15} />
          </Link>
        </div>
        <style>{`@keyframes home-recruiter-left{from{transform:translateX(0)}to{transform:translateX(-50%)}}@keyframes home-recruiter-right{from{transform:translateX(-50%)}to{transform:translateX(0)}}.home-recruiter-row{animation-duration:38s;animation-timing-function:linear;animation-iteration-count:infinite}.home-recruiter-row-left{animation-name:home-recruiter-left}.home-recruiter-row-right{animation-name:home-recruiter-right}.home-recruiter-row:hover{animation-play-state:paused}@media(prefers-reduced-motion:reduce){.home-recruiter-row{animation:none}}`}</style>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-10"><span className="inline-flex rounded-full bg-blue-50 dark:bg-blue-900/30 text-accent dark:text-blue-300 px-3 py-1 text-[11px] font-semibold">Industry Connect</span><h2 className="text-3xl md:text-4xl font-bold font-serif text-primary dark:text-white mt-4">Strengthening Academia–Industry Collaboration</h2><p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mt-3">IIIT Pune collaborates with leading organizations to create meaningful opportunities in research, internships, innovation, and campus placements.</p></div>
          <div className="max-w-3xl mx-auto text-center mb-9"><h3 className="text-xl md:text-2xl font-bold font-serif text-primary dark:text-white">Connecting Students with Global Industry</h3><p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-4">Through strategic collaborations with leading technology companies, research organizations, and industry partners, IIIT Pune provides students with practical exposure, mentorship, innovation opportunities, internships, and excellent career pathways.</p></div>
        </AnimatedSection>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><AnimatedSection delay={.05}><CollaborationCard icon={Building2} title="Corporate Training"/></AnimatedSection><AnimatedSection delay={.1}><CollaborationCard icon={GraduationCap} title="Industry Expert Sessions"/></AnimatedSection><AnimatedSection delay={.15}><CollaborationCard icon={Lightbulb} title="Research & Innovation"/></AnimatedSection><AnimatedSection delay={.2}><CollaborationCard icon={Briefcase} title="Internships & Live Projects"/></AnimatedSection><AnimatedSection delay={.25}><CollaborationCard icon={Handshake} title="Campus Recruitment"/></AnimatedSection></div>
        <div className="flex justify-center mt-9"><Link to="/recruiters" className="inline-flex items-center gap-2 rounded-md bg-primary hover:bg-blue-800 text-white px-5 py-2.5 text-xs font-bold transition-colors">View Our Recruiters <ArrowRight size={15}/></Link></div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <AnimatedSection><div className="text-center max-w-3xl mx-auto mb-10"><span className="inline-flex rounded-full bg-blue-50 dark:bg-blue-900/30 text-accent dark:text-blue-300 px-3 py-1 text-[11px] font-semibold">For Recruiters</span><h2 className="text-3xl md:text-4xl font-bold font-serif text-primary dark:text-white mt-4">Why Recruit from IIIT Pune?</h2><p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mt-3">Our students combine academic excellence, innovation, and industry exposure to deliver exceptional value from day one.</p></div></AnimatedSection>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"><AnimatedSection delay={.05}><RecruiterReason icon={GraduationCap} title="Academic Excellence">Rigorous curriculum designed to build strong engineering fundamentals.</RecruiterReason></AnimatedSection><AnimatedSection delay={.1}><RecruiterReason icon={Laptop} title="Strong Coding Culture">Students actively participate in coding contests, hackathons, and open-source development.</RecruiterReason></AnimatedSection><AnimatedSection delay={.15}><RecruiterReason icon={FlaskConical} title="Research & Innovation">Hands-on research projects with a strong focus on emerging technologies.</RecruiterReason></AnimatedSection><AnimatedSection delay={.2}><RecruiterReason icon={Building2} title="Industry Collaboration">Continuous engagement with leading companies through internships, expert talks, and collaborative initiatives.</RecruiterReason></AnimatedSection><AnimatedSection delay={.25}><RecruiterReason icon={Handshake} title="Professional Exposure">Students gain practical experience through internships, industrial visits, and live projects.</RecruiterReason></AnimatedSection><AnimatedSection delay={.3}><RecruiterReason icon={Rocket} title="Future-Ready Graduates">Graduates equipped with technical expertise, communication skills, and leadership qualities.</RecruiterReason></AnimatedSection></div>
      </section>
    </main>
  );
}
