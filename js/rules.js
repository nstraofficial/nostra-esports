// ==========================================
// RULES PAGE JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // RULE CARDS ANIMATION ON SCROLL
    // ==========================================
    const ruleCards = document.querySelectorAll('.rule-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    ruleCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-50px)';
        card.style.transition = 'all 0.8s ease';
        cardObserver.observe(card);
    });

    // ==========================================
    // RULE NUMBER COUNTER ANIMATION
    // ==========================================
    const ruleNumbers = document.querySelectorAll('.rule-number');
    
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.counted) {
                const targetNumber = parseInt(entry.target.textContent);
                let currentNumber = 0;
                const increment = targetNumber / 20;
                
                const counter = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= targetNumber) {
                        entry.target.textContent = targetNumber.toString().padStart(2, '0');
                        clearInterval(counter);
                    } else {
                        entry.target.textContent = Math.floor(currentNumber).toString().padStart(2, '0');
                    }
                }, 50);
                
                entry.target.dataset.counted = 'true';
            }
        });
    }, {
        threshold: 0.5
    });

    ruleNumbers.forEach(number => {
        numberObserver.observe(number);
    });

    // ==========================================
    // INTRO WARNING PULSE ANIMATION
    // ==========================================
    const introWarning = document.querySelector('.intro-warning');
    
    if (introWarning) {
        const warningObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'pulse 2s ease-in-out 3';
                }
            });
        }, {
            threshold: 0.5
        });
        
        warningObserver.observe(introWarning);
    }

    // ==========================================
    // PENALTY ITEMS ANIMATION
    // ==========================================
    const penaltyItems = document.querySelectorAll('.penalty-item');
    
    const penaltyObserver = new IntersectionObserver((entries) => {
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

    penaltyItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px) scale(0.9)';
        item.style.transition = 'all 0.6s ease';
        penaltyObserver.observe(item);
    });

    // ==========================================
    // RULE TAGS HOVER SOUND EFFECT (Visual)
    // ==========================================
    const tags = document.querySelectorAll('.tag');
    
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ==========================================
    // CRITICAL NOTICE ATTENTION EFFECT
    // ==========================================
    const criticalNotices = document.querySelectorAll('.critical-notice');
    
    criticalNotices.forEach(notice => {
        const noticeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'pulse 1.5s ease-in-out 3';
                }
            });
        }, {
            threshold: 0.5
        });
        
        noticeObserver.observe(notice);
    });

    // ==========================================
    // HIGHLIGHT IMPORTANT TEXT
    // ==========================================
    const highlightWarnings = document.querySelectorAll('.highlight-warning');
    
    highlightWarnings.forEach(highlight => {
        highlight.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.8)';
            this.style.transition = 'text-shadow 0.3s ease';
        });
        
        highlight.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });

    // ==========================================
    // INTRO CONTENT ANIMATION
    // ==========================================
    const introContent = document.querySelector('.intro-content');
    
    if (introContent) {
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

        introContent.style.opacity = '0';
        introContent.style.transform = 'translateY(30px)';
        introContent.style.transition = 'all 1s ease';
        introObserver.observe(introContent);
    }

    // ==========================================
    // SUMMARY CARD ANIMATION
    // ==========================================
    const summaryCard = document.querySelector('.summary-card');
    
    if (summaryCard) {
        const summaryObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }
            });
        }, {
            threshold: 0.2
        });

        summaryCard.style.opacity = '0';
        summaryCard.style.transform = 'scale(0.95)';
        summaryCard.style.transition = 'all 1s ease';
        summaryObserver.observe(summaryCard);
    }

    // ==========================================
    // ADD RIPPLE EFFECT TO RULE CARDS
    // ==========================================
    ruleCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 0, 0, 0.3)';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.pointerEvents = 'none';
            
            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left - 10) + 'px';
            ripple.style.top = (e.clientY - rect.top - 10) + 'px';
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
                width: 300px;
                height: 300px;
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
    // SCROLL PROGRESS INDICATOR
    // ==========================================
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '70px';
    progressBar.style.left = '0';
    progressBar.style.width = '0';
    progressBar.style.height = '3px';
    progressBar.style.background = 'linear-gradient(90deg, var(--primary-red), var(--light-red))';
    progressBar.style.zIndex = '999';
    progressBar.style.transition = 'width 0.1s ease';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // ==========================================
    // CONSOLE MESSAGE
    // ==========================================
    console.log('%c NOSTRA RULES ', 'background: #ff0000; color: #fff; font-size: 16px; font-weight: bold; padding: 8px;');
    console.log('%c Follow the Code. Uphold the Standards. ', 'color: #ff0000; font-size: 12px;');
});
