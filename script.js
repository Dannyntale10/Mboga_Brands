// ============================================
// mbogo BRANDS - Interactive JavaScript
// Modern 2025 UI/UX Features
// ============================================

// DOM Elements
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const serviceCards = document.querySelectorAll('.service-card');
const pricingCards = document.querySelectorAll('.pricing-card');
const serviceButtons = document.querySelectorAll('.service-btn');
const pricingButtons = document.querySelectorAll('.btn-pricing');

// ============================================
// Dark Mode Toggle
// ============================================
function initDarkMode() {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
        
        // Add ripple effect
        createRipple(darkModeToggle);
    });
}

// ============================================
// Navigation
// ============================================
function initNavigation() {
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Portfolio Filter
// ============================================
function initPortfolioFilter() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ============================================
// Service Cards Interactive Effects
// ============================================
function initServiceCards() {
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });

        // Click to scroll to contact
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('service-btn')) {
                window.location.href = '#contact';
            }
        });
    });

    // Service buttons
    serviceButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const serviceCard = button.closest('.service-card');
            const service = serviceCard.getAttribute('data-service');
            
            // Scroll to contact and highlight service
            window.location.href = '#contact';
            
            // After scroll, set the service in the form
            setTimeout(() => {
                const serviceSelect = document.getElementById('service');
                if (serviceSelect) {
                    const optionMap = {
                        'graphic-design': 'graphic-design',
                        'print': 'print-services',
                        'branding': 'brand-identity',
                        'digital': 'digital-design',
                        'packaging': 'packaging',
                        'strategy': 'brand-strategy'
                    };
                    if (optionMap[service]) {
                        serviceSelect.value = optionMap[service];
                    }
                }
            }, 500);
        });
    });
}

// ============================================
// Pricing Cards Interactive Effects
// ============================================
function initPricingCards() {
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('featured')) {
                card.style.transform = 'translateY(-10px)';
            }
        });

        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('featured')) {
                card.style.transform = 'translateY(0)';
            }
        });
    });

    // Pricing buttons
    pricingButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = '#contact';
            createRipple(button);
        });
    });
}

// ============================================
// Contact Form
// ============================================
function initContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show success message
            showNotification('Thank you! Your message has been sent. We\'ll get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', data);
        });

        // Add floating label effect
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });

            // Check if input has value on load
            if (input.value) {
                input.parentElement.classList.add('focused');
            }
        });
    }
}

// ============================================
// Scroll Animations
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.service-card, .portfolio-item, .pricing-card, .stat-item, .contact-item'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// ============================================
// Interactive Button Effects
// ============================================
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRipple(this, e);
        });
    });
}

// ============================================
// Ripple Effect
// ============================================
function createRipple(element, event = null) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    
    let x, y;
    if (event) {
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
    } else {
        x = rect.width / 2;
        y = rect.height / 2;
    }
    
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x - size / 2 + 'px';
    ripple.style.top = y - size / 2 + 'px';
    ripple.classList.add('ripple');
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ============================================
// Notification System
// ============================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        background: type === 'success' ? '#00ff88' : '#1a1a1a',
        color: type === 'success' ? '#0a0a0a' : '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
        zIndex: '10000',
        opacity: '0',
        transform: 'translateX(400px)',
        transition: 'all 0.3s ease',
        maxWidth: '300px',
        fontSize: '0.9rem',
        fontWeight: '500'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ============================================
// Parallax Effect for Hero
// ============================================
function initParallax() {
    const hero = document.querySelector('.hero');
    const shapes = document.querySelectorAll('.shape');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.3;
                shape.style.transform = `translateY(${rate * speed}px)`;
            });
        });
    }
}

// ============================================
// Cursor Effect (Optional Enhancement)
// ============================================
function initCursorEffect() {
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);
        
        Object.assign(cursor.style, {
            width: '20px',
            height: '20px',
            border: '2px solid #00ff88',
            borderRadius: '50%',
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: '9999',
            transition: 'transform 0.1s ease',
            display: 'none'
        });
        
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.display = 'block';
        });
        
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            cursor.style.left = cursorX - 10 + 'px';
            cursor.style.top = cursorY - 10 + 'px';
            requestAnimationFrame(animateCursor);
        }
        
        animateCursor();
        
        // Scale on hover over interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .service-card, .portfolio-item, .pricing-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
            });
        });
    }
}

// ============================================
// Counter Animation for Stats
// ============================================
function initCounterAnimation() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                const suffix = text.replace(/\d/g, '');
                
                if (number && !target.classList.contains('counted')) {
                    target.classList.add('counted');
                    animateCounter(target, 0, number, suffix, 2000);
                }
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => observer.observe(stat));
}

function animateCounter(element, start, end, suffix, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * easeOutCubic(progress));
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

// ============================================
// Loading Screen
// ============================================
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 2000);
    });
}

// ============================================
// Scroll Progress Indicator
// ============================================
function initScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            scrollProgress.style.width = scrolled + '%';
        });
    }
}

