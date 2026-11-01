document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.snap-section');
    const scrollContainer = document.querySelector('.snap-container');
    const floatingArrow = document.getElementById('floating-arrow');

    // Observer pour l'animation d'apparition des cartes d'information
    const observerOptions = {
        threshold: 0.4
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Gestion du comportement de la flèche de défilement
    const handleScroll = () => {
        if (!scrollContainer || !floatingArrow) return;

        const scrollTop = scrollContainer.scrollTop;
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;

        // Dès que l'utilisateur défile au-delà du toit
        if (scrollTop > 80) {
            floatingArrow.classList.add('is-active');
        } else {
            floatingArrow.classList.remove('is-active');
        }

        // Si le scroll atteint le bas de la page (dernier étage)
        if (scrollTop + clientHeight >= scrollHeight - 40) {
            floatingArrow.classList.add('is-hidden');
        } else {
            floatingArrow.classList.remove('is-hidden');
        }
    };

    if (scrollContainer) {
        scrollContainer.addEventListener('scroll', handleScroll);
    }
});