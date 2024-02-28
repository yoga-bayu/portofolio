// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.about-img', { origin: 'top' });
ScrollReveal().reveal('.isi-content, .content-p', { origin: 'bottom' });
ScrollReveal().reveal('.about-content h3, .content-img', { origin: 'left' });
ScrollReveal().reveal('.about-content p, .map', { origin: 'right' });
