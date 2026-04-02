# Changelog

All notable changes to Portfolio Maker will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-04-02

### Added
- 🎨 5 new portfolio templates (Glassmorphism, Japanese, Typography, Card Grid, Timeline)
- 🔐 Firebase authentication (Google + Email/Password)
- ☁️ Cloud storage with Firebase Firestore
- ↩️ Undo/Redo functionality with full history management
- 🎨 Custom theme color picker with preset colors
- 👁️ Section visibility toggles
- 🔄 Drag-and-drop section reordering
- ✅ Form validation with completion progress tracking
- 🔍 Preview zoom controls (50%-200%)
- 📱 Device preview modes (Mobile/Tablet/Desktop)
- 🖥️ Fullscreen preview mode
- 📦 Export as React component
- 📱 PWA support with service worker and manifest
- 📚 Comprehensive documentation (USER_GUIDE.md, FIREBASE_SETUP.md, DEPLOYMENT.md)
- 🔧 Environment variable support
- ⚙️ Settings tab for advanced configuration

### Changed
- 🏗️ Refactored state management to use Context API
- 📝 Enhanced README with detailed feature list
- 🎯 Improved UI/UX with better controls layout
- 🔄 Updated export utilities to support multiple formats
- 📦 Added new dependencies (Firebase, react-beautiful-dnd, react-colorful)

### Fixed
- 🐛 Fixed template switching issues
- 🐛 Improved error handling for exports
- 🐛 Better responsive design on mobile devices
- 🐛 Fixed dark mode inconsistencies

## [1.0.0] - 2026-04-01

### Added
- ✨ Initial release
- 📝 Multi-section form (Personal, Skills, Projects, Experience, Education)
- 👀 Live preview with real-time updates
- 🎨 3 portfolio templates (Minimal, Dark Mode, Creative)
- 🖼️ Image upload with preview
- 📄 Export to PDF
- 📄 Export to HTML
- 💾 LocalStorage persistence
- 📥 Import/Export JSON data
- 🌙 Dark mode toggle
- 📱 Fully responsive design
- 🎯 Clean, intuitive UI
- 📦 Complete React.js application
- 🎨 Tailwind CSS styling
- 📚 Basic documentation

### Technical
- React 18.2.0
- Tailwind CSS 3.3.2
- html2canvas for PDF generation
- jsPDF for PDF creation
- lucide-react for icons

---

## Upcoming Features

See [nextFeature.md](./nextFeature.md) for the complete roadmap including:

### v1.2 (Planned - May 2026)
- AI-powered content suggestions
- Portfolio analytics
- Multi-language support
- Video project demos
- Custom sections

### v2.0 (Planned - Q3 2026)
- Template marketplace
- Collaboration features
- Advanced SEO tools
- Platform integrations (LinkedIn, GitHub, Behance)

---

## Version History

- **v1.1.0** (Current) - Advanced features release
- **v1.0.0** - Initial release

## Migration Guides

### Migrating from v1.0.0 to v1.1.0

Your existing portfolio data will automatically migrate. New features:

1. **Settings**: A new "Settings" tab is available
2. **Templates**: 5 new templates added to the dropdown
3. **Authentication**: Optional - login to enable cloud features
4. **Validation**: Click checkmark icon to validate your portfolio

No breaking changes. All existing features work as before.

---

For detailed changes, see commit history on GitHub.
