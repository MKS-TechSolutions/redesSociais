// Feedback visual ao toque
document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('touchstart', () => {
        card.style.opacity = "0.85";
    }, { passive: true });
    card.addEventListener('touchend', () => {
        card.style.opacity = "1";
    }, { passive: true });
});

// Opcional: corrige a altura 100vh em iOS legados
(function fixViewportHeight() {
    const setVH = () => {
        const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
        document.documentElement.style.setProperty('--vvh', `${vh}px`);
    };
    setVH();
    window.addEventListener('resize', setVH);
})();

// Se quiser usar --vvh ao invés de 100svh, troque no CSS:
// .page { height: var(--vvh); }
