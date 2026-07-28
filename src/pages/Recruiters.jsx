import React, { useState } from 'react';

const Recruiters = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const recruitersList = [
    "Abacus Insights", "Mantra Softech India Pvt. Ltd.", "Accenture", "MAQ Software",
    "Adani Group", "Marvell Semiconductors", "Adobe", "MathWorks",
    "Airtel", "Meesho", "Aistrike", "Microsoft",
    "Alphawave Semi", "Mihup", "Altair", "Mindstix Labs",
    "Amazon", "Mitsogo Technologies", "Amber", "Msmex",
    "Apmosys Technologies", "Multicoreware", "Atlas Consolidate Ltd", "MuSigma",
    "Autodesk", "Nagarro Software", "Axtria", "National Instruments",
    "Bajaj Broking", "Next Education", "Bajaj Finserv", "Nomura",
    "Bosch Global Software", "NTT Data", "Capgemini", "NVIDIA",
    "Citi Bank", "Onsurity", "Cognizant", "PayPal",
    "Commvault", "Paytm Money", "Dell Technologies", "Reliance Jio",
    "Deloitte", "Renault Nissan", "Flipkart", "ServiceNow",
    "Google", "TCS", "IBM", "ZS Associates",
    "Aza Fashions", "Behr-Hella Thermocontrols", "Centalon", "CGI", "Cimpress",
    "ClearFeed", "Comscore", "Contlo", "CRED", "Data Insights", "Data-Axle", "Datawrkz",
    "Eagle Eye Networks", "ElasticRun", "Electra EV", "Emerson", "Emoha", "FinIQ", "FIS Global", "Fischer Jordan",
    "Futures First", "GE Digital", "GE Vernova", "Gocomet", "Gojek",
    "Groww", "HashedIn", "Hiwipay", "HSBC", "HyperVerge",
    "Incerff", "IndiaMART", "InfoEdge", "Infosys", "Intel India Ltd.", "Intuit", "ION Group", "JM Financials Ltd", "JTP International", "Juspay",
    "Kiran Gems", "Kone", "KPIT", "L&T Infotech", "Lentra", "LinkedIn", "Loginext", "Lokal App", "Lubrizol", "Lumber",
    "Mahindra & Mahindra", "Newt Global LLC", "NXP Semiconductors", "Nykaa", "O9 Solutions",
    "Parallel Wireless", "Persistent Systems", "Philips", "Practo", "PubMatic", "Purplle", "Rakuten",
    "Robert Bosch", "rtCamp", "Samsung R&D", "Samsung SDS", "Scaler", "Searce",
    "Siemens", "Siemens DISW", "Slick", "Smallcase", "Snowflake", "SpringML", "Suzlon", "Syngenta", "Tarana Wireless", "Tata Technologies",
    "Techolution", "Tenla Platform", "TESCO", "Texas Instruments", "Tracelink", "Triology Innovations", "UBS", "UKG", "UpGrad", "Valuefy", "Vassar Labs IT Solutions", "Voltas", "Walmart", "WebMD", "Yugabyte", "Zaggle", "Zenduty", "Zensar", "Zino", "ZoomRx",
    "Zscaler", "Zuper"
  ];

  // Remove duplicates and sort alphabetically
  const uniqueRecruiters = [...new Set(recruitersList)].sort((a, b) => a.localeCompare(b));

  const filteredRecruiters = uniqueRecruiters.filter((recruiter) =>
    recruiter.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-bg min-h-screen py-12">
      <section className="container mx-auto px-4">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold font-serif text-primary mb-4">Our Esteemed Recruiters</h1>
          <p className="text-text max-w-2xl mx-auto text-lg">
            Our students are placed across leading global organizations spanning technology, finance, consulting, and core engineering.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-12 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i className="fas fa-search text-gray-400"></i>
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition text-text bg-white text-lg"
            placeholder="Search recruiter..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Recruiters Grid */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          {filteredRecruiters.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredRecruiters.map((recruiter) => (
                <div 
                  key={recruiter} 
                  className="bg-surface border border-gray-200 p-4 rounded-lg text-center text-text font-medium hover:bg-accent hover:border-accent hover:text-white transition-colors duration-300 flex items-center justify-center min-h-[80px] shadow-sm hover:shadow"
                >
                  {recruiter}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <i className="fas fa-box-open text-4xl mb-4 text-gray-400"></i>
              <p className="text-lg">No recruiters found matching "{searchTerm}"</p>
            </div>
          )}
        </div>

      </section>
    </main>
  );
};

export default Recruiters;
