// ==========================================
// HISTORY PAGE JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // TIMELINE ANIMATION ON SCROLL
    // ==========================================
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                
                if (entry.target.classList.contains('left')) {
                    entry.target.style.transform = 'translateX(0)';
                } else {
                    entry.target.style.transform = 'translateX(0)';
                }
                
                // Animate the marker
                const marker = entry.target.querySelector('.timeline-marker');
                if (marker) {
                    marker.style.transform = 'scale(1)';
                    marker.style.opacity = '1';
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    timelineItems.forEach(item => {
        // Set initial state
        item.style.opacity = '0';
        item.style.transition = 'all 0.8s ease';
        
        if (item.classList.contains('left')) {
            item.style.transform = 'translateX(-50px)';
        } else {
            item.style.transform = 'translateX(50px)';
        }
        
        // Set marker initial state
        const marker = item.querySelector('.timeline-marker');
        if (marker) {
            marker.style.transform = 'scale(0)';
            marker.style.opacity = '0';
            marker.style.transition = 'all 0.5s ease 0.3s';
        }
        
        timelineObserver.observe(item);
    });

    // ==========================================
    // STRUGGLES & ACCOMPLISHMENTS ANIMATION
    // ==========================================
    const cards = document.querySelectorAll('.struggle-card, .accomplishment-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        cardObserver.observe(card);
    });

    // ==========================================
    // VALUES CARDS ANIMATION
    // ==========================================
    const valueCards = document.querySelectorAll('.value-card');
    
    const valueObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 150);
            }
        });
    }, {
        threshold: 0.2
    });

    valueCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.9)';
        card.style.transition = 'all 0.6s ease';
        valueObserver.observe(card);
    });

    // ==========================================
    // ESTABLISHMENT SECTION ANIMATION
    // ==========================================
    const establishmentContent = document.querySelector('.establishment-content');
    
    if (establishmentContent) {
        const establishmentObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                    
                    // Animate the icon rotation
                    const icon = entry.target.querySelector('.establishment-icon svg');
                    if (icon) {
                        icon.style.animation = 'rotate 3s ease-in-out';
                    }
                }
            });
        }, {
            threshold: 0.3
        });

        establishmentContent.style.opacity = '0';
        establishmentContent.style.transform = 'scale(0.95)';
        establishmentContent.style.transition = 'all 1s ease';
        establishmentObserver.observe(establishmentContent);
    }

    // ==========================================
    // PAGE HEADER PARALLAX
    // ==========================================
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const pageHeader = document.querySelector('.page-header');
        
        if (pageHeader) {
            const headerContent = pageHeader.querySelector('.container');
            if (headerContent && scrolled < window.innerHeight) {
                headerContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                headerContent.style.opacity = 1 - (scrolled / 500);
            }
        }
    });

    // ==========================================
    // TIMELINE LINE PROGRESS ANIMATION
    // ==========================================
    const timeline = document.querySelector('.timeline');
    
    if (timeline) {
        const timelineLine = document.createElement('div');
        timelineLine.className = 'timeline-progress';
        timelineLine.style.position = 'absolute';
        timelineLine.style.top = '0';
        timelineLine.style.left = '50%';
        timelineLine.style.transform = 'translateX(-50%)';
        timelineLine.style.width = '4px';
        timelineLine.style.height = '0';
        timelineLine.style.background = 'var(--primary-red)';
        timelineLine.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.8)';
        timelineLine.style.transition = 'height 0.3s ease';
        timelineLine.style.zIndex = '5';
        
        timeline.insertBefore(timelineLine, timeline.firstChild);
        
        window.addEventListener('scroll', () => {
            const timelineRect = timeline.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (timelineRect.top < windowHeight && timelineRect.bottom > 0) {
                const visibleHeight = Math.min(
                    windowHeight - timelineRect.top,
                    timeline.offsetHeight
                );
                const progress = Math.max(0, visibleHeight);
                timelineLine.style.height = progress + 'px';
            }
        });
    }

    // ==========================================
    // HOVER SOUND EFFECT (Optional)
    // ==========================================
    const allCards = document.querySelectorAll('.timeline-content, .struggle-card, .accomplishment-card, .value-card');
    
    allCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // ==========================================
    // SECTION INTRO FADE IN
    // ==========================================
    const sectionIntro = document.querySelector('.section-intro');
    
    if (sectionIntro) {
        const introObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.3
        });

        sectionIntro.style.opacity = '0';
        sectionIntro.style.transform = 'translateY(-30px)';
        sectionIntro.style.transition = 'all 0.8s ease';
        introObserver.observe(sectionIntro);
    }

    // ==========================================
    // ADD FLOATING ANIMATION TO TIMELINE MARKERS
    // ==========================================
    const markers = document.querySelectorAll('.timeline-marker');
    
    markers.forEach((marker, index) => {
        marker.style.animation = `float 3s ease-in-out infinite`;
        marker.style.animationDelay = `${index * 0.2}s`;
    });

    // Add float animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-10px);
            }
        }
        
        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);

    // ==========================================
    // CONSOLE MESSAGE
    // ==========================================
    console.log('%c HISTORY OF NOSTRA ', 'background: #ff0000; color: #fff; font-size: 16px; font-weight: bold; padding: 8px;');
    console.log('%c From Crimson Vengeance to Nostra eSports - A Journey of Resilience ', 'color: #ff0000; font-size: 12px;');
});