// ============================================
// Back to Top Button
// ============================================
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ============================================
// Floating Action Button
// ============================================
function initFAB() {
    const fabMain = document.getElementById('fabMain');
    const fabMenu = document.getElementById('fabMenu');
    
    if (fabMain && fabMenu) {
        fabMain.addEventListener('click', () => {
            fabMain.classList.toggle('active');
            fabMenu.classList.toggle('active');
        });
        
        // Close FAB menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!fabMain.contains(e.target) && !fabMenu.contains(e.target)) {
                fabMain.classList.remove('active');
                fabMenu.classList.remove('active');
            }
        });
        
        // Close FAB menu when clicking on a fab item
        const fabItems = fabMenu.querySelectorAll('.fab-item');
        fabItems.forEach(item => {
            item.addEventListener('click', () => {
                setTimeout(() => {
                    fabMain.classList.remove('active');
                    fabMenu.classList.remove('active');
                }, 300);
            });
        });
    }
}

// ============================================
// Testimonials Slider
// ============================================
function initTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const navButtons = document.querySelectorAll('.testimonial-nav-btn');
    let currentSlide = 0;
    
    function showSlide(index) {
        testimonialCards.forEach((card, i) => {
            card.style.opacity = i === index ? '1' : '0.5';
            card.style.transform = i === index ? 'scale(1)' : 'scale(0.95)';
        });
        
        navButtons.forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }
    
    navButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonialCards.length;
        showSlide(currentSlide);
    }, 5000);
    
    // Initialize
    showSlide(0);
}

// ============================================
// Newsletter Form
// ============================================
function initNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value;
            
            // Show success message
            showNotification('Thank you for subscribing! Check your email for confirmation.', 'success');
            
            // Reset form
            newsletterForm.reset();
            
            // In a real application, you would send this to a server
            console.log('Newsletter subscription:', email);
        });
    }
}

// ============================================
// FAQ Accordion
// ============================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active', !isActive);
        });
    });
}

// ============================================
// Portfolio Lightbox
// ============================================
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const lightboxDescription = document.getElementById('lightboxDescription');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    let currentIndex = 0;
    
    const portfolioData = [
        {
            title: 'Corporate Brand Identity',
            category: 'Branding',
            description: 'Complete brand identity redesign for a leading tech company in Nairobi. Included logo design, color palette, typography, and comprehensive brand guidelines.'
        },
        {
            title: 'Marketing Materials',
            category: 'Print',
            description: 'High-quality print design for marketing campaigns including flyers, brochures, and promotional materials with vibrant colors and engaging layouts.'
        },
        {
            title: 'Social Media Campaign',
            category: 'Digital',
            description: 'Comprehensive digital design package for social media platforms, including Instagram posts, Facebook ads, and Twitter graphics with consistent branding.'
        },
        {
            title: 'Product Packaging',
            category: 'Packaging',
            description: 'Eye-catching packaging design that stands out on shelves. Included structural design, label design, and 3D mockups for product presentation.'
        },
        {
            title: 'Logo & Identity',
            category: 'Branding',
            description: 'Modern logo design with multiple variations and color schemes. Delivered with complete brand identity guidelines and usage instructions.'
        },
        {
            title: 'Business Stationery',
            category: 'Print',
            description: 'Professional business stationery set including business cards, letterheads, and envelopes with premium finish and elegant design.'
        }
    ];
    
    function openLightbox(index) {
        currentIndex = index;
        const data = portfolioData[index];
        
        // Get image from portfolio item
        const portfolioImg = portfolioItems[index].querySelector('.portfolio-image img');
        if (portfolioImg) {
            lightboxImage.innerHTML = `<img src="${portfolioImg.src}" alt="${portfolioImg.alt}" style="width: 100%; height: 100%; object-fit: contain;">`;
        } else {
            // Fallback to placeholder if no image
            const placeholder = portfolioItems[index].querySelector('.portfolio-placeholder');
            if (placeholder) {
                lightboxImage.innerHTML = placeholder.outerHTML;
            }
        }
        lightboxTitle.textContent = data.title;
        lightboxCategory.textContent = data.category;
        lightboxDescription.textContent = data.description;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showNext() {
        currentIndex = (currentIndex + 1) % portfolioItems.length;
        openLightbox(currentIndex);
    }
    
    function showPrev() {
        currentIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
        openLightbox(currentIndex);
    }
    
    // Open lightbox on portfolio item click
    portfolioItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });
    
    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Navigation
    if (lightboxNext) {
        lightboxNext.addEventListener('click', (e) => {
            e.stopPropagation();
            showNext();
        });
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            showPrev();
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                showNext();
            } else if (e.key === 'ArrowLeft') {
                showPrev();
            }
        }
    });
}

// ============================================
// Process Section Animations
// ============================================
function initProcessAnimations() {
    const processSteps = document.querySelectorAll('.process-step');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 200);
            }
        });
    }, observerOptions);
    
    processSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
        step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(step);
    });
}

// ============================================
// Initialize All Features
// ============================================
function init() {
    initDarkMode();
    initNavigation();
    initPortfolioFilter();
    initServiceCards();
    initPricingCards();
    initContactForm();
    initScrollAnimations();
    initButtonEffects();
    initParallax();
    initCounterAnimation();
    initLoadingScreen();
    initScrollProgress();
    initBackToTop();
    initFAB();
    initTestimonials();
    initProcessAnimations();
    initNewsletter();
    initFAQ();
    initLightbox();
    
    // Optional: Uncomment to enable custom cursor
    // initCursorEffect();
    
    console.log('mbogo BRANDS website initialized successfully! 🐂');
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle page visibility for animations
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Restart animations if needed
        initScrollAnimations();
    }
});

