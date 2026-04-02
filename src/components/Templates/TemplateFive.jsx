import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, ExternalLink } from 'lucide-react';

// Japanese Minimalist Template
const TemplateFive = ({ data }) => {
  const { personal, skills, projects, experience, education } = data;

  return (
    <div className="min-h-screen bg-stone-50 p-8 font-serif">
      {/* Hero - Vertical Layout */}
      <section className="text-center mb-16 border-b-2 border-stone-300 pb-12">
        {personal.profileImage && (
          <img
            src={personal.profileImage}
            alt={personal.fullName}
            className="w-24 h-24 rounded-sm mx-auto mb-6 object-cover border border-stone-300 grayscale hover:grayscale-0 transition-all"
          />
        )}
        <h1 className="text-5xl font-light mb-3 text-stone-900 tracking-wider">
          {personal.fullName || 'Your Name'}
        </h1>
        <p className="text-lg text-stone-600 mb-8 font-sans tracking-wide">
          {personal.title || 'Your Title'}
        </p>
        
        <div className="flex flex-col items-center gap-2 text-sm text-stone-600 mb-6">
          {personal.location && <span className="flex items-center gap-2"><MapPin size={14} />{personal.location}</span>}
          {personal.email && <span className="flex items-center gap-2"><Mail size={14} />{personal.email}</span>}
          {personal.phone && <span className="flex items-center gap-2"><Phone size={14} />{personal.phone}</span>}
        </div>

        <div className="flex justify-center gap-6">
          {personal.socialLinks.github && <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-stone-900 transition-colors"><Github size={18} /></a>}
          {personal.socialLinks.linkedin && <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-stone-900 transition-colors"><Linkedin size={18} /></a>}
          {personal.socialLinks.portfolio && <a href={personal.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-stone-900 transition-colors"><Globe size={18} /></a>}
        </div>
      </section>

      {/* About */}
      {personal.bio && (
        <section className="mb-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-light mb-6 text-stone-900 tracking-wider border-l-4 border-stone-900 pl-4">
            About
          </h2>
          <p className="text-stone-700 leading-loose text-justify">{personal.bio}</p>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-light mb-6 text-stone-900 tracking-wider border-l-4 border-stone-900 pl-4">
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="border border-stone-300 p-4 hover:bg-stone-100 transition-colors">
                <p className="font-medium text-stone-900">{skill.name}</p>
                <p className="text-xs text-stone-600 mt-1">{skill.level}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-light mb-6 text-stone-900 tracking-wider border-l-4 border-stone-900 pl-4">
            Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="border-b border-stone-200 pb-8 last:border-0">
                {project.image && <img src={project.image} alt={project.title} className="w-full h-64 object-cover mb-4 grayscale hover:grayscale-0 transition-all" />}
                <h3 className="text-xl font-medium mb-2 text-stone-900">{project.title}</h3>
                <p className="text-stone-700 mb-3 leading-relaxed">{project.description}</p>
                {project.technologies && (
                  <p className="text-xs text-stone-600 mb-3 tracking-wide">
                    {project.technologies}
                  </p>
                )}
                <div className="flex gap-4 text-sm">
                  {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-stone-900 hover:underline flex items-center gap-1"><Github size={14} />Code</a>}
                  {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-stone-900 hover:underline flex items-center gap-1"><ExternalLink size={14} />Demo</a>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-light mb-6 text-stone-900 tracking-wider border-l-4 border-stone-900 pl-4">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-stone-300 pl-6">
                <h3 className="text-lg font-medium text-stone-900">{exp.jobTitle}</h3>
                <p className="text-stone-700">{exp.company}</p>
                <p className="text-xs text-stone-500 mb-2">{exp.duration}</p>
                <p className="text-stone-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-light mb-6 text-stone-900 tracking-wider border-l-4 border-stone-900 pl-4">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-stone-300 pl-6">
                <h3 className="text-lg font-medium text-stone-900">{edu.degree}</h3>
                <p className="text-stone-700">{edu.school}</p>
                <p className="text-xs text-stone-500">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default TemplateFive;
