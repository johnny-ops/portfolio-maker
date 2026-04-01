import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, ExternalLink } from 'lucide-react';

// Creative Template
const TemplateThree = ({ data }) => {
  const { personal, skills, projects, experience, education } = data;

  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-8 min-h-screen">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {personal.profileImage && (
              <img
                src={personal.profileImage}
                alt={personal.fullName}
                className="w-32 h-32 rounded-2xl object-cover border-4 border-gradient-to-r from-pink-500 to-purple-500 shadow-lg"
              />
            )}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {personal.fullName || 'Your Name'}
              </h1>
              <p className="text-xl text-gray-600 mb-4">{personal.title || 'Your Title'}</p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600 mb-4">
                {personal.location && (
                  <span className="flex items-center gap-1 bg-pink-100 px-3 py-1 rounded-full">
                    <MapPin size={16} />
                    {personal.location}
                  </span>
                )}
                {personal.email && (
                  <span className="flex items-center gap-1 bg-purple-100 px-3 py-1 rounded-full">
                    <Mail size={16} />
                    {personal.email}
                  </span>
                )}
                {personal.phone && (
                  <span className="flex items-center gap-1 bg-blue-100 px-3 py-1 rounded-full">
                    <Phone size={16} />
                    {personal.phone}
                  </span>
                )}
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-3">
                {personal.socialLinks.github && (
                  <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {personal.socialLinks.linkedin && (
                  <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                    <Linkedin size={20} />
                  </a>
                )}
                {personal.socialLinks.portfolio && (
                  <a href={personal.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors">
                    <Globe size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {personal.bio && (
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-700 leading-relaxed">{personal.bio}</p>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-100 to-purple-100 p-4 rounded-xl hover:shadow-lg transition-shadow">
                  <p className="font-semibold text-gray-800">{skill.name}</p>
                  <p className="text-sm text-purple-600">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 hover:shadow-lg transition-shadow">
                  {project.image && (
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                  )}
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.split(',').map((tech, i) => (
                        <span key={i} className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-3">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center gap-1 text-sm">
                        <Github size={16} /> Code
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center gap-1 text-sm">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {experience.length > 0 && (
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-4 bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-r-xl">
                  <h3 className="text-xl font-semibold text-gray-800">{exp.jobTitle}</h3>
                  <p className="text-purple-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                  <p className="text-purple-600">{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default TemplateThree;
