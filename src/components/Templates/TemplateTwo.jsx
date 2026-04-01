import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, ExternalLink } from 'lucide-react';

// Dark Mode Template
const TemplateTwo = ({ data }) => {
  const { personal, skills, projects, experience, education } = data;

  return (
    <div className="bg-gray-900 text-white p-8 min-h-screen">
      {/* Hero Section */}
      <section className="text-center mb-12 bg-gradient-to-r from-purple-900 to-indigo-900 p-8 rounded-lg">
        {personal.profileImage && (
          <img
            src={personal.profileImage}
            alt={personal.fullName}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-purple-500"
          />
        )}
        <h1 className="text-4xl font-bold mb-2">{personal.fullName || 'Your Name'}</h1>
        <p className="text-xl text-purple-200 mb-4">{personal.title || 'Your Title'}</p>
        
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-purple-200">
          {personal.location && (
            <span className="flex items-center gap-1">
              <MapPin size={16} />
              {personal.location}
            </span>
          )}
          {personal.email && (
            <span className="flex items-center gap-1">
              <Mail size={16} />
              {personal.email}
            </span>
          )}
          {personal.phone && (
            <span className="flex items-center gap-1">
              <Phone size={16} />
              {personal.phone}
            </span>
          )}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-4">
          {personal.socialLinks.github && (
            <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white">
              <Github size={20} />
            </a>
          )}
          {personal.socialLinks.linkedin && (
            <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white">
              <Linkedin size={20} />
            </a>
          )}
          {personal.socialLinks.portfolio && (
            <a href={personal.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white">
              <Globe size={20} />
            </a>
          )}
        </div>
      </section>

      {/* About Section */}
      {personal.bio && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">About Me</h2>
          <p className="text-gray-300 leading-relaxed">{personal.bio}</p>
        </section>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 p-3 rounded-lg border border-purple-500/30 hover:border-purple-500 transition-colors">
                <p className="font-semibold text-white">{skill.name}</p>
                <p className="text-sm text-purple-300">{skill.level}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-colors">
                {project.image && (
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                )}
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-3">{project.description}</p>
                {project.technologies && (
                  <p className="text-sm text-gray-400 mb-3">
                    <span className="font-semibold text-purple-400">Tech:</span> {project.technologies}
                  </p>
                )}
                <div className="flex gap-3">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm">
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience Section */}
      {experience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-4 bg-gray-800/50 p-4 rounded-r-lg">
                <h3 className="text-xl font-semibold text-white">{exp.jobTitle}</h3>
                <p className="text-purple-300 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <p className="text-purple-300">{edu.school}</p>
                <p className="text-sm text-gray-400">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default TemplateTwo;
