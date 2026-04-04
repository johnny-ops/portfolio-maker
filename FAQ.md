# ❓ Frequently Asked Questions (FAQ)

## General Questions

### What is Portfolio Maker?
Portfolio Maker is a free, open-source web application that helps you create professional portfolio websites without coding. Simply fill out forms, choose a template, and export your portfolio as PDF, HTML, or React component.

### Is it really free?
Yes! Portfolio Maker is completely free and open-source under the MIT License. You can use it for personal or commercial purposes without any restrictions.

### Do I need coding knowledge?
No! Portfolio Maker is designed for everyone. The intuitive form-based interface requires zero coding knowledge. However, if you're a developer, you can also export your portfolio as a React component.

### Can I use this for commercial purposes?
Absolutely! The MIT License allows you to use Portfolio Maker for any purpose, including commercial projects.

## Getting Started

### How do I install Portfolio Maker?
```bash
# Clone the repository
git clone https://github.com/johnny-ops/portfolio-maker.git

# Install dependencies
cd portfolio-maker
npm install

# Start the application
npm start
```

See [QUICKSTART.md](./QUICKSTART.md) for detailed instructions.

### What are the system requirements?
- Node.js 14.0 or higher
- npm 6.0 or higher
- Modern web browser (Chrome, Firefox, Safari, Edge)
- 100MB free disk space

### Can I use this without installing?
Yes! We're working on a hosted version. For now, you can deploy it to Vercel, Netlify, or GitHub Pages for free. See [DEPLOYMENT.md](./DEPLOYMENT.md).

## Features & Usage

### How many templates are available?
Currently, there are 8 professional templates:
1. Minimal
2. Dark Mode
3. Creative
4. Glassmorphism
5. Japanese Minimal
6. Bold Typography
7. Card Grid
8. Timeline

More templates are coming soon!

### Can I customize the colors?
Yes! Use the built-in color picker to choose your brand colors. You can also select from preset color schemes.

### How do I add my profile picture?
1. Go to the "Personal Info" tab
2. Click the upload area
3. Select an image from your computer
4. The image will be automatically resized and optimized

Supported formats: JPG, PNG, GIF, WebP

### Can I reorder sections?
Yes! Use the drag-and-drop feature to reorder:
- Skills
- Projects
- Work experiences
- Education entries

### How do I hide sections I don't need?
Click the eye icon next to each section to toggle visibility. Hidden sections won't appear in the preview or exports.

### Is there a limit on projects or skills?
No limits! Add as many projects, skills, experiences, and education entries as you need.

## Data & Privacy

### Where is my data stored?
By default, your data is stored locally in your browser's localStorage. If you enable Firebase authentication, data is also synced to the cloud.

### Is my data secure?
Yes! 
- Local data never leaves your device
- Cloud data is encrypted in transit and at rest
- We don't track or sell your data
- No analytics or third-party scripts

### Can I export my data?
Yes! You can export your portfolio data as:
- JSON file (for backup)
- PDF document
- HTML file
- React component

### How do I backup my portfolio?
1. Click "Save" to save locally
2. Click "Export" → "Download JSON Data"
3. Store the JSON file safely
4. Import it later using "Load"

### Can I access my portfolio from multiple devices?
Yes, if you sign in with Firebase authentication. Your portfolio will sync across all devices.

## Export & Sharing

### What export formats are supported?
- **PDF** - For printing or sharing
- **HTML** - Standalone website file
- **React Component** - For developers
- **JSON** - Raw data backup

### How do I share my portfolio?
1. Export as HTML
2. Upload to any web hosting service
3. Share the URL

Or deploy directly to:
- GitHub Pages
- Vercel
- Netlify
- Firebase Hosting

### Can I edit the exported HTML?
Yes! The exported HTML file contains all CSS inline, making it easy to customize with any text editor.

### How do I deploy my portfolio?
See our [DEPLOYMENT.md](./DEPLOYMENT.md) guide for step-by-step instructions for various platforms.

## Technical Questions

### What technologies are used?
- **Frontend:** React.js 18
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **PDF Export:** html2canvas + jsPDF
- **Backend:** Firebase (optional)
- **Drag & Drop:** react-beautiful-dnd
- **Color Picker:** react-colorful

### Can I contribute to the project?
Yes! We welcome contributions. See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### How do I report bugs?
1. Check existing [GitHub Issues](https://github.com/johnny-ops/portfolio-maker/issues)
2. Create a new issue with:
   - Bug description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)

