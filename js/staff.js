// ==========================================
// STAFF PAGE JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // STAFF CARDS ANIMATION ON SCROLL
    // ==========================================
    const staffCards = document.querySelectorAll('.staff-card, .staff-card-small');
    
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
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    staffCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.8s ease';
        cardObserver.observe(card);
    });

    // ==========================================
    // SECTION LABELS ANIMATION
    // ==========================================
    const sectionLabels = document.querySelectorAll('.section-label');
    
    const labelObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
                
                // Animate icon
                const icon = entry.target.querySelector('.label-icon');
                if (icon) {
                    icon.style.animation = 'bounce 1s ease-in-out 3';
                }
            }
        });
    }, {
        threshold: 0.5
    });

    sectionLabels.forEach(label => {
        label.style.opacity = '0';
        label.style.transform = 'scale(0.8)';
        label.style.transition = 'all 0.6s ease';
        labelObserver.observe(label);
    });

    // ==========================================
    // RANK BADGES GLOW EFFECT
    // ==========================================
    const rankBadges = document.querySelectorAll('.rank-badge, .rank-badge-small');
    
    rankBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // ==========================================
    // STAFF NAME TYPING EFFECT
    // ==========================================
    function typewriterEffect(element, text, speed = 100) {
        let i = 0;
        const originalText = element.textContent;
        element.textContent = '';
        element.style.opacity = '1';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Apply typing effect to staff names when they come into view
    const staffNames = document.querySelectorAll('.staff-name, .staff-name-small');
    
    const nameObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.typed) {
                const text = entry.target.textContent;
                entry.target.dataset.typed = 'true';
                setTimeout(() => {
                    typewriterEffect(entry.target, text, 80);
                }, 300);
            }
        });
    }, {
        threshold: 0.5
    });

    staffNames.forEach(name => {
        nameObserver.observe(name);
    });

    // ==========================================
    // ACHIEVEMENT ITEMS ANIMATION
    // ==========================================
    const achievementItems = document.querySelectorAll('.achievement-item');
    
    achievementItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        const achievementObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, {
            threshold: 0.5
        });
        
        achievementObserver.observe(item);
    });

    // ==========================================
    // STAFF TAGS ANIMATION
    // ==========================================
    const tags = document.querySelectorAll('.tag');
    
    tags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0.8)';
        tag.style.transition = `all 0.4s ease ${index * 0.05}s`;
        
        const tagObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }
            });
        }, {
            threshold: 0.5
        });
        
        tagObserver.observe(tag);
    });

    // ==========================================
    // PHOTO PLACEHOLDER EFFECT
    // ==========================================
    const photoPlaceholders = document.querySelectorAll('.photo-placeholder, .photo-placeholder-small');
    
    photoPlaceholders.forEach(placeholder => {
        // Create animated border effect
        placeholder.style.position = 'relative';
        
        // Add pulse animation to placeholder
        placeholder.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 1s ease-in-out';
        });
        
        placeholder.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });

    // ==========================================
    // SECTION DESCRIPTION FADE IN
    // ==========================================
    const sectionDescriptions = document.querySelectorAll('.section-description');
    
    const descObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.3
    });

    sectionDescriptions.forEach(desc => {
        desc.style.opacity = '0';
        desc.style.transform = 'translateY(-20px)';
        desc.style.transition = 'all 0.8s ease';
        descObserver.observe(desc);
    });

    // ==========================================
    // PARALLAX EFFECT FOR STAFF PHOTOS
    // ==========================================
    window.addEventListener('scroll', () => {
        const staffPhotos = document.querySelectorAll('.staff-photo, .staff-photo-small');
        
        staffPhotos.forEach(photo => {
            const card = photo.closest('.staff-card, .staff-card-small');
            if (card) {
                const rect = card.getBoundingClientRect();
                const scrollPercent = (rect.top - window.innerHeight) / window.innerHeight;
                
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    photo.style.transform = `translateY(${scrollPercent * 20}px)`;
                }
            }
        });
    });

    // ==========================================
    // INTERACTIVE HOVER SOUND EFFECT (Visual)
    // ==========================================
    staffCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.width = '10px';
            ripple.style.height = '10px';
            ripple.style.background = 'rgba(255, 0, 0, 0.5)';
            ripple.style.borderRadius = '50%';
            ripple.style.top = '50%';
            ripple.style.left = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'rippleExpand 0.6s ease-out';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleExpand {
            to {
                width: 500px;
                height: 500px;
                opacity: 0;
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }
    `;
    document.head.appendChild(style);

    // ==========================================
    // IMAGE ERROR HANDLING
    // ==========================================
    const allStaffImages = document.querySelectorAll('.staff-photo, .staff-photo-small');
    
    allStaffImages.forEach(img => {
        img.addEventListener('error', function() {
            // Hide the image and show placeholder
            this.style.display = 'none';
            const placeholder = this.closest('.photo-placeholder, .photo-placeholder-small');
            if (placeholder) {
                placeholder.style.background = 'linear-gradient(135deg, var(--darker-gray), var(--light-gray))';
            }
        });
    });

    // ==========================================
    // LEADERSHIP INTRO ANIMATION
    // ==========================================
    const leadershipIntro = document.querySelector('.intro-text');
    
    if (leadershipIntro) {
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

        leadershipIntro.style.opacity = '0';
        leadershipIntro.style.transform = 'translateY(30px)';
        leadershipIntro.style.transition = 'all 1s ease';
        introObserver.observe(leadershipIntro);
    }

    // ==========================================
    // CONSOLE MESSAGE
    // ==========================================
    console.log('%c NOSTRA STAFF ', 'background: #ff0000; color: #fff; font-size: 16px; font-weight: bold; padding: 8px;');
    console.log('%c Meet the Leaders Behind the Legend ', 'color: #ff0000; font-size: 12px;');
});
