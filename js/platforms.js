// ==========================================
// PLATFORMS PAGE JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // PLATFORM CARDS ANIMATION ON SCROLL
    // ==========================================
    const platformCards = document.querySelectorAll('.platform-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    platformCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.8s ease';
        cardObserver.observe(card);
    });

    // ==========================================
    // PLATFORM ICON ROTATION ON HOVER
    // ==========================================
    const platformIcons = document.querySelectorAll('.platform-icon');
    
    platformIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.animation = 'iconSpin 0.6s ease';
        });
        
        icon.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });

    // Add icon spin animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes iconSpin {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.15); }
            100% { transform: rotate(360deg) scale(1.1); }
        }
    `;
    document.head.appendChild(style);

    // ==========================================
    // RECRUITMENT SECTION ANIMATION
    // ==========================================
    const recruitmentContent = document.querySelector('.recruitment-content');
    
    if (recruitmentContent) {
        const recruitObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }
            });
        }, {
            threshold: 0.2
        });

        recruitmentContent.style.opacity = '0';
        recruitmentContent.style.transform = 'scale(0.95)';
        recruitmentContent.style.transition = 'all 1s ease';
        recruitObserver.observe(recruitmentContent);
    }

    // ==========================================
    // BENEFIT ITEMS ANIMATION
    // ==========================================
    const benefitItems = document.querySelectorAll('.benefit-item');
    
    const benefitObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.3
    });

    benefitItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        benefitObserver.observe(item);
    });

    // ==========================================
    // RECRUITMENT BADGE PULSE
    // ==========================================
    const recruitmentBadge = document.querySelector('.recruitment-badge');
    
    if (recruitmentBadge) {
        setInterval(() => {
            recruitmentBadge.style.animation = 'none';
            setTimeout(() => {
                recruitmentBadge.style.animation = 'pulse 0.5s ease';
            }, 10);
        }, 3000);
    }

    // ==========================================
    // PLATFORM BUTTONS RIPPLE EFFECT
    // ==========================================
    const platformButtons = document.querySelectorAll('.platform-button, .recruit-button');
    
    platformButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.pointerEvents = 'none';
            
            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left - 10) + 'px';
            ripple.style.top = (e.clientY - rect.top - 10) + 'px';
            ripple.style.animation = 'rippleExpand 0.6s ease-out';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleExpand {
            to {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // ==========================================
    // INTRO SECTION ANIMATION
    // ==========================================
    const introSection = document.querySelector('.platforms-intro');
    
    if (introSection) {
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

        introSection.style.opacity = '0';
        introSection.style.transform = 'translateY(30px)';
        introSection.style.transition = 'all 1s ease';
        introObserver.observe(introSection);
    }

    // ==========================================
    // CONTACT ICONS ANIMATION
    // ==========================================
    const contactIcons = document.querySelectorAll('.contact-icon');
    
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.5
    });

    contactIcons.forEach(icon => {
        icon.style.opacity = '0';
        icon.style.transform = 'scale(0.5)';
        icon.style.transition = 'all 0.5s ease';
        contactObserver.observe(icon);
    });

    // ==========================================
    // STAT COUNTER ANIMATION
    // ==========================================
    const stats = document.querySelectorAll('.stat');
    
    stats.forEach(stat => {
        stat.style.opacity = '0';
        stat.style.transform = 'scale(0.8)';
        stat.style.transition = 'all 0.4s ease';
        
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'scale(1)';
                    }, 300);
                }
            });
        }, {
            threshold: 0.5
        });
        
        statObserver.observe(stat);
    });

    // ==========================================
    // PLATFORM BADGES ANIMATION
    // ==========================================
    const platformBadges = document.querySelectorAll('.platform-badge');
    
    platformBadges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateX(-30px)';
        badge.style.transition = `all 0.6s ease ${index * 0.2}s`;
        
        const badgeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, {
            threshold: 0.5
        });
        
        badgeObserver.observe(badge);
    });

    // ==========================================
    // CTA WARNING BLINK EFFECT
    // ==========================================
    const ctaWarning = document.querySelector('.cta-warning');
    
    if (ctaWarning) {
        setInterval(() => {
            ctaWarning.style.opacity = '0.7';
            setTimeout(() => {
                ctaWarning.style.opacity = '1';
            }, 500);
        }, 2000);
    }

    // ==========================================
    // SMOOTH SCROLL FOR SECTION LABEL
    // ==========================================
    const sectionLabel = document.querySelector('.section-label');
    
    if (sectionLabel) {
        const labelObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.5
        });

        sectionLabel.style.opacity = '0';
        sectionLabel.style.transform = 'translateY(-20px)';
        sectionLabel.style.transition = 'all 0.8s ease';
        labelObserver.observe(sectionLabel);
    }

    // ==========================================
    // BUTTON HOVER SOUND EFFECT (Visual)
    // ==========================================
    platformButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });

    // ==========================================
    // CONSOLE MESSAGE
    // ==========================================
    console.log('%c NOSTRA PLATFORMS ', 'background: #ff0000; color: #fff; font-size: 16px; font-weight: bold; padding: 8px;');
    console.log('%c Connect With Us • Join the Elite ', 'color: #ff0000; font-size: 12px;');
});
