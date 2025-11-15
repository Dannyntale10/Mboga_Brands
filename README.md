# mbogo BRANDS - Modern Website

A cutting-edge, modern website for **mbogo BRANDS**, a graphics, design, and branding company based in Nairobi, Kenya. Built with 2025 UI/UX trends and best practices.

## 🚀 Features

### Modern 2025 UI/UX Design
- **Glassmorphism** - Frosted glass effects throughout the interface
- **Neumorphism** - Soft, tactile interface elements in light mode
- **Dark/Light Mode Toggle** - Seamless theme switching with localStorage persistence
- **Smooth Animations** - Micro-interactions and scroll-triggered animations
- **Interactive Elements** - Clickable buttons with ripple effects
- **Animated SVG Graphics** - Print, design, and branding illustrations in hero section
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Bento Box Layouts** - Modern grid-based design patterns
- **3D Design Elements** - Depth and dimension in UI components

### Complete Website Sections

1. **Hero Section**
   - Eye-catching introduction with animated SVG graphics
   - Parallax scrolling effects
   - Call-to-action buttons with hover animations

2. **Services Section**
   - 6 service cards with unique hover effects
   - SVG icons for each service
   - Interactive "Learn More" buttons

3. **Portfolio Section**
   - 6 portfolio items across different categories
   - Filterable gallery (All, Branding, Print, Digital, Packaging)
   - Portfolio lightbox modal with image navigation
   - Smooth fade animations

4. **Pricing Section**
   - Transparent pricing in Kenyan Shillings (KES)
   - 6 pricing cards with detailed features
   - "Most Popular" badge highlighting
   - Interactive hover effects

5. **Testimonials Section**
   - Client testimonials with ratings
   - Auto-rotating slider
   - Navigation dots

6. **Process Section**
   - 5-step timeline visualization
   - Scroll-triggered animations
   - Unique gradient step numbers

7. **About Section**
   - Company information
   - Animated statistics counter
   - Visual brand preview

8. **Newsletter Section**
   - Email subscription form
   - Modern gradient background with animated orbs
   - Success notifications

9. **Client Logos Section**
   - Showcase of trusted brands
   - Glassmorphism card effects

10. **FAQ Section**
    - Accordion-style questions
    - Smooth expand/collapse animations
    - One item open at a time

11. **Contact Section**
    - Interactive contact form
    - Contact information cards
    - Service selection dropdown

12. **Footer**
    - Social media links with SVG icons
    - Quick navigation links
    - Company information

### Interactive Features

- **Dark Mode Toggle** - Top-right corner button with sun/moon icons
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Smooth Scrolling** - Anchor links with smooth scroll behavior
- **Scroll Progress Indicator** - Visual progress bar at top of page
- **Back to Top Button** - Floating button appears on scroll
- **Floating Action Button (FAB)** - Quick access to Call, Email, Get Quote, WhatsApp
- **Loading Screen** - Animated logo with progress bar
- **Portfolio Lightbox** - Full-screen image viewer with navigation
- **Form Validation** - Contact and newsletter forms with validation
- **Ripple Effects** - Click animations on buttons
- **Counter Animations** - Statistics animate on scroll

## 🎨 Design & Branding

### Color Palette
- **Primary Green**: `#00ff88` (Company brand color)
- **Complementary Colors**: Purple, Blue, Cyan, Orange, Pink, Yellow
- **Dark Background**: `#0a0a0a`
- **Light Background**: `#ffffff`

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Heading Font**: Space Grotesk (Google Fonts)

### Logo
- SVG vector logo with 3D effects
- Responsive sizing
- Fallback PNG version included

## 📦 Installation & Setup

This is a **static website** - no build process or dependencies required!

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dannyntale10/Mboga_Brands.git
   cd Mboga_Brands
   ```

2. **Open directly in browser:**
   ```bash
   # Simply open index.html in your web browser
   ```

3. **Using Python HTTP Server:**
   ```bash
   python3 -m http.server 8000
   # Then visit: http://localhost:8000
   ```

4. **Using Node.js:**
   ```bash
   npx http-server
   # Then visit: http://localhost:8080
   ```

5. **Using PHP:**
   ```bash
   php -S localhost:8000
   # Then visit: http://localhost:8000
   ```

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Desktop**: Full layout with all features (1200px+)
- **Tablet**: Adjusted grid layouts (768px - 1024px)
- **Mobile**: Stacked layout with mobile menu (320px - 768px)
- **Small Mobile**: Optimized for small screens (320px - 480px)

## 🧪 Testing Checklist

### Core Features
- [x] Dark mode toggle works and saves preference
- [x] Mobile navigation menu functions
- [x] Smooth scrolling to sections
- [x] Portfolio filter buttons work
- [x] Portfolio lightbox opens and navigates
- [x] Contact form validation
- [x] Newsletter subscription form
- [x] FAQ accordion expand/collapse
- [x] Testimonials slider auto-rotates
- [x] Scroll animations trigger correctly
- [x] All buttons have ripple effects
- [x] Social media links work
- [x] FAB quick actions work
- [x] Back to top button appears on scroll

### Browser Compatibility
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 💰 Pricing Information

All pricing displayed in Kenyan Shillings (KES):

- **Logo Design**: KES 15,000 - 50,000
- **Complete Brand Identity**: KES 80,000 - 200,000 (Most Popular)
- **Print Services**: KES 5,000 - 150,000
- **Packaging Design**: KES 40,000 - 120,000
- **Digital Design**: KES 20,000 - 100,000
- **Brand Strategy**: KES 150,000+

## 🔧 Customization Guide

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-green: #00ff88;
    --bg-dark: #0a0a0a;
    --accent-purple: #a855f7;
    --accent-blue: #3b82f6;
    /* ... more colors */
}
```

