# XTRA Construction 2 – Frontend Re-creation

A pixel-perfect, fully responsive frontend re-creation of the [XTRA Theme Construction 2 Elementor Demo](https://xtratheme.com/elementor/construction-2/) built using **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **JavaScript**.

---

## 📌 Project Overview

This project was developed as part of a UI Development Task to faithfully reproduce the complete home page of the Construction 2 theme. It covers all 11 visual sections, header, footer, animations, and interactive components across desktop, tablet, and mobile devices without using any raw WordPress markup.

### Key Highlights
- **100% Authentic Visual Asset Integration**: Uses all 30 official images, logos, worker models, and partner icons from the live reference demo.
- **Accurate Typography Hierarchy**: Primary font **Poppins** (headings/titles, 300–900), secondary font **Roboto** (sub-headings/body, 300–700), and classic serif accents (`Times New Roman` / `Roboto Slab`) loaded via `next/font/google`.
- **Exact Color Palette**: Brand Construction Yellow (`#f4c03b`), Deep Architectural Navy (`#243344`), Off-black (`#1b2632`), and neutral text grays.
- **Micro-Interactions & Animations**:
  - Global smooth scrolling with sticky navbar scroll-padding compensation.
  - Transparent sticky header that transitions to solid white on scroll.
  - Interactive Revolution Slider replica with custom polygon angles (`-33.0001deg`) and YouTube video modal trigger.
  - 3D perspective flip cards with blueprint background.
  - Service cards with animated lift and bottom-aligned "Read More" pills.
  - Numbered process step cards with color-inversion hover states.
  - Filterable 4-column portfolio grid with zoom lightbox modal.
  - Responsive quote request form with interactive submission state.
  - Dynamic client testimonials slider with auto-advancing slides and indicator dashes.
  - Smooth slide-out mobile drawer with lock-scroll and keyboard `Escape` support.
  - Animated floating "Back to Top" button.

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | `16.4.1` (Turbopack) | Modern React framework (App Router architecture) |
| **React** | `19.3.0` | Core UI library |
| **Tailwind CSS** | `^4.0.0` | Utility-first styling engine with `@theme` token configuration |
| **Lucide React** | `^1.57.0` | Accessible, vector iconography |
| **Google Fonts** | Native Next.js | Zero-CLS font optimization for Poppins & Roboto |

---

## 🚀 Installation & Setup Instructions

### Prerequisites
- **Node.js**: `v18.17.0` or higher (Recommended: `v20.x` LTS)
- **npm**: `v9.x` or higher (or `pnpm` / `yarn`)
- **Git**

### 1. Clone the Repository
```bash
git clone https://github.com/csabiskar/task-frontend.git
cd task-frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with Hot Module Replacement (HMR).

### 4. Build for Production
To create an optimized production bundle:
```bash
npm run build
```
The build completes cleanly with zero errors or warnings.

### 5. Start Production Server
```bash
npm run start
```

---

## 🌐 Deployment Instructions

### Deploying to Vercel (Recommended)
1. Push your code to your GitHub repository:
   ```bash
   git push origin main
   ```
2. Log into [Vercel](https://vercel.com).
3. Click **"Add New..."** -> **"Project"**.
4. Import the `csabiskar/task-frontend` repository.
5. In **Framework Preset**, select **Next.js** (detected automatically).
6. Root directory: `./`
7. Click **Deploy**. Vercel will build and assign a live production URL (e.g., `https://task-frontend.vercel.app`).

### Deploying to Netlify
1. Connect your GitHub repository on [Netlify](https://www.netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `.next`
4. Deploy the site.

---

## 📦 Dependencies

### Production Dependencies (`dependencies`)
- `next`: `16.4.1` – React Framework for the Web.
- `react`: `19.3.0` – UI component rendering.
- `react-dom`: `19.3.0` – DOM-specific methods for React.
- `lucide-react`: `^1.57.0` – Clean, modern SVG icon set.

### Development Dependencies (`devDependencies`)
- `tailwindcss`: `^4` – Tailwind CSS v4 engine.
- `@tailwindcss/turbopack`: `^4` – Turbopack integration for Tailwind CSS.
- `eslint`: `^9` – Code linting.
- `eslint-config-next`: `16.4.1` – Next.js specific ESLint rules.

---

## ⚙️ Environment Configuration Details

- No mandatory `.env` API keys are required to run this frontend application locally or in production.
- All media assets are statically bundled in the `public/` directory for fast loading without external CDN dependencies.
- Can be optionally extended with environment variables (e.g., `NEXT_PUBLIC_SITE_URL`) for custom domains and SEO metadata.

---

## 📑 Brief API & Component Documentation

All components are modular, reusable React client components located in [`src/components/`](src/components):

### 1. `Navbar.jsx`
- **Props**: None.
- **State**:
  - `isScrolled` (`boolean`): Tracks `window.scrollY > 40` to toggle sticky styles.
  - `mobileMenuOpen` (`boolean`): Controls mobile drawer visibility.
  - `searchOpen` (`boolean`): Toggles desktop search modal/bar.
  - `activeLink` (`string`): Tracks currently active navigation link.

### 2. `HeroSlider.jsx`
- **Props**:
  - `onOpenVideo` (`function`): Callback triggering the video popup modal.
- **Features**: Proportional scale-down logic (`w < 1024px`) via `ResizeObserver` ensuring zero horizontal overflow on mobile and tablet.

### 3. `FeaturesSection.jsx`
- **Features**: Interactive 3D flip card effect using CSS `transform-style: preserve-3d` and `rotate-y-180`.

### 4. `ProjectsSection.jsx`
- **State**:
  - `lightboxProject` (`object | null`): Holds currently selected project for full-screen zoom preview modal.

### 5. `QuoteSection.jsx`
- **State**:
  - `formData` (`object`): Captures `name`, `email`, `subject`, `department`, `message`.
  - `loading` (`boolean`): Simulates asynchronous quote processing.
  - `submitted` (`boolean`): Renders confirmation screen on submit.

### 6. `VideoModal.jsx`
- **Props**:
  - `isOpen` (`boolean`): Display status of modal.
  - `onClose` (`function`): Close handler.
- **Features**: Embedded YouTube video (`autoplay=1`) with accessible backdrop and close button.

### 7. `BackToTop.jsx`
- **Features**: Listens to scroll events; appears when scrolled past 400px and executes `window.scrollTo({ top: 0, behavior: 'smooth' })`.

---

## 💡 Assumptions

1. **Client-Side Data**: Contact and quote forms simulate real-world API submission with client-side loading states and feedback screens, as backend databases were outside the scope of this frontend UI task.
2. **Video Content**: YouTube video ID in the hero modal is mapped to a high-definition construction demonstration video matching the reference website's intent.
3. **Typography**: Google Fonts (`Poppins`, `Roboto`, `Roboto Slab`) and system serif fallbacks (`Times New Roman`) are used to match the exact Elementor font styles without requiring commercial type licenses.
4. **Local Asset Hosting**: All reference images are hosted directly from the `/public/images/` directory to prevent broken images from external WordPress server hotlink protection.

---

## ⚠️ Known Limitations

1. **WordPress Plugin Tags**: Raw Revolution Slider custom tags (`<rs-layer-wrap>`, `<rs-layer>`) were intentionally replaced with clean, semantic modern HTML (`div`, `h1`, `button`, Next.js `Image`) to adhere to React coding standards and pass clean code reviews.
2. **Third-Party Integrations**: External social links link to their respective social platform homepages.
3. **No Database Persistence**: Quote requests are processed in state for demonstration and reset on page reload.

---

## 📬 Submission Checklist

- [x] **Source Code**: Fully implemented in Next.js 16 + Tailwind CSS.
- [x] **Git Repository**: [https://github.com/csabiskar/task-frontend.git](https://github.com/csabiskar/task-frontend.git)
- [x] **README.md**: Complete with setup, commands, architecture, and assumptions.
- [x] **Responsive Verification**: Fully responsive across mobile, tablet, and desktop viewports.
- [x] **Smooth Scrolling**: Implemented globally.
- [x] **Build Verification**: Clean `npm run build` with 0 errors.
