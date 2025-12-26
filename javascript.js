document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('touchstart', () => {
        card.style.opacity = "0.8";
    });
    card.addEventListener('touchend', () => {
        card.style.opacity = "1";
    });
});