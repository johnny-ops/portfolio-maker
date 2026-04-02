import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Export portfolio as PDF
export const exportToPDF = async (elementId) => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('Preview element not found');
      return;
    }

    // Show loading message
    const originalContent = element.innerHTML;
    
    // Capture the element as canvas
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    // Create PDF
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    // Add first page
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add additional pages if needed
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Save PDF
    pdf.save('portfolio.pdf');
    alert('Portfolio exported as PDF successfully!');
  } catch (error) {
    console.error('Error exporting PDF:', error);
    alert('Error exporting PDF. Please try again.');
  }
};

// Export portfolio as HTML
export const exportToHTML = (portfolioData, template) => {
  try {
    const { personal, skills, projects, experience, education } = portfolioData;

    // Generate HTML content based on template
    const htmlContent = generateHTMLTemplate(portfolioData, template);

    // Create blob and download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert('Portfolio exported as HTML successfully!');
  } catch (error) {
    console.error('Error exporting HTML:', error);
    alert('Error exporting HTML. Please try again.');
  }
};

// Generate HTML template
const generateHTMLTemplate = (data, template) => {
  const { personal, skills, projects, experience, education } = data;

  const styles = `
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
      .hero { text-align: center; padding: 60px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
      .profile-img { width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 5px solid white; margin-bottom: 20px; }
      h1 { font-size: 3em; margin-bottom: 10px; }
      h2 { font-size: 2em; margin: 40px 0 20px; color: #667eea; border-bottom: 3px solid #667eea; padding-bottom: 10px; }
      .subtitle { font-size: 1.5em; margin-bottom: 20px; opacity: 0.9; }
      .contact-info { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin: 20px 0; }
      .social-links { display: flex; justify-content: center; gap: 15px; margin-top: 20px; }
      .social-links a { color: white; text-decoration: none; padding: 10px 20px; background: rgba(255,255,255,0.2); border-radius: 5px; }
      .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; margin: 20px 0; }
      .skill-card { background: #f7fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea; }
      .project-card { background: #f7fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
      .project-img { width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 15px; }
      .tech-tags { display: flex; flex-wrap: wrap; gap: 10px; margin: 10px 0; }
      .tech-tag { background: #667eea; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.9em; }
      .project-links { display: flex; gap: 15px; margin-top: 15px; }
      .project-links a { color: #667eea; text-decoration: none; font-weight: bold; }
      .experience-item, .education-item { margin-bottom: 30px; padding-left: 20px; border-left: 3px solid #667eea; }
      .experience-item h3, .education-item h3 { color: #2d3748; margin-bottom: 5px; }
      .company, .school { color: #667eea; font-weight: bold; }
      .duration, .year { color: #718096; font-size: 0.9em; margin-bottom: 10px; }
    </style>
  `;

  const heroSection = `
    <div class="hero">
      ${personal.profileImage ? `<img src="${personal.profileImage}" alt="${personal.fullName}" class="profile-img">` : ''}
      <h1>${personal.fullName || 'Your Name'}</h1>
      <p class="subtitle">${personal.title || 'Your Title'}</p>
      <div class="contact-info">
        ${personal.location ? `<span>📍 ${personal.location}</span>` : ''}
        ${personal.email ? `<span>✉️ ${personal.email}</span>` : ''}
        ${personal.phone ? `<span>📞 ${personal.phone}</span>` : ''}
      </div>
      <div class="social-links">
        ${personal.socialLinks.github ? `<a href="${personal.socialLinks.github}" target="_blank">GitHub</a>` : ''}
        ${personal.socialLinks.linkedin ? `<a href="${personal.socialLinks.linkedin}" target="_blank">LinkedIn</a>` : ''}
        ${personal.socialLinks.portfolio ? `<a href="${personal.socialLinks.portfolio}" target="_blank">Portfolio</a>` : ''}
      </div>
    </div>
  `;

  const aboutSection = personal.bio ? `
    <div class="container">
      <h2>About Me</h2>
      <p>${personal.bio}</p>
    </div>
  ` : '';

  const skillsSection = skills.length > 0 ? `
    <div class="container">
      <h2>Skills</h2>
      <div class="skills-grid">
        ${skills.map(skill => `
          <div class="skill-card">
            <strong>${skill.name}</strong>
            <p style="color: #718096; font-size: 0.9em;">${skill.level}</p>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  const projectsSection = projects.length > 0 ? `
    <div class="container">
      <h2>Projects</h2>
      ${projects.map(project => `
        <div class="project-card">
          ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-img">` : ''}
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          ${project.technologies ? `
            <div class="tech-tags">
              ${project.technologies.split(',').map(tech => `<span class="tech-tag">${tech.trim()}</span>`).join('')}
            </div>
          ` : ''}
          <div class="project-links">
            ${project.githubLink ? `<a href="${project.githubLink}" target="_blank">View Code</a>` : ''}
            ${project.liveLink ? `<a href="${project.liveLink}" target="_blank">Live Demo</a>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  ` : '';

  const experienceSection = experience.length > 0 ? `
    <div class="container">
      <h2>Experience</h2>
      ${experience.map(exp => `
        <div class="experience-item">
          <h3>${exp.jobTitle}</h3>
          <p class="company">${exp.company}</p>
          <p class="duration">${exp.duration}</p>
          <p>${exp.description}</p>
        </div>
      `).join('')}
    </div>
  ` : '';

  const educationSection = education.length > 0 ? `
    <div class="container">
      <h2>Education</h2>
      ${education.map(edu => `
        <div class="education-item">
          <h3>${edu.degree}</h3>
          <p class="school">${edu.school}</p>
          <p class="year">${edu.year}</p>
        </div>
      `).join('')}
    </div>
  ` : '';

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${personal.fullName || 'Portfolio'} - Portfolio</title>
      ${styles}
    </head>
    <body>
      ${heroSection}
      ${aboutSection}
      ${skillsSection}
      ${projectsSection}
      ${experienceSection}
      ${educationSection}
    </body>
    </html>
  `;
};

// Export as React Component
export const exportAsReactComponent = (portfolioData, template) => {
  try {
    const componentCode = generateReactComponent(portfolioData, template);
    
    const blob = new Blob([componentCode], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Portfolio.jsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert('Portfolio exported as React component successfully!');
  } catch (error) {
    console.error('Error exporting React component:', error);
    alert('Error exporting React component. Please try again.');
  }
};

const generateReactComponent = (data, template) => {
  const { personal, skills, projects, experience, education } = data;
  
  return `import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const personal = ${JSON.stringify(personal, null, 2)};
  const skills = ${JSON.stringify(skills, null, 2)};
  const projects = ${JSON.stringify(projects, null, 2)};
  const experience = ${JSON.stringify(experience, null, 2)};
  const education = ${JSON.stringify(education, null, 2)};

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        {personal.profileImage && (
          <img
            src={personal.profileImage}
            alt={personal.fullName}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-200"
          />
        )}
        <h1 className="text-4xl font-bold mb-2">{personal.fullName}</h1>
        <p className="text-xl text-gray-600 mb-4">{personal.title}</p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          {personal.location && <span className="flex items-center gap-1"><MapPin size={16} />{personal.location}</span>}
          {personal.email && <span className="flex items-center gap-1"><Mail size={16} />{personal.email}</span>}
          {personal.phone && <span className="flex items-center gap-1"><Phone size={16} />{personal.phone}</span>}
        </div>

        <div className="flex justify-center gap-4 mt-4">
          {personal.socialLinks.github && <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900"><Github size={20} /></a>}
          {personal.socialLinks.linkedin && <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900"><Linkedin size={20} /></a>}
          {personal.socialLinks.portfolio && <a href={personal.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900"><Globe size={20} /></a>}
        </div>
      </section>

      {/* About Section */}
      {personal.bio && (
        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">About Me</h2>
          <p className="text-gray-700 leading-relaxed">{personal.bio}</p>
        </section>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-100 p-3 rounded-lg">
                <p className="font-semibold">{skill.name}</p>
                <p className="text-sm text-gray-600">{skill.level}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                {project.image && <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-3">{project.description}</p>
                {project.technologies && <p className="text-sm text-gray-600 mb-3"><span className="font-semibold">Tech:</span> {project.technologies}</p>}
                <div className="flex gap-3">
                  {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 text-sm"><Github size={16} /> Code</a>}
                  {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 text-sm"><ExternalLink size={16} /> Live Demo</a>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience Section */}
      {experience.length > 0 && (
        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-gray-300 pl-4">
                <h3 className="text-xl font-semibold">{exp.jobTitle}</h3>
                <p className="text-gray-600 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.school}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Portfolio;
`;
};
