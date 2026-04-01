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
