# Solterix Holding Inc.

A premium landing page for Solterix Holding Inc., a Delaware C-Corp that partners with founders to build platforms for wellness and sustainability.

## 🚀 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/solterix-holding)

### Quick Deploy Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/solterix-holding.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite framework
   - Click "Deploy"

3. **Done!** Your site will be live at `https://your-project.vercel.app`

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
solterix-holding/
├── public/                 # Static assets (images)
│   ├── hero_interconnected.jpg
│   ├── fle_soley_product.jpg
│   ├── solterica_mystical.jpg
│   └── solterraform_nature_bg.jpg
├── src/
│   ├── components/         # Reusable components
│   │   └── Navigation.tsx
│   ├── sections/           # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── PartnershipSection.tsx
│   │   ├── CapabilitiesSection.tsx
│   │   ├── ScalingSection.tsx
│   │   ├── PrototypingSection.tsx
│   │   ├── RDSection.tsx
│   │   └── ContactSection.tsx
│   ├── App.tsx            # Main app component
│   ├── App.css            # App styles
│   ├── index.css          # Global styles
│   └── main.tsx           # Entry point
├── index.html             # HTML template
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind config
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite config
└── vercel.json            # Vercel deployment config
```

## 🎨 Design System

### Colors
- **Primary Dark**: `#0B0F17` (background)
- **Light**: `#F6F7F9` (contact section)
- **Mint Accent**: `#B8E2C8` (CTAs, highlights)
- **Text Primary**: `#FFFFFF`
- **Text Muted**: `rgba(255,255,255,0.72)`

### Typography
- **Headings**: Montserrat (700-800 weight)
- **Body**: Inter (400-500 weight)

### Sections
1. **Hero** — SOLTERIX HOLDING INC. / PLATFORMS FOR REAL LIFE
2. **Approach** — We build with founders (4 phases)
3. **Capabilities** — 8 capabilities in 2 columns
4. **Portfolio** — Scaling, Prototyping, R&D
5. **Contact** — Let's build what's next

## 📝 Content

### Portfolio Companies
- **Flè Solèy** (Scaling) — [www.flesoley.com](https://www.flesoley.com)
- **Solterraform** (Prototyping) — Sustainability platform
- **Solterica AI** (R&D) — Spiritual guidance platform

### Contact
- Email: admin@solterixinc.com

## ⚙️ Tech Stack

- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: GSAP + ScrollTrigger
- **Icons**: Lucide React
- **UI Components**: shadcn/ui

## 📄 License

© 2025 Solterix Holding, Inc. All rights reserved.
