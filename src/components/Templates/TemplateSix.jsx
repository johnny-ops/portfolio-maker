import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, ExternalLink } from 'lucide-react';

// Bold Typography Template
const TemplateSix = ({ data }) => {
  const { personal, skills, projects, experience, education } = data;
  const themeColor = data.settings?.themeColor || '#667eea';

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Hero */}
      <section className="mb-20">
        <div className="flex items-start gap-8 mb-8">
          {personal.profileImage && (
            <img
              src={personal.profileImage}
              alt={personal.fullName}
              className="w-32 h-32 rounded-none object-cover border-4 border-white"
            />
          )}
          <div className="flex-1">
            <h1 className="text-7xl font-black mb-4 leading-none" style={{ color: themeColor }}>
              {personal.fullName || 'YOUR NAME'}
            </h1>
            <p className="text-3xl font-bold text-white/80 mb-6">
              {personal.title || 'YOUR TITLE'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          {personal.location && (
            <div className="border-l-4 pl-4" style={{ borderColor: themeColor }}>
              <p className="text-white/60 text-xs mb-1">LOCATION</p>
              <p className="font-bold">{personal.location}</p>
            </div>
          )}
          {personal.email && (
            <div className="border-l-4 pl-4" style={{ borderColor: themeColor }}>
              <p className="text-white/60 text-xs mb-1">EMAIL</p>
              <p className="font-bold">{personal.email}</p>
            </div>
          )}
          {personal.phone && (
            <div className="border-l-4 pl-4" style={{ borderColor: themeColor }}>
              <p className="text-white/60 text-xs mb-1">PHONE</p>
              <p className="font-bold">{personal.phone}</p>
            </div>
          )}
        </div>

        <div className="flex gap-6 mt-8">
          {personal.socialLinks.github && <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 transition-opacity"><Github size={28} /></a>}
          {personal.socialLinks.linkedin && <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 transition-opacity"><Linkedin size={28} /></a>}
          {personal.socialLinks.portfolio && <a href={personal.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 transition-opacity"><Globe size={28} /></a>}
        </div>
      </section>

      {/* About */}
      {personal.bio && (
        <section className="mb-20">
          <h2 className="text-5xl font-black mb-8" style={{ color: themeColor }}>ABOUT</h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-4xl">{personal.bio}</p>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-20">
          <h2 className="text-5xl font-black mb-8" style={{ color: themeColor }}>SKILLS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="border-2 border-white p-6 hover:bg-white hover:text-black transition-all">
                <p className="text-2xl font-black mb-2">{skill.name}</p>
                <p className="text-sm opacity-70">{skill.level}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-20">
          <h2 className="text-5xl font-black mb-8" style={{ color: themeColor }}>PROJECTS</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="border-t-4 pt-8" style={{ borderColor: themeColor }}>
                {project.image && <img src={project.image} alt={project.title} className="w-full h-80 object-cover mb-6" />}
                <h3 className="text-4xl font-black mb-4">{project.title}</h3>
                <p className="text-lg text-white/80 mb-4 leading-relaxed">{project.description}</p>
                {project.technologies && (
                  <p className="text-sm text-white/60 mb-4 uppercase tracking-wider">
                    {project.technologies}
                  </p>
                )}
                <div className="flex gap-6">
                  {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white border-b-2 hover:opacity-70 flex items-center gap-2 font-bold" style={{ borderColor: themeColor }}><Github size={18} />VIEW CODE</a>}
                  {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-white border-b-2 hover:opacity-70 flex items-center gap-2 font-bold" style={{ borderColor: themeColor }}><ExternalLink size={18} />LIVE DEMO</a>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-20">
          <h2 className="text-5xl font-black mb-8" style={{ color: themeColor }}>EXPERIENCE</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-4 pl-8" style={{ borderColor: themeColor }}>
                <h3 className="text-2xl font-black text-white">{exp.jobTitle}</h3>
                <p className="text-lg text-white/80 mb-2">{exp.company}</p>
                <p className="text-sm text-white/60 mb-4">{exp.duration}</p>
                <p className="text-white/80 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-20">
          <h2 className="text-5xl font-black mb-8" style={{ color: themeColor }}>EDUCATION</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 pl-8" style={{ borderColor: themeColor }}>
                <h3 className="text-2xl font-black text-white">{edu.degree}</h3>
                <p className="text-lg text-white/80">{edu.school}</p>
                <p className="text-sm text-white/60">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default TemplateFive;
