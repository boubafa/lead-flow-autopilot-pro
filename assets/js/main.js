
// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// FAQ toggle
function toggleFAQ(trigger) {
    const faqItem = trigger.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Video play function (placeholder)
function playVideo() {
    alert('Démonstration vidéo à venir bientôt !');
}

// Smooth scrolling for all anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const mobileMenu = document.getElementById('mobileMenu');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (mobileMenu && !mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });
    
    // Add scroll effect to header
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.8)';
            header.style.backdropFilter = 'blur(12px)';
        }
        
        lastScrollY = window.scrollY;
    });
    
    // Add animation on scroll for workflow steps
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe workflow steps
    document.querySelectorAll('.step-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe other elements
    document.querySelectorAll('.problem-card, .solution-card, .pricing-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Testimonials carousel pause on hover
    const testimonialsTrack = document.querySelector('.testimonials-track');
    if (testimonialsTrack) {
        testimonialsTrack.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        testimonialsTrack.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(20px)';
    document.body.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    }, 100);
    
    // Button click animations
    document.querySelectorAll('.btn-primary, .btn-outline, .btn-pricing').forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-card');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    // Add hover effects for cards
    document.querySelectorAll('.step-card, .problem-card, .solution-card, .pricing-card, .testimonial-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Performance optimization: Debounce scroll events
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

// Optimize scroll event handling
const debouncedScrollHandler = debounce(function() {
    // Scroll-based animations and effects
    const scrollY = window.scrollY;
    
    // Update header transparency
    const header = document.querySelector('.header');
    if (header) {
        const opacity = Math.min(0.95, 0.8 + (scrollY / 500) * 0.15);
        header.style.background = `rgba(255, 255, 255, ${opacity})`;
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Preload critical resources
window.addEventListener('load', function() {
    // Preload images that might be needed
    const criticalImages = [
        // Add any critical image URLs here
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Error handling for external links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.href && e.target.href.includes('http')) {
        // Add some basic error handling for external links
        e.target.addEventListener('error', function() {
            console.warn('Failed to load external link:', e.target.href);
        });
    }
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Handle keyboard navigation for mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
});

// Focus management for accessibility
document.addEventListener('focusin', function(e) {
    // Add focus styles for keyboard navigation
    if (e.target.matches('button, a, input, textarea, select')) {
        e.target.style.outline = '2px solid #3b82f6';
        e.target.style.outlineOffset = '2px';
    }
});

document.addEventListener('focusout', function(e) {
    // Remove focus styles
    if (e.target.matches('button, a, input, textarea, select')) {
        e.target.style.outline = '';
        e.target.style.outlineOffset = '';
    }
});

// Console greeting
console.log(`
🚀 Lead Flow Autopilot Pro
   Développé par Boubacar Fall
   
   Système d'automatisation IA pour la prospection B2B
   
   Pour plus d'informations: https://cal.com/boubatest/30min
`);
