# Portfolio Maker - React Web Application

A full-featured Portfolio Maker that allows users to create professional portfolios through an intuitive form interface with real-time preview.

## Features

### Core Functionality
- **Multi-Section Form**: Collect personal info, skills, projects, experience, and education
- **Live Preview**: Real-time portfolio preview that updates as you type
- **Multiple Templates**: Choose from 3 different portfolio designs (Minimal, Dark Mode, Creative)
- **Image Upload**: Upload profile pictures and project images with preview
- **Export Options**: 
  - Export as PDF using html2canvas and jsPDF
  - Export as standalone HTML file
- **Data Persistence**: Auto-save to localStorage
- **Import/Export Data**: Save and load portfolio data as JSON files
- **Dark Mode**: Toggle between light and dark themes
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile

### Form Sections
1. **Personal Information**
   - Full name, title, profile picture
   - Bio, location, email, phone
   - Social links (GitHub, LinkedIn, Portfolio, Twitter)

2. **Skills**
   - Add/remove skills dynamically
   - Set proficiency levels (Beginner, Intermediate, Advanced, Expert)

3. **Projects**
   - Multiple projects with images
   - Project title, description, technologies
   - GitHub and live demo links

4. **Experience**
   - Job title, company, duration
   - Detailed descriptions

5. **Education**
   - School name, degree, year

## Tech Stack

- **React.js** (v18.2.0) - Functional components with hooks
- **Tailwind CSS** (v3.3.2) - Utility-first styling
- **html2canvas** (v1.4.1) - PDF export functionality
- **jsPDF** (v2.5.1) - PDF generation
- **lucide-react** (v0.263.1) - Modern icon library

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Fill in your information** using the tabbed form interface
2. **Watch the live preview** update in real-time on the right side
3. **Switch templates** using the dropdown in the header
4. **Save your work** using the Save button (stores in localStorage)
5. **Export your portfolio**:
   - Click Export → Export as PDF
   - Click Export → Export as HTML
6. **Load previous work** using the Load button (import JSON file)

## Project Structure

```
src/
├── components/
│   ├── Form/
│   │   ├── PersonalInfo.jsx
│   │   ├── SkillsForm.jsx
│   │   ├── ProjectsForm.jsx
│   │   ├── ExperienceForm.jsx
│   │   └── EducationForm.jsx
│   ├── Preview/
│   │   └── PortfolioPreview.jsx
│   └── Templates/
│       ├── TemplateOne.jsx (Minimal)
│       ├── TemplateTwo.jsx (Dark Mode)
│       └── TemplateThree.jsx (Creative)
├── utils/
│   └── exportUtils.js
├── App.jsx
├── index.js
└── index.css
```

## Features Breakdown

### State Management
- Uses React `useState` for managing portfolio data
- Centralized state in App.jsx with prop drilling to child components
- Auto-save to localStorage on every change

### Templates
1. **Template One (Minimal)**: Clean, professional design with simple borders
2. **Template Two (Dark Mode)**: Modern dark theme with purple accents
3. **Template Three (Creative)**: Colorful gradient design with rounded elements

### Export Functionality
- **PDF Export**: Captures the preview as an image and converts to PDF
- **HTML Export**: Generates a standalone HTML file with inline CSS

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Future Enhancements

- Firebase integration for cloud storage
- Drag-and-drop section reordering
- Custom theme color picker
- More template options
- Social media sharing
- Custom domain deployment

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
