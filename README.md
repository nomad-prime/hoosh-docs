# Hoosh Marketing Website

This is the official marketing and documentation website for Hoosh, a powerful command-line AI assistant built in Rust.

## Overview

This VitePress-based website provides comprehensive marketing materials and documentation for the Hoosh project, including:

- 🏠 **Marketing Homepage** - Compelling value proposition and features
- 📖 **Comprehensive Documentation** - Installation, configuration, usage guides

## Structure

```
.
├── index.md                 # Main landing page
├── comparison.md           # Comparison with alternatives
├── guide/                  # Documentation directory
│   ├── index.md           # Documentation overview
│   ├── installation.md    # Installation instructions
│   ├── quick-start.md     # Quick start guide
│   ├── configuration.md   # Configuration reference
│   ├── backends.md        # AI backend information
│   ├── features.md        # Advanced features
│   └── security.md        # Security and permissions
├── .vitepress/
│   └── config.mts         # VitePress configuration
└── package.json           # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Hoosh installed (for linking/testing)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

The site will be available at `http://localhost:5173`

## Content Organization

### Marketing Material (Root Files)

- **index.md** - Landing page with hero section, features, and call-to-action
- **use-cases.md** - Industry-specific examples and ROI analysis
- **comparison.md** - Detailed comparison with ChatGPT, Copilot, Cody, etc.
- **faq.md** - Comprehensive FAQ covering all aspects

### Documentation (guide/ directory)

**Getting Started**
- Installation across all platforms
- Quick start for first-time users
- Troubleshooting guide

**Configuration**
- Backend setup and configuration
- API key management
- Advanced customization

**Advanced**
- Features deep-dive
- Security and permission system
- Custom agents and workflows

## Writing Guidelines

### Markdown Style

- Use clear, conversational language
- Include practical examples with code blocks
- Use emojis sparingly for visual breaks
- Create cross-references with relative links
- Include comparison tables where helpful

### Code Examples

```bash
# Installation example
hoosh --version

# Configuration example
hoosh config set default_backend anthropic
```

### Link Format

```markdown
[Linked Text](./guide/installation.md)
[External Link](https://github.com/nomad-prime/hoosh)
```

## Build & Deploy

### Local Development

```bash
npm run docs:dev
```

### Production Build

```bash
npm run docs:build
```

Output goes to `.vitepress/dist/`

### Deploy to GitHub Pages

```bash
# Build
npm run docs:build

# Deploy to gh-pages branch (if configured)
git add .vitepress/dist
git commit -m "Deploy documentation"
git push origin main
```

## File Descriptions

### Landing Page (index.md)

**Purpose**: First impression and value proposition
**Contains**:
- Hero section with tagline
- Feature highlights (6 key features)
- Getting started in 2 minutes
- Real-world examples
- Why Hoosh advantages

### Use Cases (use-cases.md)

**Purpose**: Show real-world applications
**Contains**:
- Individual developer scenarios
- Team workflows
- Industry-specific examples
- Cost comparisons
- Success stories

### Comparison (comparison.md)

**Purpose**: Help users choose Hoosh
**Contains**:
- Feature matrix comparison
- Detailed comparison with competitors
- Use case recommendations
- Cost analysis
- Migration guides

### FAQ (faq.md)

**Purpose**: Answer all common questions
**Contains**:
- General questions
- Installation & setup
- Configuration
- Usage & best practices
- Security & permissions
- Troubleshooting
- Advanced topics

### Documentation

**Installation** - Platform-specific installation instructions

**Quick Start** - Get users up and running in 5 minutes

**Configuration** - How to configure all aspects of Hoosh

**Backends** - In-depth guide to each AI backend

**Features** - Advanced capabilities and workflows

**Security** - Permission system, trust model, best practices

## Content Updates

### Adding New Pages

1. Create new `.md` file in appropriate directory
2. Update `.vitepress/config.mts` sidebar/nav as needed
3. Add internal cross-references
4. Test with `npm run docs:dev`

### Updating Existing Content

1. Edit the `.md` file
2. Changes auto-reload in dev server
3. Test links and formatting
4. Commit and push

## SEO & Meta Tags

The site uses VitePress's built-in SEO support. Key metadata:

- **Title**: "Hoosh - AI-Powered Development Assistant"
- **Description**: Clear, compelling product description
- **Keywords**: Implied through content

For social media, the homepage has:
- Clear value proposition
- Compelling hero section
- Feature highlights
- Call-to-action buttons

## Customization

### Branding

Edit `.vitepress/config.mts`:
```typescript
title: "Hoosh - AI-Powered Development Assistant"
description: "Your product description..."
logo: '/logo.svg'  // Add logo image
```

### Colors & Styling

VitePress default theme (can be customized in `.vitepress/theme/index.ts`)

### Navigation

Update `nav` and `sidebar` arrays in `.vitepress/config.mts`

## Testing

### Local Testing

```bash
npm run docs:dev
# Visit http://localhost:5173
# Test all navigation links
# Check markdown rendering
```

### Link Checking

Ensure all internal links work:
- Documentation links
- Cross-references
- GitHub links

## Contributing

To improve the website:

1. Fork the repository
2. Create a feature branch
3. Make improvements
4. Test locally with `npm run docs:dev`
5. Submit a pull request

## Deployment

### GitHub Pages

Configure in repository settings to deploy from `main` branch, `/` (root) directory.

### Custom Domain

Add `CNAME` file with your domain:
```
hoosh.dev
```

## Statistics

- **Pages**: 13
- **Sections**: 7
- **Code examples**: 50+
- **Comparison tables**: 10+
- **Real-world use cases**: 20+
- **FAQs**: 100+

## Resources

- [VitePress Documentation](https://vitepress.dev)
- [Markdown Guide](https://www.markdownguide.org/)
- [Hoosh GitHub](https://github.com/nomad-prime/hoosh)

## License

This documentation and website are part of the Hoosh project, licensed under GNU General Public License v3.0.

## Support

- 📖 Check the [documentation](./guide/)
- 💬 [Open a discussion](https://github.com/nomad-prime/hoosh/discussions)
- 🐛 [Report an issue](https://github.com/nomad-prime/hoosh/issues)

---

**Last Updated**: 2024
**Maintained by**: Hoosh Contributors
