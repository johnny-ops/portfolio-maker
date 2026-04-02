import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, ExternalLink } from 'lucide-react';

// Timeline Template
const TemplateEight = ({ data }) => {
  const { personal, skills, projects, experience, education } = data;
  const themeColor = data.settings?.themeColor || '#667eea';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <section className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b" style={{ background: `linear-gradient(to bottom, ${themeColor}, transparent)` }}></div>
          
          <div className="relative z-10 bg-white rounded-2xl shadow-xl p-8 mb-8">
            {personal.profileImage && (
              <img
                src={personal.profileImage}
                alt={personal.fullName}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 shadow-lg"
                style={{ borderColor: themeColor }}
              />
            )}
            <h1 className="text-4xl font-bold mb-2" style={{ color: themeColor }}>
              {personal.fullName || 'Your Name'}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{personal.title || 'Your Title'}</p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-4">
              {personal.location && <span className="flex items-center gap-1"><MapPin size={16} />{personal.location}</span>}
              {personal.email && <span className="flex items-center gap-1"><Mail size={16} />{personal.email}</span>}
              {personal.phone && <span className="flex items-center gap-1"><Phone size={16} />{personal.phone}</span>}
            </div>

            <div className="flex justify-center gap-4">
              {personal.socialLinks.github && <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 transition-colors" style={{ color: themeColor }}><Github size={20} /></a>}
              {personal.socialLinks.linkedin && <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 transition-colors" style={{ color: themeColor }}><Linkedin size={20} /></a>}
              {personal.socialLinks.portfolio && <a href={personal.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 transition-colors" style={{ color: themeColor }}><Globe size={20} /></a>}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full" style={{ backgroundColor: themeColor }}></div>

          {/* About */}
          {personal.bio && (
            <div className="relative mb-12">
              <div className="flex items-center mb-4">
                <div className="flex-1 text-right pr-8">
                  <h2 className="text-2xl font-bold" style={{ color: themeColor }}>About Me</h2>
                </div>
                <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg z-10" style={{ backgroundColor: themeColor }}></div>
                <div className="flex-1"></div>
              </div>
              <div className="ml-auto w-1/2 pl-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <p className="text-gray-700 leading-relaxed">{personal.bio}</p>
                </div>
              </div>
            </div>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <div className="relative mb-12">
              <div className="flex items-center mb-4">
                <div className="flex-1"></div>
                <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg z-10" style={{ backgroundColor: themeColor }}></div>
                <div className="flex-1 pl-8">
                  <h2 className="text-2xl font-bold" style={{ color: themeColor }}>Skills</h2>
                </div>
              </div>
              <div className="mr-auto w-1/2 pr-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <p className="font-semibold text-gray-900">{skill.name}</p>
                        <p className="text-xs" style={{ color: themeColor }}>{skill.level}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects */}
          {projects.map((project, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center mb-4">
                {index % 2 === 0 ? (
                  <>
                    <div className="flex-1 text-right pr-8">
                      <h3 className="text-xl font-bold" style={{ color: themeColor }}>{project.title}</h3>
                    </div>
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg z-10" style={{ backgroundColor: themeColor }}></div>
                    <div className="flex-1"></div>
                  </>
                ) : (
                  <>
                    <div className="flex-1"></div>
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg z-10" style={{ backgroundColor: themeColor }}></div>
                    <div className="flex-1 pl-8">
                      <h3 className="text-xl font-bold" style={{ color: themeColor }}>{project.title}</h3>
                    </div>
                  </>
                )}
              </div>
              <div className={index % 2 === 0 ? 'ml-auto w-1/2 pl-8' : 'mr-auto w-1/2 pr-8'}>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  {project.image && <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />}
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.split(',').map((tech, i) => (
                        <span key={i} className="bg-gray-100 px-2 py-1 rounded text-xs">{tech.trim()}</span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-3">
                    {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 hover:underline" style={{ color: themeColor }}><Github size={14} />Code</a>}
                    {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 hover:underline" style={{ color: themeColor }}><ExternalLink size={14} />Demo</a>}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Experience */}
          {experience.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center mb-4">
                {index % 2 === 0 ? (
                  <>
                    <div className="flex-1"></div>
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg z-10" style={{ backgroundColor: themeColor }}></div>
                    <div className="flex-1 pl-8">
                      <h3 className="text-xl font-bold" style={{ color: themeColor }}>{exp.jobTitle}</h3>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 text-right pr-8">
                      <h3 className="text-xl font-bold" style={{ color: themeColor }}>{exp.jobTitle}</h3>
                    </div>
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg z-10" style={{ backgroundColor: themeColor }}></div>
                    <div className="flex-1"></div>
                  </>
                )}
              </div>
              <div className={index % 2 === 0 ? 'ml-auto w-1/2 pl-8' : 'mr-auto w-1/2 pr-8'}>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <p className="font-semibold text-gray-900 mb-1">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Education */}
          {education.map((edu, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center mb-4">
                {index % 2 === 0 ? (
                  <>
                    <div className="flex-1 text-right pr-8">
                      <h3 className="text-xl font-bold" style={{ color: themeColor }}>{edu.degree}</h3>
                    </div>
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg z-10" style={{ backgroundColor: themeColor }}></div>
                    <div className="flex-1"></div>
                  </>
                ) : (
                  <>
                    <div className="flex-1"></div>
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg z-10" style={{ backgroundColor: themeColor }}></div>
                    <div className="flex-1 pl-8">
                      <h3 className="text-xl font-bold" style={{ color: themeColor }}>{edu.degree}</h3>
                    </div>
                  </>
                )}
              </div>
              <div className={index % 2 === 0 ? 'ml-auto w-1/2 pl-8' : 'mr-auto w-1/2 pr-8'}>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <p className="font-semibold text-gray-900 mb-1">{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateEight;
