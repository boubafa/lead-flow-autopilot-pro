
// Global variables
let mobileMenuOpen = false;
const faqStates = [];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize application
function initializeApp() {
    setupScrollEffects();
    setupSmoothScrolling();
    initializeFAQs();
    setupMobileMenu();
    setupAnimations();
    console.log('Site initialized successfully');
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
        toggleMobileMenu();
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;
    
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenuOpen) {
        mobileMenu.classList.add('active');
        body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.remove('active');
        body.style.overflow = '';
    }
}

function setupMobileMenu() {
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (mobileMenuOpen && 
            !mobileMenu.contains(event.target) && 
            !mobileMenuBtn.contains(event.target)) {
            toggleMobileMenu();
        }
    });
    
    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileMenuOpen) {
            toggleMobileMenu();
        }
    });
}

// FAQ functionality
function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const currentItem = faqItems[index];
    
    if (!currentItem) return;
    
    const isActive = currentItem.classList.contains('active');
    
    // Close all FAQs
    faqItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked FAQ if it wasn't active
    if (!isActive) {
        currentItem.classList.add('active');
    }
}

function initializeFAQs() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
        faqStates[index] = false;
    });
}

// Calendly integration
function openCalendly() {
    const calendlyUrl = 'https://cal.com/boubatest/30min';
    window.open(calendlyUrl, '_blank');
}

// Scroll effects
function setupScrollEffects() {
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Header background opacity
        if (scrollTop > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.8)';
            header.style.boxShadow = 'none';
        }
        
        // Scroll animations
        animateOnScroll();
        
        lastScrollTop = scrollTop;
    });
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.problem-card, .solution-card, .workflow-step, .testimonial-card, .faq-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate-fade-in-up');
        }
    });
}

// Setup smooth scrolling for all internal links
function setupSmoothScrolling() {
    document.addEventListener('click', function(event) {
        const target = event.target.closest('a[href^="#"], button[onclick*="scrollToSection"]');
        if (target) {
            event.preventDefault();
            
            // Extract section ID from onclick or href
            let sectionId = '';
            if (target.onclick) {
                const onclickStr = target.onclick.toString();
                const match = onclickStr.match(/scrollToSection\(['"](.+?)['"]\)/);
                if (match) {
                    sectionId = match[1];
                }
            } else if (target.href) {
                sectionId = target.href.split('#')[1];
            }
            
            if (sectionId) {
                scrollToSection(sectionId);
            }
        }
    });
}

// Animation setup
function setupAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements
    const elementsToAnimate = document.querySelectorAll('.problem-card, .solution-card, .workflow-step, .offre-card, .demo-card, .stat, .testimonial-card, .faq-item, .about-card, .contact-method, .guarantee-card');
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
    
    // Add initial opacity to elements
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });
    
    // When elements get the animate class, make them visible
    const style = document.createElement('style');
    style.textContent = `
        .animate-fade-in-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimized scroll handler
const optimizedScrollHandler = throttle(function() {
    animateOnScroll();
}, 100);

// Add optimized scroll listener
window.addEventListener('scroll', optimizedScrollHandler);

// Contact form handling (if needed in the future)
function handleContactForm(event) {
    event.preventDefault();
    // Contact form logic would go here
    console.log('Contact form submitted');
}

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    console.log('Event tracked:', eventName, eventData);
    // Analytics code would go here
}

// Track CTA clicks
document.addEventListener('click', function(event) {
    if (event.target.closest('.animated-light-btn')) {
        trackEvent('CTA_CLICK', {
            button: event.target.textContent.trim(),
            section: event.target.closest('section')?.id || 'unknown'
        });
    }
});

// Error handling
window.addEventListener('error', function(event) {
    console.error('JavaScript error:', event.error);
    // Error reporting would go here
});

// Console welcome message
console.log('%c🚀 Lead Flow Autopilot Pro', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
console.log('%cSite développé avec ❤️ par Boubacar Fall', 'color: #8b5cf6; font-size: 14px;');
