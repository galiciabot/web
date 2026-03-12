// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 0';
        nav.style.background = 'rgba(15, 17, 21, 0.95)';
    } else {
        nav.style.padding = '0';
        nav.style.background = 'rgba(15, 17, 21, 0.8)';
    }
});

// Update Active Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Update active link manually on click
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Reveal animations on scroll (Simple Implementation)
const revealElements = document.querySelectorAll('.feature-card, .pricing-card');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < triggerBottom) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Initial state for reveal
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
});

window.addEventListener('scroll', revealOnScroll);
// Asociación Section "Leer más" functionality
document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.querySelector('.btn-read-more');
    const expandableContent = document.querySelector('.asociacion-expandable');

    if (readMoreBtn && expandableContent) {
        readMoreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            expandableContent.classList.toggle('active');

            if (expandableContent.classList.contains('active')) {
                readMoreBtn.textContent = 'Leer menos';
            } else {
                readMoreBtn.textContent = 'Leer más';
                // Scroll back to section top when closing
                document.getElementById('asociacion').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
