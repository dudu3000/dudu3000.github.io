// ==========================================
// CLEANSHINE - Main JavaScript File
// ==========================================

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="/"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Navigation will be handled by Express routes
        });
    });

    // Mobile Menu Toggle (if you add one in the future)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Form validation for contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = this.querySelector('#name').value.trim();
            const email = this.querySelector('#email').value.trim();
            const message = this.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                e.preventDefault();
                alert('Vă rugăm să completați toate câmpurile obligatorii');
                return false;
            }

            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('Vă rugăm să introduceți o adresă de email validă');
                return false;
            }
        });
    }

    // Add scroll animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const cards = document.querySelectorAll('.feature-card, .pricing-card, .team-card, .gallery-item, .detail-box, .faq-item');
    cards.forEach(card => {
        observer.observe(card);
    });

    // Active navigation link highlight
    const currentLocation = location.pathname;
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Parallax effect for hero section (optional)
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// Add fade-in animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .nav-menu.active {
        display: flex !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        background: rgba(10, 14, 39, 0.95);
        padding: 2rem;
        border-bottom: 1px solid rgba(0, 212, 255, 0.2);
    }
`;
document.head.appendChild(style);

// Handle form submission feedback
function setupFormFeedback() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // The form will submit naturally after validation
        // You can add AJAX submission here if needed
    });
}

setupFormFeedback();

// Image placeholder click handler
document.addEventListener('click', function(e) {
    if (e.target.closest('.gallery-item') || e.target.closest('.team-image')) {
        // Could add modal/lightbox functionality here
        console.log('Image clicked - add lightbox functionality');
    }
});

// Service card hover effect
const serviceCards = document.querySelectorAll('.service-item');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = 'rgba(0, 212, 255, 0.6)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'rgba(0, 212, 255, 0.2)';
    });
});

// Scroll to top button (optional)
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-to-top';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #00d4ff, #8338ec);
    color: #0a0e27;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    display: none;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

console.log('Website CuratStralucitor a fost încărcat cu succes!');
