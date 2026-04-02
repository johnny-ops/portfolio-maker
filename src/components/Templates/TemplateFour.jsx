import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, ExternalLink } from 'lucide-react';

// Glassmorphism Template
const TemplateFour = ({ data }) => {
  const { personal, skills, projects, experience, education } = data;
  const themeColor = data.settings?.themeColor || '#667eea';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-8">
      {/* Hero Section */}
      <section className="backdrop-blur-lg bg-white/30 rounded-3xl p-8 mb-8 shadow-2xl border border-white/50">
        <div className="text-center">
          {personal.profileImage && (
            <img
              src={personal.profileImage}
              alt={personal.fullName}
              className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-xl"
            />
          )}
          <h1 className="text-5xl font-bold mb-3 text-white drop-shadow-lg">
            {personal.fullName || 'Your Name'}
          </h1>
          <p className="text-2xl text-white/90 mb-6">{personal.title || 'Your Title'}</p>
          
          <div className="flex flex-wrap justify-center gap-4 text-white/90 mb-6">
            {personal.location && <span className="flex items-center gap-2 backdrop-blur-md bg-white/20 px-4 py-2 rounded-full"><MapPin size={16} />{personal.location}</span>}
            {personal.email && <span className="flex items-center gap-2 backdrop-blur-md bg-white/20 px-4 py-2 rounded-full"><Mail size={16} />{personal.email}</span>}
            {personal.phone && <span className="flex items-center gap-2 backdrop-blur-md bg-white/20 px-4 py-2 rounded-full"><Phone size={16} />{personal.phone}</span>}
          </div>

          <div className="flex justify-center gap-4">
            {personal.socialLinks.github && <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer" className="backdrop-blur-md bg-white/30 p-3 rounded-full hover:bg-white/50 transition-all"><Github size={24} className="text-white" /></a>}
            {personal.socialLinks.linkedin && <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="backdrop-blur-md bg-white/30 p-3 rounded-full hover:bg-white/50 transition-all"><Linkedin size={24} className="text-white" /></a>}
            {personal.socialLinks.portfolio && <a href={personal.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="backdrop-blur-md bg-white/30 p-3 rounded-full hover:bg-white/50 transition-all"><Globe size={24} className="text-white" /></a>}
          </div>
        </div>
      </section>

      {/* About */}
      {personal.bio && (
        <section className="backdrop-blur-lg bg-white/30 rounded-3xl p-8 mb-8 shadow-2xl border border-white/50">
          <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-white/90 leading-relaxed text-lg">{personal.bio}</p>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="backdrop-blur-lg bg-white/30 rounded-3xl p-8 mb-8 shadow-2xl border border-white/50">
          <h2 className="text-3xl font-bold mb-6 text-white">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="backdrop-blur-md bg-white/40 p-4 rounded-2xl border border-white/50 hover:bg-white/60 transition-all">
                <p className="font-bold text-white">{skill.name}</p>
                <p className="text-sm text-white/80">{skill.level}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="backdrop-blur-lg bg-white/30 rounded-3xl p-8 mb-8 shadow-2xl border border-white/50">
          <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div key={index} className="backdrop-blur-md bg-white/40 rounded-2xl p-6 border border-white/50 hover:bg-white/60 transition-all">
                {project.image && <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-xl mb-4" />}
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-white/90 mb-4">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.split(',').map((tech, i) => (
                      <span key={i} className="bg-white/50 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{tech.trim()}</span>
                    ))}
                  </div>
                )}
                <div className="flex gap-3">
                  {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="backdrop-blur-md bg-white/50 text-gray-800 px-4 py-2 rounded-lg hover:bg-white/70 flex items-center gap-2 font-medium"><Github size={16} />Code</a>}
                  {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="backdrop-blur-md bg-white/50 text-gray-800 px-4 py-2 rounded-lg hover:bg-white/70 flex items-center gap-2 font-medium"><ExternalLink size={16} />Demo</a>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="backdrop-blur-lg bg-white/30 rounded-3xl p-8 mb-8 shadow-2xl border border-white/50">
          <h2 className="text-3xl font-bold mb-6 text-white">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="backdrop-blur-md bg-white/40 p-6 rounded-2xl border border-white/50">
                <h3 className="text-xl font-bold text-white">{exp.jobTitle}</h3>
                <p className="text-white/90 font-medium">{exp.company}</p>
                <p className="text-sm text-white/70 mb-3">{exp.duration}</p>
                <p className="text-white/90">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="backdrop-blur-lg bg-white/30 rounded-3xl p-8 shadow-2xl border border-white/50">
          <h2 className="text-3xl font-bold mb-6 text-white">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="backdrop-blur-md bg-white/40 p-6 rounded-2xl border border-white/50">
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-white/90">{edu.school}</p>
                <p className="text-sm text-white/70">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default TemplateFour;
