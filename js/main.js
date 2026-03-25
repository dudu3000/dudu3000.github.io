// ==========================================
// CURATSTRALUCITOR - Main JavaScript File
// ==========================================

document.addEventListener('DOMContentLoaded', function () {

    // ---- Mobile Menu Toggle ----
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('open');
        });
        // Close menu when a link is clicked
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('open');
            });
        });
    }

    // ---- Active Navigation Link Highlight ----
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (
            linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html')
        ) {
            link.classList.add('active');
        }
    });

    // ---- Contact Form Validation (static - no server) ----
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // No server on GitHub Pages — prevent default
            const name    = this.querySelector('#name').value.trim();
            const email   = this.querySelector('#email').value.trim();
            const message = this.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                showToast('Vă rugăm să completați toate câmpurile obligatorii', 'error');
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showToast('Vă rugăm să introduceți o adresă de email validă', 'error');
                return;
            }
            showToast('Mulțumim! Mesajul vostru a fost trimis. Vă vom contacta în curând!', 'success');
            this.reset();
        });
    }

    // ---- Toast notification ----
    function showToast(message, type) {
        const existing = document.querySelector('.toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'toast toast-' + type;
        toast.textContent = message;
        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        });
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(30px)';
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    }

    // ---- Scroll-based Fade-in for cards ----
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

    document.querySelectorAll(
        '.feature-card, .pricing-card, .team-card, .gallery-item, .detail-box, .faq-item, .value-item, .expertise-item'
    ).forEach(el => observer.observe(el));

    // ---- Scroll-to-top button ----
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        scrollBtn.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
    });
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});

// ---- Inject dynamic styles ----
const dynStyle = document.createElement('style');
dynStyle.textContent = `
    /* Fade in animation */
    .fade-in { animation: fadeInUp 0.6s ease-out forwards; }
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to   { opacity: 1; transform: translateY(0);    }
    }

    /* Mobile nav open state */
    .nav-menu.active {
        display: flex !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        background: rgba(10, 14, 39, 0.98);
        padding: 2rem;
        border-bottom: 1px solid rgba(0,212,255,0.2);
        gap: 1rem;
        z-index: 999;
    }

    /* Hamburger open state */
    .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px,6px); }
    .hamburger.open span:nth-child(2) { opacity: 0; }
    .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px,-6px); }

    /* Scroll-to-top button */
    .scroll-to-top {
        position: fixed; bottom: 2rem; right: 2rem;
        width: 50px; height: 50px;
        background: linear-gradient(135deg, #00d4ff, #8338ec);
        color: #0a0e27; border: none; border-radius: 50%;
        cursor: pointer; font-size: 1.4rem; font-weight: bold;
        display: none; align-items: center; justify-content: center;
        z-index: 999; transition: all 0.3s ease;
        box-shadow: 0 0 20px rgba(0,212,255,0.3);
    }
    .scroll-to-top:hover { transform: scale(1.1); box-shadow: 0 0 30px rgba(0,212,255,0.6); }

    /* Toast notification */
    .toast {
        position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%) translateY(30px);
        padding: 1rem 2rem; border-radius: 50px; font-weight: 600;
        z-index: 10000; opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        max-width: 90vw; text-align: center;
    }
    .toast-success { background: linear-gradient(135deg, #00d4ff, #8338ec); color: #0a0e27; }
    .toast-error   { background: linear-gradient(135deg, #ff006e, #8338ec); color: #fff; }
`;
document.head.appendChild(dynStyle);

console.log('CuratStralucitor — website încărcat cu succes!');
