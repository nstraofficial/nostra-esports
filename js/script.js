// ==========================================
// NOSTRA ESPORTS - MAIN JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // MOBILE NAVIGATION TOGGLE
    // ==========================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // ==========================================
    // NAVBAR SCROLL EFFECT
    // ==========================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 4px 20px rgba(255, 0, 0, 0.3)';
        } else {
            navbar.style.boxShadow = '0 4px 30px rgba(255, 0, 0, 0.5)';
        }

        lastScroll = currentScroll;
    });

    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==========================================
    // SCROLL REVEAL ANIMATIONS
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animation
    document.querySelectorAll('.intro-text, .stat-box, .principle, .motto-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // ==========================================
    // COUNTER ANIMATION FOR STATS
    // ==========================================
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = counter.textContent;
            const numericValue = parseInt(target.replace(/\D/g, ''));
            const suffix = target.replace(/[0-9]/g, '');
            const duration = 2000;
            const increment = numericValue / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < numericValue) {
                    counter.textContent = Math.floor(current) + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            // Start animation when element is visible
            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && current === 0) {
                        updateCounter();
                    }
                });
            }, { threshold: 0.5 });

            counterObserver.observe(counter);
        });
    };

    animateCounters();

    // ==========================================
    // PARALLAX EFFECT FOR HERO
    // ==========================================
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                heroContent.style.opacity = 1 - (scrolled / 600);
            }
        }
    });

    // ==========================================
    // RANDOM PARTICLE EFFECT
    // ==========================================
    const createParticle = () => {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 0, 0, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        particle.style.pointerEvents = 'none';
        particle.style.animation = `particleRise ${Math.random() * 3 + 2}s linear`;
        
        hero.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 5000);
    };

    // Create particles periodically
    setInterval(createParticle, 300);

    // Add particle animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleRise {
            to {
                transform: translateY(-100vh);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ==========================================
    // ACTIVE NAVIGATION HIGHLIGHTING
    // ==========================================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
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

    // ==========================================
    // TYPING EFFECT FOR TAGLINE
    // ==========================================
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        tagline.style.opacity = '1';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };

        // Start typing after hero loads
        setTimeout(typeWriter, 1000);
    }

    // ==========================================
    // MOUSE GLOW EFFECT
    // ==========================================
    document.addEventListener('mousemove', (e) => {
        const glow = document.createElement('div');
        glow.style.position = 'fixed';
        glow.style.width = '200px';
        glow.style.height = '200px';
        glow.style.borderRadius = '50%';
        glow.style.background = 'radial-gradient(circle, rgba(255, 0, 0, 0.1), transparent 70%)';
        glow.style.pointerEvents = 'none';
        glow.style.left = e.clientX - 100 + 'px';
        glow.style.top = e.clientY - 100 + 'px';
        glow.style.transition = 'opacity 0.3s';
        glow.style.zIndex = '1';
        
        document.body.appendChild(glow);
        
        setTimeout(() => {
            glow.style.opacity = '0';
            setTimeout(() => glow.remove(), 300);
        }, 100);
    });

    // ==========================================
    // CONSOLE WELCOME MESSAGE
    // ==========================================
    console.log('%c NOSTRA ESPORTS ', 'background: #ff0000; color: #fff; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c Strike Fast • Strike Hard • Leave No Survivors ', 'color: #ff0000; font-size: 14px; font-weight: bold;');

});
