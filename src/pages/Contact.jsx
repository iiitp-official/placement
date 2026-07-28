import React from 'react';

const ContactCard = ({ title, name, role, phone, email, type }) => {
  const getBgColor = () => {
    switch (type) {
      case 'faculty': return 'bg-blue-50 border-blue-200';
      case 'student': return 'bg-red-50 border-red-200';
      default: return 'bg-surface border-gray-200';
    }
  };

  return (
    <div className={`p-6 rounded-xl shadow-sm border hover:shadow-md transition transform hover:-translate-y-1 ${getBgColor()}`}>
      <h4 className="text-xl font-bold font-serif text-primary mb-4">{title}</h4>
      <div className="space-y-3 text-text">
        <p className="font-semibold text-lg">{name}</p>
        {role && <p className="text-gray-500">{role}</p>}
        {phone && (
          <p className="flex items-center gap-3">
            <span className="text-accent w-5"><i className="fas fa-phone-alt"></i></span>
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-primary transition">{phone}</a>
          </p>
        )}
        {email && (
          <p className="flex items-center gap-3">
            <span className="text-accent w-5"><i className="fas fa-envelope"></i></span>
            <a href={`mailto:${email}`} className="hover:text-primary transition">{email}</a>
          </p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <main className="bg-bg min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-serif text-primary mb-4">CDCRC Committee</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-red via-accent to-primary mx-auto rounded-full mb-6"></div>
          <h2 className="text-2xl font-semibold text-text">Career Development And Corporate Relation Centre</h2>
        </div>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <ContactCard 
              title="Training And Placement Officer"
              name="Mr. Kedar Bhogshetti"
              phone="+91 93264 79440"
              email="placements@iiitp.ac.in"
              type="default"
            />
            
            <ContactCard 
              title="Faculty Incharge"
              name="Dr. Kaptan Singh"
              phone="+91 98265 24212"
              email="kaptansingh@iiitp.ac.in"
              type="faculty"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold font-serif text-primary mb-6 border-b border-gray-300 pb-2">Student Coordinators</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ContactCard 
                title="Student Coordinator"
                name="Ashyssh Gajaali"
                role="B.Tech (CSE)"
                phone="+91 63029 83125"
                type="student"
              />
              {/* Add more student coordinators here if needed in the future */}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Contact;