### Can I request features?
Absolutely! Open a feature request on GitHub Issues or check our [roadmap](./nextFeature.md).

### Is there a TypeScript version?
Not yet, but it's on our roadmap! The codebase is structured to make TypeScript migration easy.

## Firebase & Authentication

### Do I need Firebase?
No! Firebase is optional. The app works perfectly fine with just localStorage. Firebase adds:
- Cloud sync
- Multi-device access
- User authentication

### How do I set up Firebase?
See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for detailed instructions.

### What Firebase services are used?
- **Authentication** - User sign-in
- **Firestore** - Portfolio data storage
- **Storage** - Image uploads (optional)

### Is Firebase free?
Yes! Firebase has a generous free tier that's sufficient for personal use. See [Firebase Pricing](https://firebase.google.com/pricing).

## Troubleshooting

### The app won't start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### Images won't upload
- Check file size (max 5MB recommended)
- Ensure file format is supported (JPG, PNG, GIF, WebP)
- Try a different browser
- Check browser console for errors

### Export to PDF is blank
- Ensure preview is fully loaded
- Try a different browser (Chrome recommended)
- Check if images are loaded
- Disable browser extensions

### Data not saving
- Check browser localStorage is enabled
- Clear browser cache
- Try incognito/private mode
- Check browser console for errors

### Firebase authentication fails
- Verify Firebase configuration in `src/firebase.js`
- Check Firebase console for enabled auth methods
- Ensure correct API keys
- Check network connection

### Styles look broken
```bash
# Rebuild Tailwind CSS
npm run build:css
```

### Performance issues
- Clear browser cache
- Reduce image sizes
- Disable browser extensions
- Use Chrome for best performance

## Mobile & Responsive

### Does it work on mobile?
Yes! Portfolio Maker is fully responsive and works on:
- Smartphones
- Tablets
- Desktop computers

### Can I edit on mobile?
Yes, but desktop is recommended for the best editing experience. Mobile is great for previewing and minor edits.

### Is there a mobile app?
Not yet, but Portfolio Maker is a PWA (Progressive Web App), so you can:
1. Open in mobile browser
2. Click "Add to Home Screen"
3. Use like a native app

## Customization

### Can I add custom sections?
Not yet, but it's on our roadmap! Currently, you can use the "Projects" section for custom content.

### Can I change fonts?
Fonts are template-specific. You can modify the exported HTML to change fonts.

### Can I add custom CSS?
For exported HTML, yes! Edit the `<style>` section in the exported file.

### Can I create my own template?
Yes! If you're a developer:
1. Copy an existing template from `src/components/Templates/`
2. Modify the JSX and styling
3. Add it to the template selector

See [CONTRIBUTING.md](./CONTRIBUTING.md) for template contribution guidelines.

## Licensing & Credits

### What license is this under?
MIT License - see [LICENSE](./LICENSE) file.

### Can I remove the "Made with Portfolio Maker" credit?
Yes! There's no requirement to keep credits, though we'd appreciate it if you do.

### Can I sell portfolios made with this?
Yes! You can sell portfolio creation services using this tool.

### Can I modify and redistribute?
Yes! Under the MIT License, you can modify and redistribute, even commercially.

## Support & Community

### Where can I get help?
- 📖 Read the [User Guide](./USER_GUIDE.md)
- 🐛 Check [GitHub Issues](https://github.com/johnny-ops/portfolio-maker/issues)
- 💬 Join our [Discord Community](#) (coming soon)
- 📧 Email: support@portfoliomaker.com

### How can I support the project?
- ⭐ Star the repository on GitHub
- 🐛 Report bugs and suggest features
- 💻 Contribute code
- 📢 Share with others
- ☕ [Buy me a coffee](#) (coming soon)

### Is there a roadmap?
Yes! Check [nextFeature.md](./nextFeature.md) for upcoming features.

### When will feature X be released?
Check our [roadmap](./nextFeature.md) for estimated release dates. We follow semantic versioning.

## Still Have Questions?

Can't find your answer? 

- 📧 Email: support@portfoliomaker.com
- 💬 Discord: [Join our community](#)
- 🐛 GitHub: [Open an issue](https://github.com/johnny-ops/portfolio-maker/issues)

---

**Last Updated:** April 4, 2026  
**Version:** 1.0.0
