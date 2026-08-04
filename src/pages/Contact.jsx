import React from "react";
import PageHeader from "../components/shared/PageHeader";

const ContactCard = ({ title, name, role, phone, email, type }) => {
  const getBgColor = () => {
    switch (type) {
      case "faculty":
        return "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800";
      case "student":
        return "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800";
      default:
        return "bg-surface dark:bg-surface-dark border-gray-200 dark:border-gray-800";
    }
  };

  return (
    <div
      className={`p-6 rounded-xl shadow-sm border hover:shadow-md transition transform hover:-translate-y-1 ${getBgColor()}`}
    >
      <h4 className="text-xl font-bold font-serif text-primary dark:text-white mb-4">
        {title}
      </h4>
      <div className="space-y-3 text-text dark:text-gray-200">
        <p className="font-semibold text-lg text-gray-900 dark:text-white">
          {name}
        </p>
        {role && <p className="text-gray-500 dark:text-gray-300">{role}</p>}
        {phone && (
          <p className="flex items-center gap-3">
            <span className="text-accent w-5">
              <i className="fas fa-phone-alt"></i>
            </span>
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-blue-300 transition"
            >
              {phone}
            </a>
          </p>
        )}
        {email && (
          <p className="flex items-center gap-3">
            <span className="text-accent w-5">
              <i className="fas fa-envelope"></i>
            </span>
            <a
              href={`mailto:${email}`}
              className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-blue-300 transition"
            >
              {email}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="CDCRC Committee"
        subtitle="Career Development And Corporate Relation Centre"
      />
      <div className="bg-bg dark:bg-bg-dark bg-grid-pattern min-h-screen py-12 transition-colors duration-200">
        <div className="container mx-auto px-4 max-w-4xl">
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
              <h3 className="text-2xl font-bold font-serif text-primary dark:text-white mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">
                Student Coordinators
              </h3>
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
      </div>
    </main>
  );
};

export default Contact;
