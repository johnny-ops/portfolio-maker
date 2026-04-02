# Contributing to Portfolio Maker

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Help others learn and grow

## How to Contribute

### Reporting Bugs

1. Check if the bug is already reported in Issues
2. If not, create a new issue with:
   - Clear title
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser and OS information

### Suggesting Features

1. Check [nextFeature.md](./nextFeature.md) for planned features
2. Search existing issues for similar suggestions
3. Create a new issue with:
   - Clear description of the feature
   - Use cases and benefits
   - Mockups or examples (if applicable)

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**:
```bash
git checkout -b feature/amazing-feature
```

3. **Make your changes**:
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Test your changes**:
```bash
npm start
# Test all features
# Check responsive design
# Test in different browsers
```

5. **Commit with clear messages**:
```bash
git commit -m "feat: Add amazing feature"
```

Use conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring
- `test:` Adding tests
- `chore:` Maintenance

6. **Push to your fork**:
```bash
git push origin feature/amazing-feature
```

7. **Create Pull Request**:
   - Clear title and description
   - Reference related issues
   - Add screenshots for UI changes
   - List breaking changes (if any)

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/portfolio-maker.git
cd portfolio-maker

# Add upstream remote
git remote add upstream https://github.com/johnny-ops/portfolio-maker.git

# Install dependencies
npm install

# Start development server
npm start
```

## Project Structure

```
src/
├── components/       # React components
│   ├── Auth/        # Authentication components
│   ├── ColorPicker/ # Theme customization
│   ├── DragDrop/    # Drag and drop utilities
│   ├── Form/        # Form input components
│   ├── Preview/     # Portfolio preview
│   ├── Settings/    # Settings components
│   ├── Templates/   # Portfolio templates
│   └── Validation/  # Form validation
├── contexts/        # React contexts
├── utils/           # Utility functions
├── firebase.js      # Firebase configuration
└── App.jsx          # Main app component
```

## Coding Guidelines

### React Components

- Use functional components with hooks
- Keep components small and focused
- Use meaningful prop names
- Add PropTypes or TypeScript (future)

```javascript
// Good
const SkillCard = ({ skill, onEdit, onDelete }) => {
  // Component logic
};

// Avoid
const Component1 = ({ data }) => {
  // Too generic
};
```

### Styling

- Use Tailwind CSS utility classes
- Follow existing color scheme
- Ensure dark mode compatibility
- Test responsive design

```javascript
// Good
<div className="p-4 bg-white dark:bg-gray-800 rounded-lg">

// Avoid inline styles unless necessary
<div style={{ padding: '16px' }}>
```

### State Management

- Use Context for global state
- Use local state for component-specific data
- Avoid prop drilling when possible

### File Naming

- Components: PascalCase (e.g., `SkillsForm.jsx`)
- Utilities: camelCase (e.g., `exportUtils.js`)
- Contexts: PascalCase with Context suffix (e.g., `AuthContext.jsx`)

## Adding New Templates

1. Create new template file in `src/components/Templates/`
2. Follow existing template structure
3. Use the same data props
4. Support theme colors
5. Ensure responsive design
6. Add to `PortfolioPreview.jsx`
7. Add option in template selector

Example:
```javascript
// src/components/Templates/TemplateNine.jsx
import React from 'react';

const TemplateNine = ({ data }) => {
  const { personal, skills, projects, experience, education } = data;
  const themeColor = data.settings?.themeColor || '#667eea';
  
  return (
    <div>
      {/* Your template design */}
    </div>
  );
};

export default TemplateNine;
```

## Testing

Currently, the project doesn't have automated tests. Contributions to add testing are welcome!

### Manual Testing Checklist

- [ ] All form inputs work
- [ ] Live preview updates in real-time
- [ ] All templates render correctly
- [ ] Image uploads work
- [ ] Export functions work (PDF, HTML, React)
- [ ] Save/Load works
- [ ] Validation shows correct errors
- [ ] Undo/Redo works
- [ ] Drag-and-drop works
- [ ] Responsive on mobile
- [ ] Dark mode works
- [ ] Firebase auth works (if configured)

## Documentation

When adding features:
- Update README.md if needed
- Add to USER_GUIDE.md for user-facing features
- Update nextFeature.md to mark as completed
- Add JSDoc comments for complex functions

## Performance

- Optimize images before committing
- Avoid unnecessary re-renders
- Use React.memo for expensive components
- Lazy load heavy components

## Accessibility

- Use semantic HTML
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios

## Questions?

- Open a GitHub Discussion
- Comment on related issues
- Reach out to maintainers

## Recognition

Contributors will be:
- Listed in README.md
- Mentioned in release notes
- Credited in the app (future feature)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for making Portfolio Maker better! 🙌