### Updating Content
- **Text Content**: Edit `index.html`
- **Portfolio Items**: Add/remove items in the portfolio grid
- **Pricing**: Update pricing cards in the pricing section
- **Services**: Modify service cards in services section
- **Contact Info**: Update contact details in contact section

### Modifying Animations
- **Animation Speed**: Adjust `transition` and `animation` durations in `styles.css`
- **Scroll Animations**: Modify Intersection Observer settings in `script.js`
- **Hover Effects**: Customize hover states in CSS

### Adding Portfolio Items
1. Add HTML structure in portfolio grid:
```html
<div class="portfolio-item" data-category="category-name">
    <div class="portfolio-image">
        <img src="image-url" alt="Project Name" loading="lazy">
    </div>
    <div class="portfolio-overlay">
        <h3 class="portfolio-title">Project Title</h3>
        <p class="portfolio-category">Category</p>
    </div>
</div>
```

2. Add corresponding data in `script.js`:
```javascript
{
    title: 'Project Title',
    category: 'Category',
    description: 'Project description...'
}
```

## 📝 File Structure

```
Mboga_Brands/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete stylesheet with animations
├── script.js           # All interactive JavaScript functionality
├── logo.svg            # SVG vector logo
├── logo.png            # PNG fallback logo
└── README.md           # This documentation file
```

## 🌟 Standout Features

1. **Modern 2025 Design Trends**
   - Glassmorphism and Neumorphism
   - Bento box layouts
   - 3D design elements
   - Micro-interactions

2. **Enhanced User Experience**
   - Loading screen with progress
   - Scroll progress indicator
   - Floating action button
   - Back to top button
   - Smooth animations throughout

3. **Interactive Portfolio**
   - 6 portfolio items
   - Category filtering
   - Lightbox modal with navigation
   - Keyboard support (arrow keys)

4. **Complete Business Features**
   - Transparent pricing in KES
   - Client testimonials slider
   - FAQ accordion
   - Newsletter subscription
   - Contact form with validation

5. **Brand Consistency**
   - Company green color (#00ff88) throughout
   - Complementary color palette
   - Consistent typography
   - Professional SVG logo

## 🚀 Performance

- **No External Dependencies** (except Google Fonts)
- **Optimized CSS** - Efficient animations and transitions
- **Lightweight JavaScript** - Minimal code footprint
- **Lazy Loading Images** - Portfolio images load on demand
- **Fast Loading Times** - Static files, no build process

## 🔒 Browser Storage

The website uses `localStorage` to save:
- Dark/Light mode preference
- User theme selection persists across sessions

## 📞 Contact Information

- **Email**: info@mbogobrands.com
- **Phone**: +254 700 000 000
- **Location**: Nairobi, Kenya
- **Working Hours**: Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM

## 🌐 Social Media

- Facebook: [@mbogobrands](https://facebook.com/mbogobrands)
- Instagram: [@mbogobrands](https://instagram.com/mbogobrands)
- Twitter: [@mbogobrands](https://twitter.com/mbogobrands)
- LinkedIn: [mbogo BRANDS](https://linkedin.com/company/mbogobrands)
- YouTube: [@mbogobrands](https://youtube.com/@mbogobrands)
- WhatsApp: +254 700 000 000

## 📄 License

This project is proprietary and belongs to mbogo BRANDS.

## 👨‍💻 Development

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with variables, animations, and responsive design
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation
- **SVG** - Scalable vector graphics for logo and icons

### Code Structure
- **Modular JavaScript** - Functions organized by feature
- **CSS Variables** - Easy theme customization
- **Semantic HTML** - Accessible and SEO-friendly
- **Responsive First** - Mobile-first approach

---

**Built with modern 2025 web technologies**  
**Company: mbogo BRANDS - Create. Print. Inspire.**  
**Location: Nairobi, Kenya**
