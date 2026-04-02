# Portfolio Maker - React Web Application

A full-featured Portfolio Maker that allows users to create professional portfolios through an intuitive form interface with real-time preview.

## 🚀 Features

### Core Functionality
- **Multi-Section Form**: Collect personal info, skills, projects, experience, and education
- **Live Preview**: Real-time portfolio preview that updates as you type
- **8 Professional Templates**: Choose from diverse portfolio designs
  - Template 1: Minimal & Clean
  - Template 2: Dark Mode Professional
  - Template 3: Creative Gradient
  - Template 4: Glassmorphism Modern
  - Template 5: Japanese Minimalist
  - Template 6: Bold Typography
  - Template 7: Card Grid Layout
  - Template 8: Timeline Narrative
- **Image Upload**: Upload profile pictures and project images with preview
- **Advanced Export Options**: 
  - Export as PDF using html2canvas and jsPDF
  - Export as standalone HTML file
  - Export as React component
- **Data Persistence**: Auto-save to localStorage
- **Cloud Storage**: Firebase integration for saving portfolios to cloud
- **Authentication**: Login with Google or Email/Password
- **Import/Export Data**: Save and load portfolio data as JSON files
- **Dark Mode**: Toggle between light and dark themes
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile

### Advanced Features
- **Undo/Redo**: Full history management with undo/redo functionality
- **Custom Theme Colors**: Pick any color for your portfolio theme
- **Section Management**: 
  - Toggle section visibility
  - Drag-and-drop to reorder sections
  - Customize section display
- **Form Validation**: Real-time validation with error checking and suggestions
- **Completion Progress**: Track portfolio completion percentage
- **Preview Controls**:
  - Zoom in/out (50% - 200%)
  - Device preview modes (Mobile, Tablet, Desktop)
  - Fullscreen preview mode
- **PWA Support**: Install as a Progressive Web App for offline access

### Form Sections
1. **Personal Information**
   - Full name, title, profile picture
   - Bio, location, email, phone
   - Social links (GitHub, LinkedIn, Portfolio, Twitter)

2. **Skills**
   - Add/remove skills dynamically
   - Set proficiency levels (Beginner, Intermediate, Advanced, Expert)
   - Drag to reorder

3. **Projects**
   - Multiple projects with images
   - Project title, description, technologies
   - GitHub and live demo links
   - Rich project showcase

4. **Experience**
   - Job title, company, duration
   - Detailed descriptions
   - Timeline view

5. **Education**
   - School name, degree, year
   - Academic achievements

6. **Settings**
   - Section visibility toggles
   - Section reordering
   - Display preferences

## 🛠 Tech Stack

- **React.js** (v18.2.0) - Functional components with hooks
- **Tailwind CSS** (v3.3.2) - Utility-first styling
- **Firebase** (v10.7.1) - Authentication and cloud storage
- **html2canvas** (v1.4.1) - PDF export functionality
- **jsPDF** (v2.5.1) - PDF generation
- **react-beautiful-dnd** (v13.1.1) - Drag and drop functionality
- **react-colorful** (v5.6.1) - Color picker
- **lucide-react** (v0.263.1) - Modern icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/johnny-ops/portfolio-maker.git
cd portfolio-maker
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase (Optional - for cloud features):
   - Create a Firebase project at https://console.firebase.google.com
   - Enable Authentication (Email/Password and Google)
   - Enable Firestore Database
   - Copy your Firebase config to `src/firebase.js`

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Usage

1. **Fill in your information** using the tabbed form interface
2. **Watch the live preview** update in real-time on the right side
3. **Switch templates** using the dropdown in the header (8 templates available)
4. **Customize theme colors** using the color picker
5. **Manage sections** in the Settings tab (reorder, show/hide)
6. **Validate your portfolio** using the validation checker
7. **Save your work**:
   - Locally: Auto-saves to localStorage
   - Cloud: Login and click Save (requires Firebase setup)
8. **Export your portfolio**:
   - Export as PDF
   - Export as HTML
   - Export as React Component
9. **Use preview controls**:
   - Zoom in/out
   - Switch device views (Mobile/Tablet/Desktop)
   - Fullscreen mode

