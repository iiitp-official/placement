import React from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { CompanyLogo } from "../components/shared/CompanyLogo";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  IndianRupee,
  Lightbulb,
  BarChart3,
  Briefcase,
  Handshake,
  FlaskConical,
  Laptop,
  Rocket,
  TrendingUp,
} from "lucide-react";
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
  "Capgemini",
];
const firstRow = companies.slice(0, 10),
  secondRow = companies.slice(10);
function CollaborationCard({ icon: Icon, title }) {
  return (
    <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-4 min-h-[96px] shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
      <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-gray-800 text-primary dark:text-blue-300 flex items-center justify-center mb-3">
        <Icon size={18} />
      </div>
      <h4 className="text-sm font-semibold text-primary dark:text-white">
        {title}
      </h4>
    </div>
  );
}
function RecruiterReason({ icon: Icon, title, children }) {
  return (
    <div className="h-full min-h-[165px] bg-white dark:bg-surface-dark rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-800 hover:-translate-y-1 hover:shadow-lg transition-all">
      <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-gray-800 text-primary dark:text-blue-300 flex items-center justify-center mb-4">
        <Icon size={20} />
      </div>
      <h3 className="text-sm font-bold text-primary dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-300">
        {children}
      </p>
    </div>
  );
}
function CompanyCard({ name }) {
  return (
    <div title={name} className="flex-shrink-0 w-44 h-20 bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-center px-5 py-4 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
      <CompanyLogo name={name} className="w-full h-full max-h-10 object-contain text-gray-800 dark:text-gray-200" />
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

function AnimatedCount({
  value,
  duration = 1200,
  decimals = 0,
  prefix = "",
  suffix = "",
}) {
  const [displayValue, setDisplayValue] = React.useState(0);
  const countRef = React.useRef(null);
  const isInView = useInView(countRef, { once: true, margin: "-40px" });

  React.useEffect(() => {
    if (!isInView) return;

    let frameId;
    const start = performance.now();
    const target = Number(value) || 0;

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(target * easedProgress);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [value, duration, isInView]);

  const formatted = displayValue.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={countRef}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [isRecruiterExpanded, setIsRecruiterExpanded] = React.useState(false);

  const keyHighlights = [
    {
      label: "Highest CTC",
      value: 45,
      prefix: "₹",
      suffix: " LPA",
      decimals: 0,
      icon: IndianRupee,
      iconClass:
        "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300",
    },
    {
      label: "Average CTC",
      value: 21.56,
      prefix: "₹",
      suffix: " LPA",
      decimals: 2,
      icon: BarChart3,
      iconClass:
        "bg-blue-100 text-accent dark:bg-blue-900/30 dark:text-blue-300",
    },
    {
      label: "Total Offer",
      value: 120,
      suffix: "+",
      decimals: 0,
      icon: Briefcase,
      iconClass:
        "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-300",
    },
    {
      label: "Placement Rate",
      value: 71.88,
      suffix: "%",
      decimals: 2,
      icon: TrendingUp,
      iconClass:
        "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300",
    },
  ];

  return (
    <main className="w-full flex-grow flex flex-col">
      <section className="relative min-h-[540px] md:min-h-[580px] flex items-center overflow-hidden bg-primary dark:bg-surface-dark">
        <img
          src="/images/slide_1.jpeg"
          alt="IIIT Pune campus"
          className="absolute inset-0 w-full h-full object-cover opacity-90 dark:opacity-[90]"
        />
        <div className="absolute inset-0 bg-primary/75 dark:bg-surface-dark/80" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_400px] gap-8 xl:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              className="max-w-3xl text-left text-white"
            >
              <p className="text-blue-200 text-xs md:text-sm uppercase tracking-[.24em] font-semibold mb-4">
                IIIT Pune Placement Cell
              </p>
              <h1 className="text-4xl md:text-5xl xl:text-[3.4rem] font-bold font-serif leading-[1.08] tracking-normal mb-6">
                Launch Your Career with IIIT Pune Placements
              </h1>
              <p className="text-base md:text-lg text-blue-50/90 leading-relaxed max-w-2xl mb-8 text-left">
                Connecting bright minds with leading industries. Explore opportunities, success stories, and placement statistics at the Indian Institute of Information Technology, Pune.
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
        </div>
      </section>
      <section className="order-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <AnimatedSection>
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary dark:text-white">
                A stronger start for every career
              </h2>
              <div className="w-16 h-1 bg-brand-red rounded-full mt-3" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.04}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {keyHighlights.map(({ label, value, icon: Icon, iconClass, prefix, suffix, decimals }) => (
              <div
                key={label}
                className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-surface-dark/95 p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${iconClass}`}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xl font-bold font-serif text-primary dark:text-white leading-none">
                      <AnimatedCount
                        value={value}
                        prefix={prefix}
                        suffix={suffix}
                        decimals={decimals}
                      />
                    </p>
                    <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                      {label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <AnimatedSection delay={0.08} className="md:col-span-2 h-full">
            <div className="h-full bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-md p-6 md:p-7 flex flex-col">
              <h3 className="text-2xl font-bold font-serif text-primary dark:text-white mb-3">
                Placement snapshots
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-6">
                From internships to full-time roles, our students carry a
                strong foundation of technical depth, curiosity, and
                professional readiness into every interaction with industry.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-md p-6 flex gap-4 items-center">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-accent flex items-center justify-center">
                    <Building2 size={23} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold font-serif text-primary dark:text-white">
                      75+
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Recruiters Participated (2025-26)
                    </p>
                  </div>
                </div>
                <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-md p-6 flex gap-4 items-center">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                    <TrendingUp size={23} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold font-serif text-primary dark:text-white">
                      Ongoing
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      2025-26 Recruitment Process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 auto-rows-fr gap-6">
            <AnimatedSection delay={0.16} className="h-full">
              <div className="h-full bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-md p-6 flex gap-4 items-center">
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
            <AnimatedSection delay={0.24} className="h-full">
              <div className="h-full bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-md p-6 flex gap-4 items-center">
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
      <section className="order-4 bg-surface dark:bg-surface-dark/70 py-14 md:py-20 overflow-hidden">
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
      <section className="order-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary dark:text-white mt-4">
              Strengthening Academia–Industry Collaboration
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mt-3">
              IIIT Pune collaborates with leading organizations to explore
              meaningful opportunities in research, internships, innovation, and
              campus placements.
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-center mb-9">
            <h3 className="text-xl md:text-2xl font-bold font-serif text-primary dark:text-white">
              Connecting Students with Global Industry
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-4">
              Through strategic collaborations with leading technology
              companies, research organizations, and industry partners, IIIT
              Pune provides students with practical exposure, mentorship,
              innovation opportunities, internships, and excellent career
              pathways.
            </p>
          </div>
        </AnimatedSection>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatedSection delay={0.1}>
            <CollaborationCard
              icon={GraduationCap}
              title="Industry Expert Sessions"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <CollaborationCard
              icon={Briefcase}
              title="Internships"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <CollaborationCard icon={Handshake} title="Campus Recruitment" />
          </AnimatedSection>
        </div>
      </section>
      <section className="order-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary dark:text-white mt-4">
              Why Recruit from IIIT Pune?
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm md:text-base mt-3">
              {isRecruiterExpanded ? (
                <div className="space-y-4">
                  <p className="leading-relaxed text-justify">
                    At IIIT Pune, we are committed to nurturing technology professionals who combine strong academic foundations with innovation, adaptability, and a problem-solving mindset. Admitted through a rigorous national selection process such as JOSAA and CCMT, our students represent some of the brightest young minds in the country. The institute's curriculum is designed to build deep disciplinary knowledge while fostering analytical thinking, creativity, and the ability to address complex real-world challenges. Through a strong emphasis on experiential learning, project-based learning, and hands-on engagement with emerging technologies, students develop the technical competence and practical skills sought by leading organizations.
                  </p>
                  <p className="leading-relaxed text-justify">
                    Beyond academics, IIIT Pune cultivates a culture of research, innovation, leadership, and professional excellence. Students actively participate in collaborative research projects, internships, technical competitions, hackathons, entrepreneurial initiatives, and industry-sponsored programmes that prepare them for dynamic professional environments. Regular interaction with industry experts and practitioners ensures exposure to current technologies, evolving business needs, and real-world applications. Coupled with strong communication skills, teamwork, ethical values, and a commitment to continuous learning, IIIT Pune graduates are equipped to contribute effectively from the very beginning and grow into future technology leaders, innovators, and change-makers.
                  </p>
                </div>
              ) : (
                <p
                  className="leading-relaxed"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  At IIIT Pune, we are committed to nurturing technology professionals who combine strong academic foundations with innovation, adaptability, and a problem-solving mindset. Admitted through a rigorous national selection process such as JOSAA and CCMT, our students represent some of the brightest young minds in the country. The institute's curriculum is designed to build deep disciplinary knowledge while fostering analytical thinking, creativity, and the ability to address complex real-world challenges. Through a strong emphasis on experiential learning, project-based learning, and hands-on engagement with emerging technologies, students develop the technical competence and practical skills sought by leading organizations.
                </p>
              )}
              <button
                type="button"
                onClick={() => setIsRecruiterExpanded((prev) => !prev)}
                className="inline-flex items-center text-sm font-semibold text-accent dark:text-blue-300 hover:text-accent-dark transition"
              >
                {isRecruiterExpanded ? 'View less' : 'View more'}
              </button>
            </div>
          </div>
        </AnimatedSection>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-5">
          <AnimatedSection delay={0.05} className="h-full">
            <RecruiterReason icon={GraduationCap} title="Academic Excellence">
              Rigorous curriculum designed to build strong engineering
              fundamentals.
            </RecruiterReason>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="h-full">
            <RecruiterReason icon={Laptop} title="Strong Coding Culture">
              Students actively participate in coding contests, hackathons, and
              open-source development.
            </RecruiterReason>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="h-full">
            <RecruiterReason icon={FlaskConical} title="Research & Innovation">
              Hands-on research projects with a strong focus on emerging
              technologies.
            </RecruiterReason>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="h-full">
            <RecruiterReason icon={Building2} title="Industry Collaboration">
              Continuous engagement with leading companies through internships,
              expert talks, and collaborative initiatives.
            </RecruiterReason>
          </AnimatedSection>
          <AnimatedSection delay={0.25} className="h-full">
            <RecruiterReason icon={Handshake} title="Professional Exposure">
              Students gain practical experience through internships, industrial
              visits, and live projects.
            </RecruiterReason>
          </AnimatedSection>
          <AnimatedSection delay={0.3} className="h-full">
            <RecruiterReason icon={Rocket} title="Future-Ready Graduates">
              Graduates equipped with technical expertise, communication skills,
              and leadership qualities.
            </RecruiterReason>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
