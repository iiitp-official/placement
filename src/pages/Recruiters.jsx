import React, { useState } from "react";
import PageHeader from "../components/shared/PageHeader";
import { CompanyLogo } from "../components/shared/CompanyLogo";

const LOGO_EXTENSIONS = ["webp", "png", "svg", "jpg", "jpeg"];

const normalizeRecruiterName = (name) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const recruiterLogoAliases = {
  "citi-bank": "citi",
  "intel-india-ltd": "intel",
  "lt-infotech": "ltinfotech",
  "l-and-t-infotech": "ltinfotech",
  "samsung-r-and-d": "samsung-rd",
};

const getLogoCandidates = (name) => {
  const normalized = normalizeRecruiterName(name);
  const alias = recruiterLogoAliases[normalized];
  const slugs = alias ? [alias, normalized] : [normalized];

  return slugs.flatMap((slug) =>
    LOGO_EXTENSIONS.map((ext) => `/images/recruiters/${slug}.${ext}`),
  );
};

function RecruiterLogo({ name }) {
  const candidates = React.useMemo(() => getLogoCandidates(name), [name]);
  const [candidateIndex, setCandidateIndex] = React.useState(0);

  React.useEffect(() => {
    setCandidateIndex(0);
  }, [name]);

  const logoSrc = candidates[candidateIndex];

  return (
    <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0 overflow-hidden" aria-hidden="true">
      {logoSrc ? (
        <img
          src={logoSrc}
          alt={`${name} logo`}
          className="w-full h-full object-contain p-1"
          loading="lazy"
          onError={() => setCandidateIndex((index) => index + 1)}
        />
      ) : (
        <CompanyLogo
          name={name}
          className="w-full h-full max-h-9 max-w-[34px] object-contain text-gray-800 dark:text-gray-200"
        />
      )}
    </div>
  );
}
const Recruiters = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const recruitersList = [    // Keep the Home carousel's complete logo-supported recruiter set here too.
    "Google", "Microsoft", "Amazon", "Qualcomm", "NVIDIA", "Flipkart",
    "Deloitte", "Accenture", "Samsung R&D", "Goldman Sachs", "Cisco",
    "Intel", "IBM", "Siemens", "Infosys",  "Capgemini",
    "Abacus Insights",
    "Mantra Softech India Pvt. Ltd.",
    "Accenture",
    "MAQ Software",
    "Adani Group",
    "Marvell Semiconductors",
    "Adobe",
    "MathWorks",
    "Airtel",
    "Meesho",
    "Aistrike",
    "Microsoft",
    "Alphawave Semi",
    "Mihup",
    "Altair",
    "Mindstix Labs",
    "Amazon",
    "Mitsogo Technologies",
    "Amber",
    "Msmex",
    "Apmosys Technologies",
    "Multicoreware",
    "Atlas Consolidate Ltd",
    "MuSigma",
    "Autodesk",
    "Nagarro Software",
    "Axtria",
    "National Instruments",
    "Bajaj Broking",
    "Next Education",
    "Bajaj Finserv",
    "Nomura",
    "Bosch Global Software",
    "NTT Data",
    "Capgemini",
    "NVIDIA",
    "Citi Bank",
    "Onsurity",
    "Cognizant",
    "PayPal",
    "Commvault",
    "Paytm Money",
    "Dell Technologies",
    "Reliance Jio",
    "Deloitte",
    "Renault Nissan",
    "Flipkart",
    "ServiceNow",
    "Google",
    "IBM",
    "ZS Associates",
    "Aza Fashions",
    "Behr-Hella Thermocontrols",
    "Centalon",
    "CGI",
    "Cimpress",
    "ClearFeed",
    "Comscore",
    "Contlo",
    "CRED",
    "Data Insights",
    "Data-Axle",
    "Datawrkz",
    "Eagle Eye Networks",
    "ElasticRun",
    "Electra EV",
    "Emerson",
    "Emoha",
    "FinIQ",
    "FIS Global",
    "Fischer Jordan",
    "Futures First",
    "GE Digital",
    "GE Vernova",
    "Gocomet",
    "Gojek",
    "Groww",
    "HashedIn",
    "Hiwipay",
    "HSBC",
    "HyperVerge",
    "Incerff",
    "IndiaMART",
    "InfoEdge",
    "Infosys",
    "Intel India Ltd.",
    "Intuit",
    "ION Group",
    "JM Financials Ltd",
    "JTP International",
    "Juspay",
    "Kiran Gems",
    "Kone",
    "KPIT",
    "L&T Infotech",
    "Lentra",
    "LinkedIn",
    "Loginext",
    "Lokal App",
    "Lubrizol",
    "Lumber",
    "Mahindra & Mahindra",
    "Newt Global LLC",
    "NXP Semiconductors",
    "Nykaa",
    "O9 Solutions",
    "Parallel Wireless",
    "Persistent Systems",
    "Philips",
    "Practo",
    "PubMatic",
    "Purplle",
    "Rakuten",
    "Robert Bosch",
    "rtCamp",
    "Samsung R&D",
    "Samsung SDS",
    "Scaler",
    "Searce",
    "Siemens",
    "Siemens DISW",
    "Slick",
    "Smallcase",
    "Snowflake",
    "SpringML",
    "Suzlon",
    "Syngenta",
    "Tarana Wireless",
    "Techolution",
    "Tenla Platform",
    "TESCO",
    "Texas Instruments",
    "Tracelink",
    "Triology Innovations",
    "UBS",
    "UKG",
    "UpGrad",
    "Valuefy",
    "Vassar Labs IT Solutions",
    "Voltas",
    "Walmart",
    "WebMD",
    "Yugabyte",
    "Zaggle",
    "Zenduty",
    "Zensar",
    "Zino",
    "ZoomRx",
    "Zscaler",
    "Zuper",
  ];

  // Remove duplicates and sort alphabetically
  const uniqueRecruiters = [...new Set(recruitersList)].sort((a, b) =>
    a.localeCompare(b),
  );

  const filteredRecruiters = uniqueRecruiters.filter((recruiter) =>
    recruiter.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main className="min-h-screen">
      <PageHeader
        title="Our Esteemed Recruiters"
        subtitle="Our students are placed across leading global organizations spanning technology, finance, consulting, and core engineering."
      />
      <div className="bg-bg dark:bg-bg-dark bg-grid-pattern min-h-screen py-12 transition-colors duration-200">
        <section className="container mx-auto px-4">
          {/* Search */}
          <div className="max-w-xl mx-auto mb-12 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input
              type="text"
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition text-gray-900 dark:text-gray-100 placeholder:text-gray-500 bg-white dark:bg-surface-dark text-lg"
              placeholder="Search recruiter..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Recruiters Grid */}
          <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
            {filteredRecruiters.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredRecruiters.map((recruiter) => (
                  <div
                    key={recruiter}
                    className="bg-surface dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-4 rounded-lg text-text dark:text-gray-100 font-medium hover:bg-accent hover:border-accent hover:text-white transition-colors duration-300 flex items-center gap-3 min-h-[80px] shadow-sm hover:shadow"
                  >
                    <RecruiterLogo name={recruiter} />
                    <span className="text-left leading-tight">{recruiter}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <i className="fas fa-box-open text-4xl mb-4 text-gray-400"></i>
                <p className="text-lg">
                  No recruiters found matching "{searchTerm}"
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Recruiters;
