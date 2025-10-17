// ==========================================
// PAGE TRANSITIONS SCRIPT
// ==========================================

(function() {
    'use strict';

    // Ensure page is visible immediately
    document.body.style.opacity = '1';

    // Create transition overlay on page load
    function createTransitionOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'page-transition-overlay';
        overlay.innerHTML = `
            <div class="transition-panel"></div>
            <div class="transition-panel"></div>
            <div class="transition-panel"></div>
            <div class="transition-panel"></div>
            <div class="transition-panel"></div>
            <div class="lightning-effect"></div>
            <div class="chain-break"></div>
            <div class="transition-logo">
                <img src="images/logo.png" alt="Nostra eSports">
            </div>
            <div class="transition-text">Loading...</div>
        `;
        document.body.appendChild(overlay);
        return overlay;
    }

    // Initialize transition overlay
    const transitionOverlay = createTransitionOverlay();
    
    // Hide overlay initially
    transitionOverlay.style.display = 'none';

    // ==========================================
    // PAGE LOAD ANIMATION
    // ==========================================
    window.addEventListener('load', function() {
        // Remove any loading states
        document.body.classList.remove('transitioning');
        
        // Ensure overlay is hidden
        transitionOverlay.classList.remove('active');
        transitionOverlay.style.display = 'none';
    });

    // ==========================================
    // INTERCEPT NAVIGATION CLICKS
    // ==========================================
    function handlePageTransition(e) {
        // Get the clicked link element
        const link = e.target.closest('a');
        
        // If not a link, ignore
        if (!link) return;
        
        // Get the href attribute
        const href = link.getAttribute('href');
        
        // If no href, ignore
        if (!href) return;
        
        // CHECK 1: If link has target="_blank", NEVER intercept
        if (link.hasAttribute('target')) {
            return; // Let browser handle it
        }
        
        // CHECK 2: If href starts with http:// or https://, it's external
        if (href.startsWith('http://') || href.startsWith('https://')) {
            return; // Let browser handle it
        }
        
        // CHECK 3: Only intercept .html files
        if (!href.endsWith('.html')) {
            return; // Let browser handle it
        }
        
        // CHECK 4: Only intercept if it's a different page
        const currentPage = window.location.pathname.split('/').pop();
        const targetPage = href.split('/').pop();
        
        if (currentPage === targetPage) {
            return; // Same page, ignore
        }
        
        // NOW we can intercept for internal navigation
        e.preventDefault();
        startTransition(href);
    }

    // Add event listener
    document.addEventListener('click', handlePageTransition, false);

    // ==========================================
    // START TRANSITION ANIMATION
    // ==========================================
    function startTransition(url) {
        // Prevent scrolling during transition
        document.body.classList.add('transitioning');
        
        // Show and activate transition overlay
        transitionOverlay.style.display = 'flex';
        setTimeout(() => {
            transitionOverlay.classList.add('active');
        }, 10);
        
        // Play transition sound (optional - can be added)
        // playTransitionSound();
        
        // Navigate to new page after animation
        setTimeout(() => {
            window.location.href = url;
        }, 600); // Navigate halfway through the animation
    }

    // ==========================================
    // BROWSER BACK/FORWARD HANDLING
    // ==========================================
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            // Page was loaded from cache (back/forward button)
            transitionOverlay.classList.remove('active');
            transitionOverlay.style.display = 'none';
            document.body.classList.remove('transitioning');
        }
    });

    // ==========================================
    // OPTIONAL: PRELOAD PAGES
    // ==========================================
    function preloadPage(url) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
    }

    // Preload navigation pages on hover
    document.addEventListener('mouseover', function(e) {
        const target = e.target.closest('a');
        if (target && target.href) {
            const url = new URL(target.href);
            const currentUrl = new URL(window.location.href);
            
            if (url.origin === currentUrl.origin && 
                (url.pathname.endsWith('.html') || url.pathname.endsWith('/'))) {
                preloadPage(target.href);
            }
        }
    });

    // ==========================================
    // SMOOTH SCROLL TO TOP ON PAGE LOAD
    // ==========================================
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    
    window.addEventListener('beforeunload', function() {
        window.scrollTo(0, 0);
    });

    // ==========================================
    // ADD TRANSITION CLASSES TO CONTENT
    // ==========================================
    document.addEventListener('DOMContentLoaded', function() {
        // Wrap main content if not already wrapped
        const main = document.querySelector('main') || document.querySelector('body > *:not(nav):not(footer):not(.page-transition-overlay)');
        if (main && !main.classList.contains('content-wrapper')) {
            // Note: This is handled by CSS animation on body instead
        }
    });

    // ==========================================
    // CONSOLE MESSAGE
    // ==========================================
    console.log('%c PAGE TRANSITIONS ACTIVE ', 'background: #ff0000; color: #fff; font-size: 12px; font-weight: bold; padding: 6px;');

})();

// ==========================================
// EXPORT FOR USE IN OTHER SCRIPTS
// ==========================================
window.NostraTransitions = {
    // Manually trigger transition to a URL
    navigateTo: function(url) {
        const overlay = document.querySelector('.page-transition-overlay');
        if (overlay) {
            document.body.classList.add('transitioning');
            overlay.style.display = 'flex';
            setTimeout(() => {
                overlay.classList.add('active');
            }, 10);
            
            setTimeout(() => {
                window.location.href = url;
            }, 600);
        } else {
            window.location.href = url;
        }
    },
    
    // Check if transitions are supported
    isSupported: function() {
        return 'animate' in document.createElement('div');
    }
};
