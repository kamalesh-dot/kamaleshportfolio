// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Fade in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state
fadeElements.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.menu-toggle') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Add active class to current section in navigation
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});
// Debug background images
function checkBackgroundImages() {
    const elements = [
        { selector: '.profile-image', name: 'Profile Image' },
        { selector: '.about-img', name: 'About Image' },
        { selector: '.project-1', name: 'Project 1 Image' },
        { selector: '.project-2', name: 'Project 2 Image' },
        { selector: '.project-3', name: 'Project 3 Image' }
    ];

    elements.forEach(item => {
        const element = document.querySelector(item.selector);
        if (element) {
            const style = window.getComputedStyle(element);
            const bgImage = style.backgroundImage;
            
            console.log(`${item.name}:`, bgImage);
            
            if (bgImage === 'none' || !bgImage.includes('url')) {
                console.warn(`${item.name} background not working!`);
                element.style.backgroundColor = 'var(--warm-red)';
                element.innerHTML = '<div style="color: white; text-align: center; padding: 20px;">Image Failed to Load</div>';
            }
        }
    });
}

// Check images when page loads
document.addEventListener('DOMContentLoaded', checkBackgroundImages);
/*new*/
// Extraordinary Animations JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Create Matrix Rain
    function createMatrixRain() {
        const matrix = document.createElement('div');
        matrix.className = 'matrix-rain';
        document.body.appendChild(matrix);
        
        function createChar() {
            const char = document.createElement('div');
            char.className = 'matrix-char';
            char.textContent = String.fromCharCode(33 + Math.random() * 94);
            char.style.left = Math.random() * 100 + 'vw';
            char.style.animationDuration = (Math.random() * 3 + 2) + 's';
            char.style.fontSize = (Math.random() * 10 + 10) + 'px';
            matrix.appendChild(char);
            
            setTimeout(() => {
                char.remove();
            }, 5000);
        }
        
        setInterval(createChar, 100);
    }
    
    // Create Fireflies
    function createFireflies() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        for (let i = 0; i < 15; i++) {
            const firefly = document.createElement('div');
            firefly.className = 'firefly';
            firefly.style.left = Math.random() * 100 + '%';
            firefly.style.top = Math.random() * 100 + '%';
            firefly.style.animationDelay = Math.random() * 8 + 's';
            hero.appendChild(firefly);
        }
    }
    
    // Particle Explosion on Click
    function createParticleExplosion(x, y) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
            particle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }
    
    // Cyber Grid
    function createCyberGrid() {
        const grid = document.createElement('div');
        grid.className = 'cyber-grid';
        document.body.appendChild(grid);
    }
    
    // Magnetic Button Effect
    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.btn, .project-link');
        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                btn.style.setProperty('--x', x + 'px');
                btn.style.setProperty('--y', y + 'px');
            });
        });
    }
    
    // Initialize all effects
    createMatrixRain();
    createFireflies();
    createCyberGrid();
    initMagneticButtons();
    
    // Add click explosion effect
    document.addEventListener('click', (e) => {
        createParticleExplosion(e.clientX, e.clientY);
    });
    
    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.skill-card, .project-card, .section-title').forEach(el => {
        observer.observe(el);
    });
});