import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, ExternalLink } from 'lucide-react';

// Card Grid Template
const TemplateSeven = ({ data }) => {
  const { personal, skills, projects, experience, education } = data;
  const themeColor = data.settings?.themeColor || '#667eea';

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Hero Card */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {personal.profileImage && (
              <img
                src={personal.profileImage}
                alt={personal.fullName}
                className="w-40 h-40 rounded-2xl object-cover shadow-lg"
              />
            )}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold mb-3" style={{ color: themeColor }}>
                {personal.fullName || 'Your Name'}
              </h1>
              <p className="text-2xl text-gray-600 mb-6">{personal.title || 'Your Title'}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                {personal.location && <span className="bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center gap-2"><MapPin size={14} />{personal.location}</span>}
                {personal.email && <span className="bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center gap-2"><Mail size={14} />{personal.email}</span>}
                {personal.phone && <span className="bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center gap-2"><Phone size={14} />{personal.phone}</span>}
              </div>

              <div className="flex justify-center md:justify-start gap-3">
                {personal.socialLinks.github && <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-gray-100 transition-colors" style={{ color: themeColor }}><Github size={24} /></a>}
                {personal.socialLinks.linkedin && <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-gray-100 transition-colors" style={{ color: themeColor }}><Linkedin size={24} /></a>}
                {personal.socialLinks.portfolio && <a href={personal.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-gray-100 transition-colors" style={{ color: themeColor }}><Globe size={24} /></a>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* About Card */}
        {personal.bio && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-shadow">
            <h2 className="text-3xl font-bold mb-4" style={{ color: themeColor }}>About Me</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{personal.bio}</p>
          </div>
        )}

        {/* Skills Grid */}
        {skills.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-shadow">
            <h2 className="text-3xl font-bold mb-6" style={{ color: themeColor }}>Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl text-center hover:scale-105 transition-transform">
                  <p className="font-bold text-gray-900 mb-1">{skill.name}</p>
                  <p className="text-xs" style={{ color: themeColor }}>{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {projects.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                {project.image && <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: themeColor }}>{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.split(',').map((tech, i) => (
                        <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">{tech.trim()}</span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-3">
                    {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:opacity-80 transition-opacity text-white" style={{ backgroundColor: themeColor }}><Github size={16} />Code</a>}
                    {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors" style={{ borderColor: themeColor, color: themeColor }}><ExternalLink size={16} />Demo</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Experience Cards */}
        {experience.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-shadow">
            <h2 className="text-3xl font-bold mb-6" style={{ color: themeColor }}>Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 pl-6 py-2" style={{ borderColor: themeColor }}>
                  <h3 className="text-xl font-bold text-gray-900">{exp.jobTitle}</h3>
                  <p className="font-semibold mb-1" style={{ color: themeColor }}>{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Cards */}
        {education.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <h2 className="text-3xl font-bold mb-6" style={{ color: themeColor }}>Education</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="font-semibold mb-1" style={{ color: themeColor }}>{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateSeven;
