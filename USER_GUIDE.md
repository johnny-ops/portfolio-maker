# Portfolio Maker - User Guide

Welcome to Portfolio Maker! This guide will help you create an amazing professional portfolio in minutes.

## Getting Started

### 1. Launch the Application

After running `npm start`, the app opens at `http://localhost:3000`

### 2. Interface Overview

The app has two main sections:
- **Left Panel**: Form inputs for your portfolio data
- **Right Panel**: Live preview of your portfolio

## Building Your Portfolio

### Personal Information Tab

1. **Upload Profile Picture**
   - Click the upload area
   - Select an image (JPG, PNG, GIF)
   - Image appears immediately in preview
   - Click X to remove

2. **Fill Basic Info**
   - Full Name (required)
   - Title/Role (required) - e.g., "Full Stack Developer"
   - Bio - Write 2-3 paragraphs about yourself
   - Location - City, State/Country
   - Email - Your professional email
   - Phone - Optional contact number

3. **Add Social Links**
   - GitHub profile URL
   - LinkedIn profile URL
   - Personal portfolio website
   - Twitter/X profile

### Skills Tab

1. Click "Add Skill"
2. Enter skill name (e.g., "React.js", "Python")
3. Select proficiency level:
   - Beginner
   - Intermediate
   - Advanced
   - Expert
4. **Reorder skills**: Drag the grip icon to rearrange
5. Remove skills with the trash icon

**Tips:**
- Add 5-10 skills for best results
- Mix technical and soft skills
- Be honest about proficiency levels

### Projects Tab

1. Click "Add Project"
2. Upload project image (optional but recommended)
3. Fill in details:
   - Project Title (required)
   - Description - Explain what the project does
   - Technologies - Comma-separated list
   - GitHub Link - Repository URL
   - Live Demo Link - Deployed project URL

**Tips:**
- Add 2-5 of your best projects
- Use high-quality screenshots
- Write clear, concise descriptions
- Highlight your role and impact

### Experience Tab

1. Click "Add Experience"
2. Fill in:
   - Job Title (required)
   - Company Name (required)
   - Duration - e.g., "Jan 2020 - Present"
   - Description - Your responsibilities and achievements

**Tips:**
- List most recent first
- Use action verbs (Led, Developed, Managed)
- Quantify achievements when possible
- Keep descriptions focused

### Education Tab

1. Click "Add Education"
2. Fill in:
   - School Name (required)
   - Degree (required) - e.g., "Bachelor of Science in Computer Science"
   - Year - e.g., "2018 - 2022"

### Settings Tab

**Section Visibility & Order:**
- Toggle eye icon to show/hide sections
- Drag sections to reorder them
- Changes reflect immediately in preview

**Display Options:**
- Show Contact in Header
- Show Social Links
- Compact Mode

## Customization

### Choosing a Template

Click the template dropdown in the header:
- **Minimal**: Clean, professional, traditional
- **Dark Mode**: Modern, tech-focused
- **Creative**: Colorful, artistic
- **Glassmorphism**: Trendy, modern with glass effects
- **Japanese**: Minimalist, zen-inspired
- **Typography**: Bold, statement-making
- **Card Grid**: Modern, organized
- **Timeline**: Narrative, story-telling

### Custom Theme Colors

1. Click the color palette icon
2. Use the color picker or enter hex code
3. Choose from preset colors
4. Color applies to current template

### Dark Mode

Toggle the moon/sun icon for dark mode interface (not the portfolio preview)

## Preview Controls

### Zoom
- Click + to zoom in (up to 200%)
- Click - to zoom out (down to 50%)
- Click percentage to reset to 100%

### Device Preview
- 📱 Mobile: 375px width
- 📱 Tablet: 768px width
- 💻 Desktop: Full width

### Fullscreen
- Click maximize icon for distraction-free preview
- Press ESC or click again to exit

## Saving & Loading

### Save Locally
- Click "Save" button
- Data saves to browser localStorage
- Persists between sessions
- No account needed

### Save to Cloud (Requires Login)
1. Click "Login" button
2. Sign up or login with:
   - Email and password
   - Google account
3. Click "Save" (now shows cloud icon)
4. Data syncs to Firebase
5. Access from any device after login

### Load from File
1. Click "Load" button
2. Select a `.json` file
3. Portfolio data loads instantly

### Export Data
- Saves current portfolio as JSON
- Use to backup or share

## Exporting Your Portfolio

### Export as PDF
1. Click "Export" dropdown
2. Select "Export as PDF"
3. Wait for generation (may take a few seconds)
4. PDF downloads automatically
5. Multi-page support for long portfolios

### Export as HTML
1. Click "Export" dropdown
2. Select "Export as HTML"
3. Standalone HTML file downloads
4. Open in any browser
5. Share or host anywhere

### Export as React Component
1. Click "Export" dropdown
2. Select "Export as React"
3. Downloads `Portfolio.jsx` file
4. Import into any React project
5. Fully functional component with your data

## Validation

### Check Portfolio Completeness

1. Click the checkmark icon in header
2. View validation panel showing:
   - **Completion Progress**: Percentage complete
   - **Errors**: Required fields missing or invalid
   - **Suggestions**: Recommendations for improvement

