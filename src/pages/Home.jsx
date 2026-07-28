import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-surface py-16 md:py-24 relative overflow-hidden border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 z-10 text-center md:text-left mb-10 md:mb-0">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6 animate-fade-in-up">
                Career Development & Corporate Relation Centre (CDCRC)
              </h1>
              <p className="text-lg text-text mb-8 max-w-lg">
                Empowering the students of IIIT Pune to reach their full potential and connecting them with top-tier global organizations.
              </p>
              <Link to="/placement" className="inline-block bg-accent hover:bg-primary text-white font-semibold py-3 px-8 rounded shadow-lg transition transform hover:-translate-y-1">
                View Placement Stats
              </Link>
            </div>
            <div className="md:w-1/2 relative z-10 flex justify-center">
              <img src="/assets/img/hero/16.png" alt="Hero Illustration" className="max-w-full h-auto drop-shadow-2xl animate-bounce-slow" style={{ animationDuration: '3s' }} />
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-100 opacity-30 blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-200 opacity-30 blur-3xl z-0"></div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="bg-white p-8 rounded-xl shadow border border-gray-200 hover:shadow-md transition">
              <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-accent pb-3 inline-block font-serif">About Us</h2>
              <div className="space-y-4 text-text leading-relaxed text-lg text-justify">
                <p>
                  Indian Institute of Information Technology (IIIT), Pune, is well known for its academic excellence and is often considered the 'first stop' for many organizations recruiting undergraduate and post-graduate engineering students. We truly appreciate the faith reposed on us by our recruiters, and we look forward to further strengthening the association in all areas of mutual interest. At the same time, we continue to endeavour to impart highest quality education to our students and, in doing so, create a strong pipeline of highly productive, industry-ready engineers.
                </p>
                <p>
                  The Cell provides necessary guidance to students for campus placements and career planning. Every year, the Cell invites a good number of organizations for campus recruitment and internships.
                </p>
                <p className="font-semibold text-primary">
                  We extend a warm invitation to all potential organisations to participate in the campus recruitment process at IIIT, Pune.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl">
                    <i className="fas fa-eye"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-primary font-serif">Our Vision</h3>
                </div>
                <p className="text-text leading-relaxed">
                  To be a centre of eminence, globally recognized for its academic excellence through research and innovation, industry engagement and inculcating professional culture.
                </p>
              </div>

              <div className="bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-primary font-serif">Our Mission</h3>
                </div>
                <ul className="space-y-3 text-text leading-relaxed list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">i.</span>
                    <span>To Nurture industry practices with focus on development, cultivating skills and innovation that builds problem-solving skills.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">ii.</span>
                    <span>To associate with academic institutes and research centres for collaborative engagement and industries for the development of technology.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">iii.</span>
                    <span>To foster research that engages technology and be the preferred institute for knowledge seekers.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
