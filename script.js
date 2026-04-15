document.addEventListener('DOMContentLoaded', () => {
    // Add the animation class to elements
    const animatedElements = document.querySelectorAll('.feature-card, .price-card, .hero2-text');
    
    animatedElements.forEach(el => el.classList.add('fade-in-up'));

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing after animation triggers
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
});