## 📁 Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   └── AuthModal.jsx
│   ├── ColorPicker/
│   │   └── ThemeColorPicker.jsx
│   ├── Form/
│   │   ├── PersonalInfo.jsx
│   │   ├── SkillsForm.jsx
│   │   ├── ProjectsForm.jsx
│   │   ├── ExperienceForm.jsx
│   │   └── EducationForm.jsx
│   ├── Preview/
│   │   └── PortfolioPreview.jsx
│   ├── Settings/
│   │   └── SectionSettings.jsx
│   ├── Validation/
│   │   └── FormValidator.jsx
│   └── Templates/
│       ├── TemplateOne.jsx (Minimal)
│       ├── TemplateTwo.jsx (Dark Mode)
│       ├── TemplateThree.jsx (Creative)
│       ├── TemplateFour.jsx (Glassmorphism)
│       ├── TemplateFive.jsx (Japanese)
│       ├── TemplateSix.jsx (Typography)
│       ├── TemplateSeven.jsx (Card Grid)
│       └── TemplateEight.jsx (Timeline)
├── contexts/
│   ├── AuthContext.jsx
│   └── PortfolioContext.jsx
├── utils/
│   └── exportUtils.js
├── firebase.js
├── AppComplete.jsx
├── index.js
└── index.css
```

## ✨ Key Features Breakdown

### State Management
- React Context API for global state
- Portfolio Context with undo/redo history
- Auth Context for user management
- Auto-save to localStorage
- Cloud sync with Firebase

### Templates
1. **Minimal**: Clean, professional design
2. **Dark Mode**: Modern dark theme with purple accents
3. **Creative**: Colorful gradient design
4. **Glassmorphism**: Modern glass effect with vibrant backgrounds
5. **Japanese**: Minimalist, zen-inspired layout
6. **Typography**: Bold, statement-making design
7. **Card Grid**: Modern card-based layout
8. **Timeline**: Narrative timeline presentation

### Export Functionality
- **PDF Export**: High-quality PDF with multi-page support
- **HTML Export**: Standalone HTML file with inline CSS
- **React Export**: Reusable React component

### Validation System
- Required field checking
- Email format validation
- Completion percentage tracking
- Real-time error and warning display
- Helpful suggestions for improvement

### Preview Controls
- Zoom: 50% to 200%
- Device modes: Mobile (375px), Tablet (768px), Desktop (100%)
- Fullscreen mode for distraction-free preview
- Real-time updates as you type

## 🔐 Firebase Setup (Optional)

To enable cloud features:

1. Create a Firebase project
2. Enable Authentication:
   - Email/Password
   - Google Sign-In
3. Enable Firestore Database
4. Update `src/firebase.js` with your config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📱 PWA Features

- Install as standalone app
- Offline functionality
- Add to home screen
- Fast loading with caching

## 🎨 Customization

- **Theme Colors**: Use the color picker to match your brand
- **Section Order**: Drag and drop to reorder portfolio sections
- **Visibility**: Show/hide sections as needed
- **Templates**: Switch between 8 different designs instantly

## 🚀 Deployment

### Deploy to Vercel
```bash
npm run build
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
netlify deploy --prod --dir=build
```

### Deploy to GitHub Pages
```bash
npm run build
# Follow GitHub Pages deployment guide
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🐛 Known Issues

- PDF export may take a few seconds for large portfolios
- Image uploads are stored as base64 (consider external storage for production)
- Firebase config needs to be manually added

## 🔮 Roadmap

See [nextFeature.md](./nextFeature.md) for upcoming features including:
- AI-powered content suggestions
- Portfolio analytics
- Multi-language support
- Template marketplace
- Collaboration features
- And much more!

## 💡 Tips

- Use high-quality images for best results
- Keep descriptions concise and impactful
- Add at least 3-5 skills to showcase expertise
- Include 2-3 best projects
- Use the validation tool to ensure completeness
- Try different templates to find your style

## 📧 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Email: support@portfoliomaker.com

---

**Made with ❤️ by developers, for developers**

**Current Version**: v1.1.0  
**Last Updated**: April 2, 2026