3. Fix errors and warnings
4. Aim for 100% completion

### Common Validation Messages

**Errors (Must Fix):**
- "Full name is required"
- "Title/Role is required"
- "Invalid email format"
- "Skill name is required"

**Warnings (Suggestions):**
- "Consider adding a profile picture"
- "Bio should be at least 50 characters"
- "Add at least 3-5 skills"
- "Add at least 2-3 projects"

## Undo/Redo

- **Undo**: Click undo arrow (or Ctrl+Z)
- **Redo**: Click redo arrow (or Ctrl+Y)
- Full history tracking
- Disabled when no history available

## Keyboard Shortcuts

- `Ctrl + Z`: Undo
- `Ctrl + Y`: Redo
- `Ctrl + S`: Save (when focused on form)
- `ESC`: Close modals/fullscreen

## Tips for Best Results

### Profile Picture
- Use professional headshot
- Square aspect ratio works best
- High resolution (at least 500x500px)
- Good lighting and clear background

### Bio
- 2-3 paragraphs
- Highlight your unique value
- Include your passion and goals
- Keep it conversational

### Skills
- List 5-10 key skills
- Mix technical and soft skills
- Be honest about levels
- Order by importance

### Projects
- Showcase 2-5 best projects
- Use high-quality screenshots
- Explain the problem solved
- Highlight your specific contributions
- Include live links when possible

### Experience
- Start with most recent
- Use bullet points in description
- Quantify achievements
- Focus on impact

### Writing Tips
- Use active voice
- Be specific and concrete
- Show, don't just tell
- Proofread carefully

## Troubleshooting

### Preview Not Updating
- Check if you're in the correct tab
- Refresh the page
- Clear browser cache

### Images Not Showing
- Check file size (keep under 5MB)
- Use common formats (JPG, PNG)
- Ensure good internet connection

### Export Issues
- **PDF**: Disable browser extensions
- **HTML**: Check for special characters
- **React**: Ensure valid JSON data

### Login Problems
- Check Firebase configuration
- Verify authentication is enabled
- Check browser console for errors
- Try incognito mode

### Data Not Saving
- Check localStorage isn't full
- For cloud: Verify you're logged in
- Check internet connection
- Look for error messages

## Best Practices

### Data Management
- Save frequently
- Export backups regularly
- Use cloud save for multi-device access
- Keep JSON exports for version control

### Design
- Choose template that matches your field
- Use consistent theme colors
- Keep it professional
- Less is more - don't overcrowd

### Content
- Update regularly
- Remove outdated projects
- Keep skills current
- Proofread everything

### Performance
- Optimize images before upload
- Limit to 10-15 projects max
- Keep descriptions concise
- Test on different devices

## Mobile Usage

The app works on mobile browsers:
- Form and preview stack vertically
- Touch-friendly controls
- Swipe to scroll
- Tap to edit

For best experience, use desktop for editing and mobile for preview.

## Privacy & Data

### Local Storage
- Data stays in your browser
- Not sent to any server (unless you login)
- Clear browser data to remove

### Cloud Storage (Firebase)
- Data encrypted in transit
- Stored securely in Firestore
- Only you can access your data
- Delete account to remove all data

### Exports
- PDF/HTML contain your data
- Share carefully
- No tracking or analytics in exports

## Advanced Usage

### Custom Workflows

**Quick Portfolio:**
1. Fill Personal Info only
2. Add 3 skills
3. Add 1-2 projects
4. Export immediately

**Complete Portfolio:**
1. Fill all sections
2. Add 5+ skills
3. Add 3-5 projects
4. Add work experience
5. Add education
6. Validate (aim for 100%)
7. Try multiple templates
8. Export in all formats

**Team Portfolio:**
1. Create portfolio
2. Export as JSON
3. Share JSON file
4. Team member loads and edits
5. Re-export

### Integration Ideas

- Embed HTML export in personal website
- Use React component in portfolio site
- Print PDF for job applications
- Share link to hosted version
- Include in email signatures

## FAQ

**Q: Is my data safe?**
A: Yes. Local data stays in your browser. Cloud data is secured by Firebase with authentication.

**Q: Can I use this commercially?**
A: Yes, MIT license allows commercial use.

**Q: Do I need Firebase?**
A: No, the app works fully offline with localStorage. Firebase is optional for cloud features.

**Q: Can I customize templates?**
A: Yes, export as React component and modify the code.

**Q: How many portfolios can I create?**
A: Unlimited locally. One per account with cloud storage (can export/import multiple).

**Q: Can I add custom sections?**
A: Not yet, but it's on the roadmap!

**Q: Is there a mobile app?**
A: Install as PWA for app-like experience on mobile.

**Q: Can I collaborate with others?**
A: Not yet, but collaboration features are planned.

## Getting Help

- **Documentation**: Check README.md
- **Firebase Issues**: See FIREBASE_SETUP.md
- **Bug Reports**: Open GitHub issue
- **Feature Requests**: Check nextFeature.md
- **Questions**: GitHub Discussions

## Updates

Check [nextFeature.md](./nextFeature.md) for upcoming features and release timeline.

---

**Happy Portfolio Building! 🚀**

If you create something awesome, we'd love to see it! Share on Twitter with #PortfolioMaker
