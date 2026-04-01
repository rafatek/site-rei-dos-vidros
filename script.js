document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const revealElements = document.querySelectorAll('.reveal, .reveal-right');
    revealElements.forEach(el => observer.observe(el));
    
    // Transparent Navbar on Top, Glass on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.background = 'rgba(10, 13, 20, 0.8)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.background = 'rgba(10, 13, 20, 0.2)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile Menu Toggle (Basic implementation)
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navbar.classList.toggle('mobile-active');
        });
    }
    
    // Close mobile menu on click
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navbar.classList.remove('mobile-active');
        });
    });
});
